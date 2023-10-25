function generateQRCode() {
    var phoneNumber = document.getElementById("phone-input").value;
    var qrcode = new QRCode("qrcode", {
      text: "tel:" + phoneNumber,
      width: 300,
      height: 300,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
    
    // Show download link
    document.getElementById("download-link").style.display = "block";
  }