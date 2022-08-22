var img = window.document.getElementById("img")
img.setAttribute("src", "locked.png")
var imagem = window.document.getElementById("imagem")
imagem.setAttribute("src", "carpet.png")
var key0 = window.document.getElementById("key")
var fase2 = window.document.getElementById("Fase2")

var doorlock = 0
var key = 0
var dooropen = 0

function Carpet() {
    imagem.style.position = "absolute"
    imagem.style.left = "45%"
    key0.style.opacity = "100"
}

function keydoor() {
    key = 1
}

function unlock() {
    if (key == 1) {
        doorlock = 1
    } else {
        window.alert("The door is locked. Find the key")
    }
}

function opendoor() {
    if (doorlock == 1) {
        img.setAttribute("src", "open.png")
        dooropen = 1
        fase2.setAttribute("value", "Fase 2")
        fase2.setAttribute("style", "border: solid 0.1rem black;")
    } else if (doorlock == 0) {
        window.alert("The door is locked. Find the key and unlock the door.")
    }
}

function level2() {
    window.location.replace("fase2.html")
}