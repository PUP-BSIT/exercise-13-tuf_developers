function validateComment() {
	let commentName = document.getElementById("comment_name");
	let commentContent = document.getElementById("comment_content");
	let commentButton = document.getElementById("comment_button");

	if (commentName.value && commentContent.value) {
		commentButton.disabled = false;
	} else {
		commentButton.disabled = true;
	}
}