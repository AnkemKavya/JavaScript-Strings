function onClickToCheckLength() {
    debugger;
    let name = document.getElementById("txtString").value;
    let length = name.length;
    document.getElementById("pResult").innerHTML = `length of the string is ${length}`;
}

function onClickStringLength() {
    debugger;
    let string = document.getElementById("txtContent").value;
    let length = string.length;
    if(length > 250){
        alert("Maximum length is exceeded.");
        string = string.substring(0, 250);
        document.getElementById("txtContent").value = string;
        length = string.length;
    }
    document.getElementById("PResults").innerHTML = `${length}/250`;
}