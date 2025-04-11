pipeline {
  agent any

  stages {

    stage('Construir contenedores') {
      steps {
        sh 'docker compose build'
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
