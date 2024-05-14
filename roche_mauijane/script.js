function validateComment() {
    let comment_name = document.getElementById("name");
    let comment_message = document.getElementById("comment");
    let comment_button = document.getElementById("comment_button");

    if (comment_name.value.length < 1 ||
        comment_message.value.length <1) {
            comment_button.disabled = true;
        } else {
            comment_button.disabled = false;
        }
}

document.getElementById("name").addEventListener("input", validateComment);
document.getElementById("comment").addEventListener("input", validateComment);