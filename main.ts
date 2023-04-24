const exec = require('@actions/exec');

let errorMessage = '';
const options = {};

exec.exec(".sonar/sonar-scanner-4.6.2.2472-macosx/bin/sonar-scanner", ["-Dsonar.cfamily.build-wrapper-output=bw-output", "-Dsonar.projectKey=louis-chapuis-sonarsource_conan-mac-os_AYct2Xs62boBvgt9JBvR"], options)
