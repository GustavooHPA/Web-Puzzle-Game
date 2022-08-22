function Send() {
    var text = window.document.getElementById("text")
    var answer = String(text.value).toLowerCase()
    var compare = "fenestra"

    if (answer == compare) {
        var img = window.document.getElementById("img")
        var button = window.document.getElementById("button")
        img.setAttribute("src", "window.png")
        img.style.opacity = "100"
        button.style.opacity = "100"
    } else {
        alert("Wrong answer")
    }
}

function Fase3() {
    if (button.style.opacity == "100") {
        window.location.replace("fase3.html")
    }
}

