function onClickDomainCheck() {
    debugger;
    let url = document.getElementById("txtURL").value;
    if(url.startsWith("https://")  || url.startsWith("http://")){
        document.getElementById("pResult").innerHTML = `${url} is a valid URL`;
    } else{
        document.getElementById("pResult").innerHTML = `Invalid`;
    }
}