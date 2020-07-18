const display = document.querySelector("#time");

  setInterval(() => {
    // const now = new Date();

    // let hour = now.getHours() % 12;
    // let minute = now.getMinutes();
    // let second = now.getSeconds();
    // let midday = "PM";

    // if (minute < 10) {
    //   minute = "0" + minute;
    // }
    // if (second < 10) {
    //   second = "0" + second;
    // }
    // if (hour < 10) {
    //   hour = "0" + hour;
    // }

    // if (hour === 0) {
    //   hour = 12;
    // }

    // if (hour < 12) {
    //   mid = "AM";
    // }
    // display.innerHTML = hour + ":" + minute + ":" + second + "   " + mid;
    display.innerHTML = new Date().toLocaleTimeString()

  }, 1000);

