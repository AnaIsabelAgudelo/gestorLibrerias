pipeline {
  agent any

  stages {
    stage('Tumbar contenedores') {
      steps {
        sh 'docker-compose down -v --remove-orphans'
      }
    }

    stage('Levantar contenedores') {
      steps {
        sh 'docker compose up --build -d'
      }
    }
  }
}
