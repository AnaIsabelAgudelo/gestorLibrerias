pipeline {
  agent any

  stages {
    stage('Clonar código') {
      steps {
        git 'https://tu-repo.git'
      }
    }

    stage('Construir contenedores') {
      steps {
        sh 'docker compose build'
      }
    }

    stage('Levantar contenedores') {
      steps {
        sh 'docker compose up -d'
      }
    }
  }
}
