function back() {
    window.history.back();
}

function expandCard(card){
	card.style.transform ='scale(1.05)'
	card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.4)'
}

function shrinkCard(card){
	card.style.transform ='scale(1)'
	card.style.boxShadow = 'none'
}

function openPaymentModal(planName, planPrice) {
    document.getElementById("planName").innerText = "Plano: " + planName;
    document.getElementById("planPrice").innerText = "Preço: " + planPrice;
    document.getElementById("paymentModal").style.display = "flex";
}


function closePaymentModal() {
    document.getElementById("paymentModal").style.display = "none";
}