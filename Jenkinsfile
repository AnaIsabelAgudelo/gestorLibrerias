pipeline {
  agent any

  environment {
    TERRAFORM_BIN = 'C:\\Terraform\\terraform.exe'        
    TERRAFORM_WORKING_DIR = 'terraform'                   
  }

  stages {
    stage('Terraform Init') {
      steps {
        script {
          echo 'Inicializando Terraform...'
          bat "${env.TERRAFORM_BIN} -chdir=${env.TERRAFORM_WORKING_DIR} init"
        }
      }
    }

    stage('Terraform Plan') {
      steps {
        script {
          echo 'Planeando infraestructura...'
          bat "${env.TERRAFORM_BIN} -chdir=${env.TERRAFORM_WORKING_DIR} plan -out=tfplan"
        }
      }
    }

    stage('Terraform Apply') {
      steps {
        script {
          echo 'Aplicando infraestructura...'
          bat "${env.TERRAFORM_BIN} -chdir=${env.TERRAFORM_WORKING_DIR} apply -auto-approve tfplan"
        }
      }
    }
  }

  post {
    success {
      echo '¡Infraestructura actualizada correctamente con Terraform!'
    }
    failure {
      echo 'Error en el pipeline, revisar logs.'
    }
  }
}
