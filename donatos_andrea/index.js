function commentForm() {
    let comment_button = document.getElementById("comment_button");
    let name = document.getElementById("member_name");
    let comment = document.getElementById("comment_area");

    if (name.value.length > 0 && comment.value.length > 0) {
        comment_button.disabled = false;
    } else {
        comment_button.disabled = true;
    }
} 
