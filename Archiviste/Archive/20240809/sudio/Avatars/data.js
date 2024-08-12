const IntelAgent = require('./intel.js');

const intelAgent = new IntelAgent();

const systemInfo = intelAgent.gatherSystemInfo();
console.log(systemInfo);

const fileInfo = intelAgent.gatherFileInfo('./data/');
console.log(fileInfo);

const serverResponseStatus = intelAgent.uploadDataToServer({ systemInfo, fileInfo });
console.log(serverResponseStatus);
