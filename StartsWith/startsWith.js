let words = "";
let a = "";
let e = "";
let i = "";
let o = "";
let u = "";
let consonents = "";
function onClickDone() {
    debugger;
    words = document.getElementById("txtWords").value.toLowerCase();
    if (words.startsWith("a")) {
        if (a === "") {
            a += "";
        }
        else {
            a += ", ";
        }
        a += words;
        document.getElementById("pA").innerHTML = "Words Starts With A: " + a;
    }
    if (words.startsWith("e")) {
        if (e === "") {
            e += "";
        }
        else {
            e += ", ";
        }
        e += words;
        document.getElementById("pE").innerHTML = "Words Starts With E: " + e;
    }
    if (words.startsWith("i")) {
        if (i === "") {
            i += "";
        }
        else {
            i += ", ";
        }
        i += words;
        document.getElementById("pI").innerHTML = "Words Starts With I: " + i;
    }
    if (words.startsWith("o")) {
        if (o === "") {
            o += "";
        }
        else {
            o += ", ";
        }
        o += words;
        document.getElementById("pO").innerHTML = "Words Starts With O: " + o;
    }
    if (words.startsWith("u")) {
        if (u === "") {
            u += "";
        }
        else {
            u += ", ";
        }
        u += words;
        document.getElementById("pU").innerHTML = "Words Starts With U: " + u;
    }
    else{
        if (consonents === "") {
            consonents += "";
        }
        else {
            consonents += ", ";
        }
        consonents += words;
        document.getElementById("pOthers").innerHTML = "Words Starts With Others: " + consonents;
    }
}