function total(){
     subtotal = Number(document.querySelector("#subtotal").value);
     tip = Number(document.querySelector("#tip").value);

    let result = document.querySelector("#result");
    
    let tipPrecent = tip / 100;

    let tipAmount = subtotal * tipPrecent;

    let total = subtotal + tipAmount;

    result.innerHTML = "Total is: $" + total.toFixed(2);
}