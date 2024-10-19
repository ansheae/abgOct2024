///////////////////////////////////////
//             EDAN 1                //
///////////////////////////////////////
///////////////////////////////////////

// Date and Time for form1
function currentDateAndTime() {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = new Date();
  const options = { month: "short", day: "2-digit", year: "numeric" };
  const currentDate = date.toLocaleDateString("en-US", options);

  const form = document.getElementById("edan1form");

  if (!document.getElementsByName("edanTimeSubmitted").length) {
    const timeInput = document.createElement("input");
    timeInput.setAttribute("type", "hidden");
    timeInput.setAttribute("name", "edanTimeSubmitted");
    timeInput.setAttribute("value", currentTime);
    form.appendChild(timeInput);
  }

  if (!document.getElementsByName("edanDateSubmitted").length) {
    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "hidden");
    dateInput.setAttribute("name", "edanDateSubmitted");
    dateInput.setAttribute("value", currentDate);
    form.appendChild(dateInput);
  }
}

//////////////////////////////////////////////////////////////////////////

///////////////////////////////////////
// Handle form submission for EDAN 1 //
///////////////////////////////////////
function handleSubmitEdan1(event) {
  event.preventDefault();
  const fellow = document.getElementById("edanFellow").value;
  const rtod = document.getElementById("edanRtod").value;

  if (fellow === "") {
    alert("Please select a Fellow Reader.");
    return false;
  }

  if (rtod === "") {
    alert("Please select an RTOD.");
    return false;
  }

  currentDateAndTime();
  event.target.submit();
}
//////////////////////////////////////////////////////////////////////////

//
// Edan 1 RTOD to Form
//
function rtodInputToFormEdan1() {
  const selectElement = document.getElementById("edanRtod");
  const selectedValue = selectElement.value;
  // const outputDiv = document.getElementById("selectedOption");

  // Get the input text box
  var textBox = document.querySelector('input[name="edanRtodTextBox"]');

  // Set the input text box value based on dropdown selection
  textBox.value = selectedValue;

  // Clear previous output
  outputDiv.innerHTML = "";

  if (selectedValue) {
    // Split the value by semicolon and create a new line for each part
    const parts = selectedValue.split(";");
    parts.forEach((part) => {
      outputDiv.innerHTML += part.trim() + "<br>"; // Add each part to the output div
    });
  }
}
//////////////////////////////////////////////////////////////////////////

//
// Edan 1 Fellow to Form
//
function fellowInputToFormEdan1() {
  const selectElement = document.getElementById("edanFellow");
  const selectedValue = selectElement.value;
  // const outputDiv = document.getElementById("selectedOption");

  // Get the input text box
  var textBox = document.querySelector('input[name="edanFellowTextBox"]');

  // Set the input text box value based on dropdown selection
  textBox.value = selectedValue;

  // Clear previous output
  outputDiv.innerHTML = "";

  if (selectedValue) {
    // Split the value by semicolon and create a new line for each part
    const parts = selectedValue.split(";");
    parts.forEach((part) => {
      outputDiv.innerHTML += part.trim() + "<br>"; // Add each part to the output div
    });
  }
}
//////////////////////////////////////////////////////////////////////////

// Clear Edan 1 Form
function clearEdan1Form() {
  // Store the values of text boxes before reset
  const rtodTextBoxValue = document.querySelector(
    'input[name="edanRtodTextBox"]'
  ).value;
  const fellowTextBoxValue = document.querySelector(
    'input[name="edanFellowTextBox"]'
  ).value;

  // Reset the form (you need to ensure that the form has an id="edan1form")
  document.getElementById("edan1form").reset();

  // Restore the values of the text boxes
  document.querySelector('input[name="edanRtodTextBox"]').value =
    rtodTextBoxValue;
  document.querySelector('input[name="edanFellowTextBox"]').value =
    fellowTextBoxValue;
}
//
//
//////////////////////////////////////////////////////////////////////////
//
///////////////////////////////////////
//             EDAN 2                //
///////////////////////////////////////
///////////////////////////////////////

// Date and Time for form2
function currentDateAndTimeEdan2() {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = new Date();
  const options = { month: "short", day: "2-digit", year: "numeric" };
  const currentDate = date.toLocaleDateString("en-US", options);

  const form = document.getElementById("edan2form");

  if (!document.getElementsByName("edanE2TimeSubmitted").length) {
    const timeInput = document.createElement("input");
    timeInput.setAttribute("type", "hidden");
    timeInput.setAttribute("name", "edanE2TimeSubmitted");
    timeInput.setAttribute("value", currentTime);
    form.appendChild(timeInput);
  }

  if (!document.getElementsByName("edanE2DateSubmitted").length) {
    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "hidden");
    dateInput.setAttribute("name", "edanE2DateSubmitted");
    dateInput.setAttribute("value", currentDate);
    form.appendChild(dateInput);
  }
}

