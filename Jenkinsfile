pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "codereb00t/dbackend-docs"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git 'https://github.com/CodeReb00t/dbackend-docs.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE:latest .'
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub-pass', variable: 'PASS')]) {
                    sh '''
                    echo $PASS | docker login -u codereb00t --password-stdin
                    docker push $DOCKER_IMAGE:latest
                    '''
                }
            }
        }

    }
}