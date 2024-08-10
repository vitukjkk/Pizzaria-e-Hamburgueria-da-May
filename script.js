function loadHTML(file, element) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.querySelector(element).innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
}