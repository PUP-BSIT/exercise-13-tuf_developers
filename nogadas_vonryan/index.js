const commentName = document.querySelector("#comment_name");
const commentContent = document.querySelector("#comment_content");
const commentButton = document.querySelector("#comment_button");

const commentList = document.querySelector(".comment-list");
const commentListData = [
	{
		name: "Jheferson",
		comment: `Your goals are very ambitious!`,
		date: new Date("Sat Apr 27 22:28:24 2024")
	},
	{
		name: "Andrea",
		comment: `I hope you achieve all your goals that will 
				  help you be successful in life`,
		date: new Date("Sat Apr 27 22:45:41 2024")
	},
	{
		name: "Mau",
		comment: `Keep on going hard work pays off`,
		date: new Date("Sat Apr 27 23:02:34 2024")
	},
	{
		name: "Mark",
		comment: `Your perspective is refreshing`,
		date: new Date("Sat Apr 27 23:06:32 2024")
	}
];

function validateComment() {
	if (commentName.value && commentContent.value) {
		commentButton.disabled = false;
	} else {
		commentButton.disabled = true;
	}
}