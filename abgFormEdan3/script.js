function passInputToFormE3() {
  const urlParams = new URLSearchParams(window.location.search);

  // Retrieve parameters including the rtod value
  const nameEdan3 = urlParams.get("edanE3PatientName");
  const ageEdan3 = urlParams.get("edanE3Age");
  const genderEdan3 = urlParams.get("edanE3Gender");
  const roomEdan3 = urlParams.get("edanE3Room");
  const timeEdan3 = urlParams.get("edanE3TimeSubmitted");
  const dateEdan3 = urlParams.get("edanE3DateSubmitted");
  const fio2Edan3 = urlParams.get("edanE3Fio2");
  const phEdan3 = urlParams.get("edanE3Ph");
  const pco2Edan3 = urlParams.get("edanE3Pco2");
  const po2Edan3 = urlParams.get("edanE3Po2");
  const hco3Edan3 = urlParams.get("edanE3Hco3");
  const beEdan3 = urlParams.get("edanE3Be");
  const tco2Edan3 = urlParams.get("edanE3Tco2");
  const sao2Edan3 = urlParams.get("edanE3Sao2");
  const rtodEdan3 = urlParams.get("edanE3RtodTextBox");
  const fellowEdan3 = urlParams.get("edanE3FellowTextBox");

  // Set the retrieved values into the corresponding fields
  document.getElementById("abgE3FormName").value = nameEdan3;
  document.getElementById("E3age-gender").value = `${ageEdan3}/${genderEdan3}`;
  document.getElementById("abgE3FormRoom").value = roomEdan3;
  document.getElementById("abgE3FormTime").value = timeEdan3;
  document.getElementById("abgE3FormDate").value = dateEdan3;
  document.getElementById("abgE3FormFio2").value = `${fio2Edan3} %`;
  document.getElementById("abgE3FormPh").value = phEdan3;
  document.getElementById("abgE3FormPco2").value = pco2Edan3;
  document.getElementById("abgE3FormPo2").value = po2Edan3;
  document.getElementById("abgE3FormHco3").value = hco3Edan3;
  document.getElementById("abgE3FormBe").value = beEdan3;
  document.getElementById("abgE3FormTco2").value = tco2Edan3;
  document.getElementById("abgE3FormSao2").value = sao2Edan3;

  // Format the rtod value to show on new lines
  if (rtodEdan3) {
    const rtodParts = rtodEdan3.split(";"); // Corrected from rtodEdan to rtodEdan2
    document.getElementById("abgE3FormRtod").value = rtodParts
      .map((part) => part.trim())
      .join("\n");
  }

  // Format the fellow value to show on new lines
  if (fellowEdan3) {
    const fellowParts = fellowEdan3.split(";"); // Corrected from fellowEdan to fellowEdan2
    document.getElementById("abgE3FormFellow").value = fellowParts
      .map((part) => part.trim())
      .join("\n");
  }
}
