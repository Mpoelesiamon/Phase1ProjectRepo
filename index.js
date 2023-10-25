const qrDiv= document.querySelector("#qrDiv")
function generateQRCode() {
    let phoneNumber = document.getElementById("phone-input").value;
    let numberPattern = /^\d{10}$|^\d{13}$/;

    // const integerValue = parseInt(phoneNumber, 10);

    if( numberPattern.test(phoneNumber)){
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
    else{
        alert("Enter a valid Phone-number")
    }
  }

  function refreshPage() {
    location.reload(); // Reloads the current page
  }