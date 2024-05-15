const commentName = document.querySelector("#comment_name");
const commentContent = document.querySelector("#comment_content");
const commentButton = document.querySelector("#comment_button");

const commentList = document.querySelector(".comment-list");
const commentListData = [];

function validateComment() {
	if (commentName.value && commentContent.value) {
		commentButton.disabled = false;
	} else {
		commentButton.disabled = true;
	}
}