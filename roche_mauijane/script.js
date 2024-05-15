const commentName = document.querySelector("#name");
const commentMessage = document.querySelector("#comment");
const commentButton = document.querySelector("#comment_button");

function validateComment() {
	if (commentName.value.length && commentMessage.value.length) {
		commentButton.disabled = false;
	} else {
		commentButton.disabled = true;
	}
}