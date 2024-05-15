const commentName = document.querySelector("#name");
const commentMessage = document.querySelector("#comment");

function validateComment() {
	if (commentName.value.length && commentMessage.value.length) {
		commentButton.disabled = false;
	} else {
		commentButton.disabled = true;
	}
}
