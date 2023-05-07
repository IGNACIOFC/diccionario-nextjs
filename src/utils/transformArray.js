export default function transformArray(inputArray) {
  const outputArray = [];

  for (let i = 0; i < inputArray.length; i += 2) {
    if (inputArray[i].role === "Prompt" && inputArray[i + 1]?.role === "Response") {
      const response = inputArray[i + 1].say
        .replace("Frase de ejemplo:", "\n\nFrase de ejemplo:")
        .replace("Sinónimos:", "\n\nSinónimos:");

        outputArray.push({
          prompt: capitalizeFirstLetter(inputArray[i].say),
          response: response,
        });
    }
  }

  return outputArray;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
