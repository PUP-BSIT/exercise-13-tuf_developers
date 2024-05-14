let userCom = document.getElementById("user");
let inputCom = document.getElementById("add_comment");

function addComment() {
    let userCom = document.getElementById("user").value.trim();
    let inputCom = document.getElementById("add_comment").value.trim();
    let addCom = document.getElementById("comment_button");

    addCom.disabled = !(userCom.length > 0 && inputCom.length > 0);
}

userCom.addEventListener("input", addComment);
inputCom.addEventListener("input", addComment);