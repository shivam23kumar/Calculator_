function ac(){
    document.getElementById("res").value="";
}
function show(input){
    document.getElementById("res").value+=input;
}

function calc(){
    var output = eval(document.getElementById("res").value);
    document.getElementById("res").value = output;
}

function plusminus(){
    var output = document.getElementById("res").value;
    if(output>0){
        output = output * -1;
    }
    document.getElementById("res").value = output;
}