(function solve() {
  String.prototype.ensureStart = function (str) {
    return this.startsWith(str) ? this.toString() : str + this.toString();
  };
  String.prototype.ensureEnd = function (str) {
    return this.endsWith(str) ? this.toString() : this.toString() + str;
  };
  String.prototype.isEmpty = function () {
    return this.length === 0;
  };
  String.prototype.truncate = function (n) {
    if (n < 4) {
      return ".".repeat(n);
    }
    if (this.length <= n) {
      return this.toString();
    }

    let lastSpaceBeforeN = this.slice(0, n - 3 + 1).lastIndexOf(" ");
    if (lastSpaceBeforeN === -1) {
      return this.toString().substring(0, n - 3) + "...";
    }
    return this.toString().substring(0, lastSpaceBeforeN) + "...";
  };

  String.format = function (str, ...params) {
    params.forEach((param, i) => (str = str.replace(`{${i}}`, param)));
    return str;
  };
})();

let str = "my string";
console.log((str = str.ensureStart("my")));
console.log((str = str.ensureStart("hello ")));
console.log((str = str.truncate(16)));
console.log((str = str.truncate(14)));
console.log((str = str.truncate(8)));
console.log((str = str.truncate(4)));
console.log((str = str.truncate(2)));
console.log((str = String.format("The {0} {1} fox", "quick", "brown")));
console.log((str = String.format("jumps {0} {1}", "dog")));
