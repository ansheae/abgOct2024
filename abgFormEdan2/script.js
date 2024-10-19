function passInputToFormE2() {
  const urlParams = new URLSearchParams(window.location.search);

  // Retrieve parameters including the rtod value
  const nameEdan2 = urlParams.get("edanE2PatientName");
  const ageEdan2 = urlParams.get("edanE2Age");
  const genderEdan2 = urlParams.get("edanE2Gender");
  const roomEdan2 = urlParams.get("edanE2Room");
  const timeEdan2 = urlParams.get("edanE2TimeSubmitted");
  const dateEdan2 = urlParams.get("edanE2DateSubmitted");
  const fio2Edan2 = urlParams.get("edanE2Fio2");
  const phEdan2 = urlParams.get("edanE2Ph");
  const pco2Edan2 = urlParams.get("edanE2Pco2");
  const po2Edan2 = urlParams.get("edanE2Po2");
  const hco3Edan2 = urlParams.get("edanE2Hco3");
  const beEdan2 = urlParams.get("edanE2Be");
  const tco2Edan2 = urlParams.get("edanE2Tco2");
  const sao2Edan2 = urlParams.get("edanE2Sao2");
  const rtodEdan2 = urlParams.get("edanE2RtodTextBox");
  const fellowEdan2 = urlParams.get("edanE2FellowTextBox");

  // Set the retrieved values into the corresponding fields
  document.getElementById("abgE2FormName").value = nameEdan2;
  document.getElementById("E2age-gender").value = `${ageEdan2}/${genderEdan2}`;
  document.getElementById("abgE2FormRoom").value = roomEdan2;
  document.getElementById("abgE2FormTime").value = timeEdan2;
  document.getElementById("abgE2FormDate").value = dateEdan2;
  document.getElementById("abgE2FormFio2").value = `${fio2Edan2} %`;
  document.getElementById("abgE2FormPh").value = phEdan2;
  document.getElementById("abgE2FormPco2").value = pco2Edan2;
  document.getElementById("abgE2FormPo2").value = po2Edan2;
  document.getElementById("abgE2FormHco3").value = hco3Edan2;
  document.getElementById("abgE2FormBe").value = beEdan2;
  document.getElementById("abgE2FormTco2").value = tco2Edan2;
  document.getElementById("abgE2FormSao2").value = sao2Edan2;

  // Format the rtod value to show on new lines
  if (rtodEdan2) {
    const rtodParts = rtodEdan2.split(";"); // Corrected from rtodEdan to rtodEdan2
    document.getElementById("abgE2FormRtod").value = rtodParts
      .map((part) => part.trim())
      .join("\n");
  }

  // Format the fellow value to show on new lines
  if (fellowEdan2) {
    const fellowParts = fellowEdan2.split(";"); // Corrected from fellowEdan to fellowEdan2
    document.getElementById("abgE2FormFellow").value = fellowParts
      .map((part) => part.trim())
      .join("\n");
  }
}
