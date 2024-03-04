pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Build the backend and frontend Docker images
                    docker.build('backend', './Backend')
                    docker.build('frontend', './Frontend')
                }
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                script {
                    // Push the backend and frontend Docker images to Docker Hub
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        docker.image('jawadmohd/mern-ecommerce-backend').push('latest')
                        docker.image('jawadmohd/mern-ecommerce-frontend').push('latest')
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the application using Docker Compose
                sh 'sudo docker-compose up -d'
            }
        }
    }
}
