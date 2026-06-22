let balance = 2750;
function updateBalance() { document.getElementById('balance').innerText = balance.toLocaleString(); }
function startGame() {
    if (balance >= 500) { balance -= 500; updateBalance(); alert("بازی شروع شد! ۵۰۰ تومان کسر شد."); }
    else { alert("موجودی کافی نیست!"); }
}
