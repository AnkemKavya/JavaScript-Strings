function onClickToInterpolate() {
    debugger;
    let name = document.getElementById("txtName").value;
    let age = Number(document.getElementById("txtAge").value);
    let city = document.getElementById("txtCity").value;
    let result = `My name is ${name} and i'm ${age} years old, living in ${city}`;
    document.getElementById("pResult").innerHTML = result;
}