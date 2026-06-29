function onClickToGetIndexOf() {
    debugger;
    let word = document.getElementById("txtWord").value;
    let search = document.getElementById("txtSearch").value;
    let indexOf = word.indexOf(search);
    document.getElementById("pResult").innerHTML = `The ${search} is at ${indexOf}`;
}


function onClickToGetLastIndexOf() {
    debugger;
    let word = document.getElementById("txtWords").value;
    let search = document.getElementById("txtSearches").value;
    let index = word.lastIndexOf(search);
    document.getElementById("pResults").innerHTML = `The ${search} is at ${index}`;
}