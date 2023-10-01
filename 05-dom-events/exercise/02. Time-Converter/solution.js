function attachEventsListeners() {
  function attachEventsListeners() {
    let main = document.querySelector("main");

    main.addEventListener("click", convert);
    let inputsCollection = document.querySelectorAll('main input[type="text"]');

    function convert(element) {
      if (element.target.value == "Convert") {
        convertAll(element.target);
      }
    }

    function convertAll(button) {
      let div = button.parentElement;
      let input = div.querySelector('input[type="text"]');
      let label = input.id;
      let num = Number(input.value);
      let resultObj = calc(label, num);

      for (let input of inputsCollection) {
        let id = input.id;
        input.value = resultObj[id];
      }
    }

    function calc(type, num) {
      return funcObj[type](num);
    }

    funcObj = {
      days: (num) => {
        return {
          days: num,
          hours: num * 24,
          minutes: num * 1440,
          seconds: num * 86400,
        };
      },
      hours: (num) => {
        return {
          days: num / 24,
          hours: num,
          minutes: (num / 24) * 1440,
          seconds: (num / 24) * 86400,
        };
      },
      minutes: (num) => {
        return {
          days: num / 1440,
          hours: num / 60,
          minutes: num,
          seconds: num * 60,
        };
      },
      seconds: (num) => {
        return {
          days: num / 60 / 1440,
          hours: num / 60 / 60,
          minutes: num / 60,
          seconds: num,
        };
      },
    };
  }
}
