pipeline {
  agent any

  stages {

    stage('Mensaje') {
      steps {
        sh 'Hola...'
      }
    }

    stage('Clonar código') {
      steps {
        git 'https://github.com/AnaIsabelAgudelo/gestorLibrerias.git'
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
