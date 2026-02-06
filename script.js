function selectProduct(productName) {
document.getElementById("produktInput").value = productName;
document.getElementById("orderForm").scrollIntoView({
behavior: "smooth"
});
}

// Kur dërgohet formulari
document.getElementById("orderForm").addEventListener("submit", function (e) {
e.preventDefault();

fetch("https://script.google.com/macros/s/AKfycbyb6kbfl_6JC0KakX6rXQ1-xPYOcPTtEmrdJFW3cxinJ013O9f-ml1r3CgjYtX5kGzo/exec", { // <-- KËTU vendos Web App URL nga Apps Script
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