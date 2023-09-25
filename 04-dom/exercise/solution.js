function solve() {
  let text = document.getElementById("text").value;
  let namingConvention = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");
  let words = text.toLowerCase().split(" ");
  result.textContent = convertText(words, namingConvention);

  function convertText(words, convention) {
    let result = "";
    if (convention.toLocaleLowerCase().includes("camel")) {
      result += words[0].toLocaleLowerCase();
      for (let i = 1; i < words.length; i++) {
        result += words[i][0].toUpperCase() + words[i].substring(1).toLocaleLowerCase();
      }
    } else if (convention.toLocaleLowerCase().includes("pascal")) {
      for (let i = 0; i < words.length; i++) {
        result += words[i][0].toUpperCase() + words[i].substring(1).toLocaleLowerCase();
      }
    } else {
      return "Error!";
    }
    return result;
  }
}
