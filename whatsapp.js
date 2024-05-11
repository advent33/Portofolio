function sendWhatsappMessage() {
    const phonenumber = "+6282267080526"; // Ganti dengan nomor telepon Anda
    const name = document.querySelector('input[placeholder="Full Name"]').value;
    const email = document.querySelector('input[placeholder="Email Address"]').value;
    const number = document.querySelector('input[placeholder="Mobile Number"]').value;
    const country = document.getElementById("country").value; // Mengambil nilai dari elemen select
    const message = document.querySelector('textarea').value;
  
    const formattedMessage = `*Name :* ${encodeURIComponent(name)}
    %0a*Email :* ${encodeURIComponent(email)}
    %0a*Number :* ${encodeURIComponent(number)}
    %0a*Country :* ${encodeURIComponent(country)}
    %0a*Message :* ${encodeURIComponent(message)}`;
  
    const url = `https://wa.me/${phonenumber}?text=${formattedMessage}`;
  
    window.open(url, '_blank').focus();
  }