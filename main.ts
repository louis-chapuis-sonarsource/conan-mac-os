const { exec } = require('child_process');
exec("$HOME/.sonar/sonar-scanner-4.6.2.2472-macosx/bin/sonar-scanner", ["-Dsonar.cfamily.build-wrapper-output=bw-output", "-Dsonar.projectKey=louis-chapuis-sonarsource_conan-mac-os_AYct2Xs62boBvgt9JBvR"],(err, stdout, stderr) => {
    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });

