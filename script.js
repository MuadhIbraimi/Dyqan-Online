function selectProduct(productName) {
document.getElementById("produktInput").value = productName;
document.getElementById("orderForm").scrollIntoView({
behavior: "smooth"
});
}

// Kur dërgohet formulari
document.getElementById("orderForm").addEventListener("submit", function (e) {
e.preventDefault();

fetch("https://script.google.com/macros/s/AKfycbx4BGaqV2Hzs7gDd47iAVh-YS0ELW_dVRfy1dK_35wkjp9PzZoChwJ50LvtZFOMQXDo2Q/exec", { // <-- KËTU vendos Web App URL nga Apps Script
method: "POST",
body: new URLSearchParams(new FormData(this))
})
.then(response => response.text())
.then(data => {
alert("Porosia u regjistrua me sukses ✅");
document.getElementById("orderForm").reset();
})
.catch(error => {
alert("Gabim! Porosia nuk u ruajt ❌");
console.error(error);
});

});
