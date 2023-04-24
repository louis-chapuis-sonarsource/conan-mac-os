const exec = require('@actions/exec');

let errorMessage = '';
const options = {};
options.listeners = {
  stderr: (data: Buffer) => {
    errorMessage += data.toString()
  }
}

await exec.exec("sonar-scanner", ["-Dsonar.cfamily.build-wrapper-output=bw-output", "-Dsonar.projectKey=louis-chapuis-sonarsource_conan-mac-os_AYct2Xs62boBvgt9JBvR"], options)
