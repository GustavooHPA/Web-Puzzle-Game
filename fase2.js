function Send() {
    var text = window.document.getElementById("text")
    var answer = String(text.value).toLowerCase()
    var compare = "fenestra"

    if (answer == compare) {
        alert("Parabéns!! Me manda print...")
    } else {
        alert("Wrong answer")
    }
}