//////////////////////////////////////////////////////////////////////////

///////////////////////////////////////
// Handle form submission for EDAN 2 //
///////////////////////////////////////
function handleSubmitEdan2(event) {
  event.preventDefault();
  const fellow = document.getElementById("edanE2Fellow").value;
  const rtod = document.getElementById("edanE2Rtod").value;

  if (fellow === "") {
    alert("Please select a Fellow Reader.");
    return false;
  }

  if (rtod === "") {
    alert("Please select an RTOD.");
    return false;
  }

  currentDateAndTimeEdan2();
  event.target.submit();
}
//////////////////////////////////////////////////////////////////////////

//
// Edan 2 RTOD to Form
//
function rtodInputToFormEdan2() {
  const selectElement = document.getElementById("edanE2Rtod");
  const selectedValue = selectElement.value;
  // const outputDiv = document.getElementById("selectedOption");

  // Get the input text box
  var textBox = document.querySelector('input[name="edanE2RtodTextBox"]');

  // Set the input text box value based on dropdown selection
  textBox.value = selectedValue;

  // Clear previous output
  outputDiv.innerHTML = "";

  if (selectedValue) {
    // Split the value by semicolon and create a new line for each part
    const parts = selectedValue.split(";");
    parts.forEach((part) => {
      outputDiv.innerHTML += part.trim() + "<br>"; // Add each part to the output div
    });
  }
}
//
// Edan 2 Fellow to Form
//
function fellowInputToFormEdan2() {
  const selectElement = document.getElementById("edanE2Fellow");
  const selectedValue = selectElement.value;
  // const outputDiv = document.getElementById("selectedOption");

  // Get the input text box
  var textBox = document.querySelector('input[name="edanE2FellowTextBox"]');

  // Set the input text box value based on dropdown selection
  textBox.value = selectedValue;

  // Clear previous output
  outputDiv.innerHTML = "";

  if (selectedValue) {
    // Split the value by semicolon and create a new line for each part
    const parts = selectedValue.split(";");
    parts.forEach((part) => {
      outputDiv.innerHTML += part.trim() + "<br>"; // Add each part to the output div
    });
  }
}

//////////////////////////////////////////////////////////////////////////

// Clear Edan 2 Form
function clearEdan2Form() {
  // Store the values of text boxes before reset
  const rtodE2TextBoxValue = document.querySelector(
    'input[name="edanE2RtodTextBox"]'
  ).value;
  const fellowE2TextBoxValue = document.querySelector(
    'input[name="edanE2FellowTextBox"]'
  ).value;

  // Reset the form (you need to ensure that the form has an id="edan1form")
  document.getElementById("edan2form").reset();

  // Restore the values of the text boxes
  document.querySelector('input[name="edanE2RtodTextBox"]').value =
    rtodE2TextBoxValue;
  document.querySelector('input[name="edanE2FellowTextBox"]').value =
    fellowE2TextBoxValue;
}
///////////////////////////////////////
//             EDAN 2                //
///////////////////////////////////////
///////////////////////////////////////

///////////////////////////////////////
//
//
//
//

//////////////////////////////////////////////////////////////////////////
//
///////////////////////////////////////
//             EDAN 3                //
///////////////////////////////////////
///////////////////////////////////////

// Date and Time for form 3
function currentDateAndTimeEdan3() {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = new Date();
  const options = { month: "short", day: "2-digit", year: "numeric" };
  const currentDate = date.toLocaleDateString("en-US", options);

  const form = document.getElementById("edan3form");

  if (!document.getElementsByName("edanE3TimeSubmitted").length) {
    const timeInput = document.createElement("input");
    timeInput.setAttribute("type", "hidden");
    timeInput.setAttribute("name", "edanE3TimeSubmitted");
    timeInput.setAttribute("value", currentTime);
    form.appendChild(timeInput);
  }

  if (!document.getElementsByName("edanE3DateSubmitted").length) {
    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "hidden");
    dateInput.setAttribute("name", "edanE3DateSubmitted");
    dateInput.setAttribute("value", currentDate);
    form.appendChild(dateInput);
  }
}

//////////////////////////////////////////////////////////////////////////

///////////////////////////////////////
// Handle form submission for EDAN 3 //
///////////////////////////////////////
function handleSubmitEdan3(event) {
  event.preventDefault();
  const fellow = document.getElementById("edanE3Fellow").value;
  const rtod = document.getElementById("edanE3Rtod").value;

  if (fellow === "") {
    alert("Please select a Fellow Reader.");
    return false;
  }

  if (rtod === "") {
    alert("Please select an RTOD.");
    return false;
  }

  currentDateAndTimeEdan3();
  event.target.submit();
}
//////////////////////////////////////////////////////////////////////////

