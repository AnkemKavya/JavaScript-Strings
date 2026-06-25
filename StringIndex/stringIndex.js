function onClickToGetCharacterByIndex() {
    debugger;
    let name = document.getElementById("txtString").value;
    let index = Number(document.getElementById("txtIndex").value);
    let char = name[index];
    document.getElementById("pResult").innerHTML = `Character at index ${index} is ${char}`;
}