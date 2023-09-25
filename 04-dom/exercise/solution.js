function solve() {
  let text = document.getElementById("text").value;
  let namingConvention = document.getElementById("naming-convention").value;
  let result = convertText(text, namingConvention);

  document.getElementById("result").textContent = result;

  function convertText(text, convention) {
    let words = text.toLowerCase().split(" ");
    if (convention !== "Camel Case" && convention !== "Pascal Case") {
      return "Error!";
    }

    for (let i = 0; i < words.length; i++) {
      if (i !== 0 || convention === "Pascal Case") {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
    }
    return words.join("");
  }
}
