node {
  stage('Checkout') {
    git branch: 'main', url: 'https://github.com/Sarthak-code786/spring_localstorage_crud_ui.git'
  }

  stage('Permission Setup') {
    // Make gradlew executable
    sh 'chmod +x gradlew'
  }

  stage('Build') {
    // Clean and build using Gradle wrapper
    sh './gradlew clean build'
  }

  stage('Test') {
    // Run tests
    sh './gradlew test'
  }

  stage('Run App') {
    // Start Spring Boot in background
    sh 'nohup ./gradlew bootRun > app.log 2>&1 &'
    sleep 10 // Give time to start
  }

  stage('Post: Always') {
  archiveArtifacts artifacts: 'build/libs/*.jar', fingerprint: true
}


if (currentBuild.result == null || currentBuild.result == 'SUCCESS') {
  stage('Post: Success') {
    echo 'Build and tests succeeded!'
  }
} else if (currentBuild.result == 'FAILURE') {
  stage('Post: Failure') {
    echo 'Build or tests failed!'
  }
}
  stage('Cleanup') {
    // Kill the running app
    sh '''
    PID=$(lsof -ti:8080)
    if [ -n "$PID" ]; then
      kill -9 $PID
    fi
    '''
  }
}



