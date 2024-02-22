pipeline {
    agent any
    tools { nodejs "NodeJs" }
    stages {
        stage('Install & Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Create Image') {
            steps {
                sh 'docker build -t jojozhuang/github-monitor .'
                sh 'docker push jojozhuang/github-monitor'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker rm $(docker stop $(docker ps -a -q --filter="name=github-monitor"))'
                sh 'docker run --name github-monitor -p 12010:80 -d jojozhuang/github-monitor'
            }
        }
    }
}