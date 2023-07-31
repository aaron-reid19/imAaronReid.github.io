function convert(form){
    var cad = document.getElementById("cad")
    if(cad.value === "")
    {
        alert("please enter a number")
        cad.focus();
        return false;
    }
    else{
       var usd = parseFloat(cad.value) * 1.33;
       display(usd);
    }
}

function display(value){
    var displayDiv = document.querySelector('.display');
    displayDiv.textContent = 'Canadian Value: $' + value.toFixed(2)
}

function reset(){
    var displayDiv = document.querySelector('.display');
    var cad = document.getElementById("cad");
    displayDiv.textContent = ""
    cad.value = ""
}