let display = document.getElementById("display")

function appendValue(me) {
  display.value += me
}

function clearDisplay() {
  display.value = ""
}

function deleteLast() {
  display.value = display.value.slice(0, -1)
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}