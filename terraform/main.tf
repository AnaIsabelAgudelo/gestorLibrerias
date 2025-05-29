terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "3.6.0"
    }
  }
}

provider "docker" {}

# Crear red personalizada
resource "docker_network" "library_net" {
  name = "library_net"
}

# MongoDB
resource "docker_container" "mongo" {
  name  = "mongo"
  image = "mongo"
  networks_advanced {
    name = docker_network.library_net.name
  }
  ports {
    internal = 27017
    external = 27017
  }
}

# Books Service
resource "docker_image" "books_service" {
  name = "books-service"
  build {
    context = "${path.module}/../services/books-service"
  }
}

resource "docker_container" "books_service" {
  name  = "books-service"
  image = docker_image.books_service.name
  ports {
    internal = 3002
    external = 3002
  }
  env = [
    "PORT=3002",
    "MONGO_URL=mongodb://mongo:27017/books-db"
  ]
  networks_advanced {
    name = docker_network.library_net.name
  }
  depends_on = [docker_container.mongo]
}

# Users Service
resource "docker_image" "users_service" {
  name = "users-service"
  build {
    context = "${path.module}/../services/users-service"
  }
}

resource "docker_container" "users_service" {
  name  = "users-service"
  image = docker_image.users_service.name
  ports {
    internal = 3001
    external = 3001
  }
  env = [
    "PORT=3001",
    "MONGO_URL=mongodb://mongo:27017/users-db"
  ]
  networks_advanced {
    name = docker_network.library_net.name
  }
  depends_on = [docker_container.mongo]
}

# Rentals Service
resource "docker_image" "rentals_service" {
  name = "rentals-service"
  build {
    context = "${path.module}/../services/rentals-service"
  }
}

resource "docker_container" "rentals_service" {
  name  = "rentals-service"
  image = docker_image.rentals_service.name
  ports {
    internal = 3003
    external = 3003
  }
  env = [
    "PORT=3003",
    "MONGO_URL=mongodb://mongo:27017/rentals-db"
  ]
  networks_advanced {
    name = docker_network.library_net.name
  }
  depends_on = [docker_container.mongo]
}

# API Gateway
resource "docker_image" "api_gateway" {
  name = "api-gateway"
  build {
    context = "${path.module}/../api-gateway"
  }
}

resource "docker_container" "api_gateway" {
  name  = "api-gateway"
  image = docker_image.api_gateway.name
  ports {
    internal = 80
    external = 80
  }
  networks_advanced {
    name = docker_network.library_net.name
  }
  depends_on = [
    docker_container.books_service,
    docker_container.users_service,
    docker_container.rentals_service
  ]
}

# Frontend (Angular)
resource "docker_image" "frontend" {
  name = "frontend"
  build {
    context = "${path.module}/../biblioteca-front"
  }
}

resource "docker_container" "frontend" {
  name  = "frontend"
  image = docker_image.frontend.name
  ports {
    internal = 3000
    external = 3000
  }
  networks_advanced {
    name = docker_network.library_net.name
  }
  depends_on = [docker_container.api_gateway]
}
