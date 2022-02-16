const startExtractingFlow = async (worker, URL, config) => {
  const results = {};

  for (const settingName in config.coldwarScoreboard.cropSettings) {
    console.log("Scanning", settingName);

    const currentSettings = config.coldwarScoreboard.cropSettings[settingName];

    if (Array.isArray(currentSettings)) {
      // loop trough the array

      for (const index in currentSettings) {
        const result = await worker.recognize(URL, {
          rectangle: currentSettings[index],
        });

        const extracedText = result.data.text.replace("\n", "");

        if (!results.hasOwnProperty(settingName)) {
          results[settingName] = [];
        }

        results[settingName].push(extracedText);
      }
    } else {
      const result = await worker.recognize(URL, {
        rectangle: currentSettings,
      });

      const extracedText = result.data.text.replace("\n", "");

      if (settingName.slice(-5) === "Score") {
        results[settingName] = extractNumbersFromString(extracedText);

        continue;
      }

      results[settingName] = extracedText;
    }
  }

  await worker.terminate();

  return results;
};

const extractNumbersFromString = (string) => {
  const array = string.split("");
  let number = "";

  for (let i = 0; i < array.length; i++) {
    const char = parseInt(array[i]);
    if (!isNaN(char)) {
      number += char;
    }
  }

  return parseInt(number);
};

export default startExtractingFlow;
