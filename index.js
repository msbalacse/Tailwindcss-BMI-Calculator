const female = document.querySelector("#female");
const male = document.querySelector("#male");
const age = document.querySelector("#age");
const calculate = document.querySelector("#calculate");
const show = document.querySelector("#show");
const box = document.querySelector("#box");
const cancel = document.querySelector("#cancel");
const blurbg = document.querySelector("#blurbg");

const height = document.querySelector("#height");
const weight = document.querySelector("#weight");

// range on change functionality

age.addEventListener("change", (e) => {
  let value = e.target.value;
  show.textContent = value;
});
show.innerHTML = age.value;

// Profile Selection

female.addEventListener("click", () => {
  if (!male.classList.toggle("col") == false) {
    male.classList.remove("col");
  }
  female.classList.toggle("col");
});

male.addEventListener("click", () => {
  if (
    !female.classList.toggle("col") == true ||
    !female.classList.toggle("col") == false
  ) {
    female.classList.remove("col");
  }
  male.classList.toggle("col");
});

// calculate the BMI value

const calcBMI = () => (weight.value / height.value / height.value) * 10000;

// ============= Main Calculation ===================

calculate.addEventListener("click", () => {
  if (
    (!female.classList.contains("col") == true &&
      !male.classList.contains("col") == true) ||
    height.value == 0 ||
    weight.value == 0
  ) {
    box.classList.remove("hidden");
    box.classList.toggle("box");
    blurbg.classList.toggle("bluref");

    box.innerHTML = `<div><img src="assets/warning.png" width="300px" /></div><p>Please, Enter the requirement</p><img src="assets/cancel.png" onclick="exit()" class="cancel" alt="cancel btn"
      />`;
  } else {
    box.classList.toggle("box");
    blurbg.classList.toggle("bluref");
    const calc = calcBMI();
    let value = "";
    if (calc < 16) {
      value = "Severe Thinness";
    } else if (calc < 17 && calc >= 16) {
      value = "Moderate Thinness";
    } else if (calc > 17 && calc < 18.5) {
      value = "Mild Thinness";
    } else if (calc >= 18.5 && calc < 25) {
      value = "Normal";
    } else if (calc >= 25 && calc < 30) {
      value = "Overweight";
    } else if (calc >= 30 && calc < 35) {
      value = "Obese Class I";
    } else if (calc >= 35 && calc < 40) {
      value = "Obese Class II";
    } else if (calc >= 40) {
      value = "Obese Class III";
    }

    if (male.classList.contains("col") == true) {
      box.innerHTML = `<img src="assets/male-avatar.png" width="100px" /> <img src="assets/cancel.png" onclick="exit()" class="cancel" alt="cancel btn"
      /> <h1>${value}</h1> <h3>${
        age.value
      }</h3> Your BMI value is ${calc.toFixed(2)}`;
    } else {
      box.innerHTML = `<img src="assets/female-avatar.png" width="100px" /> <img src="assets/cancel.png" onclick="exit()" class="cancel" alt="cancel btn"
      /> <h1>${value}</h1> <h3>${
        age.value
      }</h3> Your BMI value is ${calc.toFixed(2)}`;
    }
    box.classList.remove("hidden");

    // To Make things default

    height.value = "";
    weight.value = "";
    age.value = 20;
    male.classList.remove("col");
    female.classList.remove("col");
    show.textContent = age.value;
  }
});

blurbg.addEventListener("click", () => {
  box.classList.toggle("box");
  box.classList.add("hidden");
  blurbg.classList.toggle("bluref");
});

function exit() {
  box.classList.toggle("box");
  box.classList.add("hidden");
  blurbg.classList.toggle("bluref");
}
