let form = document.getElementById("form");
let result = document.getElementById("result");
let dobInput = document.getElementById("dob-input");
dobInput.max = new Date().toISOString().split("T")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let birthDate = new Date(dobInput.value);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let todayDate = new Date();

  let d2 = todayDate.getDate();
  let m2 = todayDate.getMonth() + 1;
  let y2 = todayDate.getFullYear();

  let d3, y3, m3;

  y3 = y2 - y1;

  if (m2 > m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 > d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }

  dobInput.value = "";
  result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`;
});

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
