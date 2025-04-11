pipeline {
  agent any

  stages {

    stage('Down containers') {
      steps {
        scrpit {
        } else {
          bat 'docker compose down'
        }
      }
    }

    stage('Build and up containers') {
      steps {
        scrpit {
          if (isUnix()) {
            bat 'docker compose up --build -d'
          }
        } else {
          bat 'docker compose up --build -d'
        }
      }
    }
  }
}
