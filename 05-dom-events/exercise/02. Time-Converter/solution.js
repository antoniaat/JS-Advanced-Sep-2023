function attachEventsListeners() {
  const main = document.querySelector("main");

    main.addEventListener("click", convert);
    const inputsCollection = document.querySelectorAll('main input[type="text"]');

    function convert(element) {
      if (element.target.value == "Convert") {
        convertAll(element.target);
      }
    }

    function convertAll(button) {
      const div = button.parentElement;
      const input = div.querySelector('input[type="text"]');
      const label = input.id;
      const num = Number(input.value);
      const resultObj = calc(label, num);

      for (let input of inputsCollection) {
        let id = input.id;
        input.value = resultObj[id];
      }
    }

    function calc(type, num) => funcObj[type](num)

    funcObj = {
      days: (num) => ({
          days: num,
          hours: num * 24,
          minutes: num * 1440,
          seconds: num * 86400,
        }),
      hours: (num) => ({
          days: num / 24,
          hours: num,
          minutes: (num / 24) * 1440,
          seconds: (num / 24) * 86400,
        }),
      minutes: (num) => ({
          days: num / 1440,
          hours: num / 60,
          minutes: num,
          seconds: num * 60,
        }),
      seconds: (num) => ({
          days: num / 60 / 1440,
          hours: num / 60 / 60,
          minutes: num / 60,
          seconds: num,
        })
    };
  }
}
