function wordsUppercase(string) {
    let matches = string.match(/(\w+)/g)
    .join(", ")
    .toUpperCase();
    console.log(matches);
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');
