function calculate() {
  let lecture = parseInt(document.getElementById("lecture").value);
  let absent = parseInt(document.getElementById("absent").value);
  let oaa = parseInt(document.getElementById("oaa").value);

  let resultBox = document.getElementById("result");

  if (isNaN(lecture) || isNaN(absent) || isNaN(oaa)) {
    resultBox.innerHTML = "⚠ Please fill all fields!";
    return;
  }

  if (lecture <= 0) {
    resultBox.innerHTML = "⚠ Lectures must be greater than 0!";
    return;
  }

  if (absent < oaa) {
    resultBox.innerHTML = "⚠ OAA cannot be greater than absent!";
    return;
  }

  let percentage = 100 - (((absent - oaa) / lecture) * 100);

  let text = "Attendance: " + percentage.toFixed(2) + "%<br>";

  if (percentage < 75) {
    text += "<span class='danger'>Below 75% ❌</span><br>";

    let attended = lecture - absent + oaa;

    let needed = Math.ceil(
      (0.75 * lecture - attended) / 0.25
    );

    text += "You need to attend " + needed + " more classes";
  } else {
    text += "<span class='safe'>Safe ✔</span><br>";

    let canMiss = Math.floor(
      ((lecture - absent + oaa) - 0.75 * lecture) / 0.75
    );

    text += "You can miss " + canMiss + " classes";
  }

  resultBox.innerHTML = text;
}