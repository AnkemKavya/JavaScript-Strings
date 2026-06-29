function onClickToTrim() {
    debugger;
    let word = document.getElementById("txtName").value;
    console.log(`Original String: ${word.length} Characters`);
    let trim = word.trim();
    let trimStart = word.trimStart();
    let trimEnd = word.trimEnd();
    console.log(`Trimmed String: ${trim.length} Characters`);
    console.log(`Trim Start String: ${trimStart.length} Characters`);
    console.log(`Trim End String: ${trimEnd.length} Characters`);
    document.getElementById("pTrimResult").innerText = `Trimmed String: ${trim}`;
}