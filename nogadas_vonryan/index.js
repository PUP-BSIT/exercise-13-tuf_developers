function validateComment() {
	let commentName = document.querySelector("#comment_name");
	let commentContent = document.querySelector("#comment_content");
	let commentButton = document.querySelector("#comment_button");

	if (commentName.value && commentContent.value) {
		commentButton.disabled = false;
	} else {
		commentButton.disabled = true;
	}
}