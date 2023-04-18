// modalas
const modal = document.querySelector("#myModal");
const btns = document.getElementsByTagName("li");
const span = document.getElementsByClassName("close")[0];

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        modal.style.display = "block";
    }
}

span.onclick = function () {
    modal.style.display = "none";
}
