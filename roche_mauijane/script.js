const commentName = document.querySelector("#name");
const commentMessage = document.querySelector("#comment");
const commentButton = document.querySelector("#comment_button");

const comments = [
	{
		name: "Jhef",
		message: "Stay focused, you're on track",
		date: new Date("2024-01-27"),
	},
	{
		name: "Von",
		message: `Your thoughtfulness and consideration of others' needs
				 as your goal demonstrates your empathy and kindness`,
		date: new Date("2024-02-27"),
	},
	{
		name: "Andrea",
		message: "I'm rooting for your success to achieve your goal",
		date: new Date("2024-03-27"),
	},
	{
		name: "Mark",
		message: "You are brave",
		date: new Date("2024-04-27"),
	},
];

function displayComments() {
	commentsContainer.innerHTML = "";
	comments.forEach((comment) => {
		const commentElement = document.createElement("p");
		commentElement.textContent = `${comment.message} - ${
			comment.name
		} (${comment.date.toLocaleString()})`;
		commentsContainer.append(commentElement);
	});
}

function validateComment() {
	if (commentName.value.length && commentMessage.value.length) {
		commentButton.disabled = false;
	} else {
		commentButton.disabled = true;
	}
}