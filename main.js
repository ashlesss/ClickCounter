var x = 0;
window.onload = remNumber;

function count() {
    // document.getElementById('number').innerHTML = counter;
    // document.getElementById("counter").value = counter;
    document.getElementById("counter").value = 
    parseInt(document.getElementById("counter").value) + 1;
    x = parseInt(document.getElementById("counter").value);
}

function minus() {
    document.getElementById("counter").value = 
    parseInt(document.getElementById("counter").value) - 1;
    x = parseInt(document.getElementById("counter").value);
}

function plus100() {
    document.getElementById("counter").value = 
    parseInt(document.getElementById("counter").value) + 100;
    x = parseInt(document.getElementById("counter").value);
}

function zero() {
    document.getElementById("counter").value = 
    parseInt(document.getElementById("counter").value) 
    - document.getElementById("counter").value;
    x = parseInt(document.getElementById("counter").value);
}

function minus100() {
    document.getElementById("counter").value = 
    parseInt(document.getElementById("counter").value) - 100;
    x = parseInt(document.getElementById("counter").value);
}

function zero00() {
    document.getElementById("counter").value = 
    Math.floor(parseInt(document.getElementById("counter").value) / 100) * 100;
    x = parseInt(document.getElementById("counter").value);
}

function zero0() {
    document.getElementById("counter").value = 
    Math.floor(parseInt(document.getElementById("counter").value) / 10) * 10;
    x = parseInt(document.getElementById("counter").value);
}

function remNumber() {
    let y = x;
    document.getElementById("savednum").innerHTML = y;
}

function resetToSave() {
    document.getElementById("counter").value = 
    document.getElementById("savednum").innerHTML;
}

function resetSavedNum() {
    document.getElementById("savednum").innerHTML = 0;
}

// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('clicker').onclick = count;
//     document.getElementById('clicker1').onclick = minus;
// })