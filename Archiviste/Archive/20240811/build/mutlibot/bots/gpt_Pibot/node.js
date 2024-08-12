const nodejs = () => {
    const startTime = performance.now();
    const data = asyncJson('package.json');
    data.then(() => {
      const endTime = performance.now();
      const timeDiff = endTime - startTime;
      console.log(`Temps d'exécution: ${timeDiff} ms`);
    });
  };
  
 nodejs();