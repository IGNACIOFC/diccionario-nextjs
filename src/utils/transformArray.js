export default function transformObject(inputObject) {
  const outputObject = {};

  for (const [category, inputArray] of Object.entries(inputObject)) {
    outputObject[category] = [];

    for (let i = 0; i < inputArray.length; i += 2) {
      if (inputArray[i].role === "Prompt" && inputArray[i + 1]?.role === "Response") {
        const response = inputArray[i + 1].say
        .replace("Frase de ejemplo:", "\n\n**Frase de ejemplo:**")
        .replace("Ejemplo:", "\n\n**Ejemplo:**")
        .replace("Sinónimos:", "\n\n**Sinónimos:**")
        .replace("Uso en una frase:", "\n\n**Uso en una frase:**");
        outputObject[category].push({
          prompt: capitalizeFirstLetter(inputArray[i].say),
          response: response,
        });
      }
    }
  }

  return outputObject;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
