export default function transformArray(inputArray) {
  const outputArray = [];

  for (let i = 0; i < inputArray.length; i += 2) {
    if (inputArray[i].role === "Prompt" && inputArray[i + 1]?.role === "Response") {
      outputArray.push({
        prompt: inputArray[i].say,
        response: inputArray[i + 1].say,
      });
    }
  }

  return outputArray;
}

