function onClickCheckFile() {
    debugger;
    let file = document.getElementById("txtFile").value;
    if(file.endsWith(".docx") || file.endsWith(".pdf") || file.endsWith(".pptx") || file.endsWith(".txt") || file.endsWith(".xlsx")){
        document.getElementById("pResult").innerHTML = `${file} is a Valid file.`;
    } else{
        document.getElementById("pResult").innerHTML = `Invalid`;
    }
}