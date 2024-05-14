function validateComment() {
	let comment_name = document.getElementById("comment_name");
	let comment_content = document.getElementById("comment_content");
	let comment_button = document.getElementById("comment_button");

	if (comment_name.value && comment_content.value) {
		comment_button.disabled = false;
	} else {
		comment_button.disabled = true;
	}
}