//
// Edan 3 RTOD to Form
//
function rtodInputToFormEdan3() {
  const selectElement = document.getElementById("edanE3Rtod");
  const selectedValue = selectElement.value;
  // const outputDiv = document.getElementById("selectedOption");

  // Get the input text box
  var textBox = document.querySelector('input[name="edanE3RtodTextBox"]');

  // Set the input text box value based on dropdown selection
  textBox.value = selectedValue;

  // Clear previous output
  outputDiv.innerHTML = "";

  if (selectedValue) {
    // Split the value by semicolon and create a new line for each part
    const parts = selectedValue.split(";");
    parts.forEach((part) => {
      outputDiv.innerHTML += part.trim() + "<br>"; // Add each part to the output div
    });
  }
}
//
// Edan 3 Fellow to Form
//
function fellowInputToFormEdan3() {
  const selectElement = document.getElementById("edanE3Fellow");
  const selectedValue = selectElement.value;
  // const outputDiv = document.getElementById("selectedOption");

  // Get the input text box
  var textBox = document.querySelector('input[name="edanE3FellowTextBox"]');

  // Set the input text box value based on dropdown selection
  textBox.value = selectedValue;

  // Clear previous output
  outputDiv.innerHTML = "";

  if (selectedValue) {
    // Split the value by semicolon and create a new line for each part
    const parts = selectedValue.split(";");
    parts.forEach((part) => {
      outputDiv.innerHTML += part.trim() + "<br>"; // Add each part to the output div
    });
  }
}

//////////////////////////////////////////////////////////////////////////

// Clear Edan 3 Form
function clearEdan3Form() {
  // Store the values of text boxes before reset
  const rtodE3TextBoxValue = document.querySelector(
    'input[name="edanE3RtodTextBox"]'
  ).value;
  const fellowE3TextBoxValue = document.querySelector(
    'input[name="edanE3FellowTextBox"]'
  ).value;

  // Reset the form (you need to ensure that the form has an id="edan1form")
  document.getElementById("edan3form").reset();

  // Restore the values of the text boxes
  document.querySelector('input[name="edanE3RtodTextBox"]').value =
    rtodE3TextBoxValue;
  document.querySelector('input[name="edanE3FellowTextBox"]').value =
    fellowE3TextBoxValue;
}
///////////////////////////////////////
//             EDAN 3                //
///////////////////////////////////////
///////////////////////////////////////

///////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
//
//
// Call the functions to populate the form when the page loads
window.onload = function () {
  rtodInputToFormEdan1();
  fellowInputToFormEdan1();
  rtodInputToFormEdan2();
  fellowInputToFormEdan2();
  rtodInputToFormEdan3();
  fellowInputToFormEdan3();
};
//////////////////////////////////////////////////////////////////////////
// Event Listeners
document
  .getElementById("edan1form")
  .addEventListener("submit", handleSubmitEdan1);
document
  .getElementById("edan2form")
  .addEventListener("submit", handleSubmitEdan2);
document
  .getElementById("edan3form")
  .addEventListener("submit", handleSubmitEdan3);

function handleSubmitEdan1(event) {
  event.preventDefault(); // Prevent the default form submission

  const form = document.getElementById("edan1form");
  const inputs = form.querySelectorAll(
    'input[type="text"], input[type="time"]'
  );
  let valid = true;

  inputs.forEach((input) => {
    if (input.value === "") {
      valid = false;
      alert(`${input.placeholder} is required.`);
    }
  });

  if (valid) {
    // Submit the form or perform further actions
    form.submit();
  }
}

function handleSubmitEdan2(event) {
  event.preventDefault(); // Prevent the default form submission

  const form = document.getElementById("edan2form");
  const inputs = form.querySelectorAll(
    'input[type="text"], input[type="time"]'
  );
  let valid = true;

  inputs.forEach((input) => {
    if (input.value === "") {
      valid = false;
      alert(`${input.placeholder} is required.`);
    }
  });

  if (valid) {
    // Submit the form or perform further actions
    form.submit();
  }
}

function handleSubmitEdan3(event) {
  event.preventDefault(); // Prevent the default form submission

  const form = document.getElementById("edan3form");
  const inputs = form.querySelectorAll(
    'input[type="text"], input[type="time"]'
  );
  let valid = true;

  inputs.forEach((input) => {
    if (input.value === "") {
      valid = false;
      alert(`${input.placeholder} is required.`);
    }
  });

  if (valid) {
    // Submit the form or perform further actions
    form.submit();
  }
}
