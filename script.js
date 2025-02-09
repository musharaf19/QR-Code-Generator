const wrapper = document.querySelector(".wrapper"),
    qrInput = wrapper.querySelector(".form input"),
    generateBtn = wrapper.querySelector(".form button"),
    qrImg = wrapper.querySelector(".qr-code img");

let preValue = "";

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if (!qrValue || preValue === qrValue) return;
    
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    
    // Properly encode the data to ensure special characters work correctly
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrValue)}`;
    
    qrImg.onload = () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    };
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});
