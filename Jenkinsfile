pipeline {
  agent any

  stages {
    stage('Down containers') {
      steps {
        script {
          echo 'Deteniendo contenedores...'
          bat 'docker compose down || echo "No hay contenedores para detener."'
        }
      }
    }

    stage('Build and up containers') {
      steps {
        script {
          echo 'Construyendo y levantando contenedores...'
          bat 'docker compose up --build -d'
        }
      }
    }
  }
}
