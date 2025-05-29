pipeline {
  agent any

  environment {
    TERRAFORM_WORKING_DIR = './terraform'  // Ajusta si tu carpeta terraform está en otra ruta
  }

  stages {
    stage('Terraform Init') {
      steps {
        script {
          echo 'Inicializando Terraform...'
          bat "cd ${env.TERRAFORM_WORKING_DIR} && terraform init"
        }
      }
    }

    stage('Terraform Plan') {
      steps {
        script {
          echo 'Generando plan Terraform...'
          bat "cd ${env.TERRAFORM_WORKING_DIR} && terraform plan -out=tfplan"
        }
      }
    }

    stage('Terraform Apply') {
      steps {
        script {
          echo 'Aplicando plan Terraform...'
          bat "cd ${env.TERRAFORM_WORKING_DIR} && terraform apply -auto-approve tfplan"
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
