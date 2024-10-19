function passInputToForm() {
  const urlParams = new URLSearchParams(window.location.search);

  // Retrieve parameters including the rtod and fellow values
  const nameEdan = urlParams.get("edanPatientName");
  const ageEdan = urlParams.get("edanAge");
  const genderEdan = urlParams.get("edanGender");
  const roomEdan = urlParams.get("edanRoom");
  const timeEdan = urlParams.get("edanTimeSubmitted");
  const dateEdan = urlParams.get("edanDateSubmitted");
  const fio2Edan = urlParams.get("edanFio2");
  const phEdan = urlParams.get("edanPh");
  const pco2Edan = urlParams.get("edanPco2");
  const po2Edan = urlParams.get("edanPo2");
  const hco3Edan = urlParams.get("edanHco3");
  const beEdan = urlParams.get("edanBe");
  const tco2Edan = urlParams.get("edanTco2");
  const sao2Edan = urlParams.get("edanSao2");
  const rtodEdan = urlParams.get("edanRtodTextBox");
  const fellowEdan = urlParams.get("edanFellowTextBox");

  // Set the retrieved values into the corresponding fields
  document.getElementById("abgFormName").value = nameEdan;
  document.getElementById("age-gender").value = `${ageEdan}/${genderEdan}`;
  document.getElementById("abgFormRoom").value = roomEdan;
  document.getElementById("abgFormTime").value = timeEdan;
  document.getElementById("abgFormDate").value = dateEdan;
  document.getElementById("abgFormFio2").value = `${fio2Edan} %`;
  document.getElementById("abgFormPh").value = phEdan;
  document.getElementById("abgFormPco2").value = pco2Edan;
  document.getElementById("abgFormPo2").value = po2Edan;
  document.getElementById("abgFormHco3").value = hco3Edan;
  document.getElementById("abgFormBe").value = beEdan;
  document.getElementById("abgFormTco2").value = tco2Edan;
  document.getElementById("abgFormSao2").value = sao2Edan;


  
  // Format the rtod value to show on new lines
  if (rtodEdan) {
    const rtodParts = rtodEdan.split(";");
    document.getElementById("abgFormRtod").value = rtodParts
      .map((part) => part.trim())
      .join("\n");
  }

  // Format the fellow value to show on new lines
  if (fellowEdan) {
    const fellowParts = fellowEdan.split(";");
    document.getElementById("abgFormFellow").value = fellowParts
      .map((part) => part.trim())
      .join("\n");
  }
}


