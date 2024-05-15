const commentName = document.querySelector("#name");
const commentMessage = document.querySelector("#comment");
const comments = [
	{
		name: "Von",
		message:
			"Your clarity of purpose in pursuing your goals is admirable",
		date: new Date("2024-01-27"),
	},
	{
		name: "Andrea",
		message: "I hope you achieve your goal",
		date: new Date("2024-02-27"),
	},
	{
		name: "Mau",
		message: "Persistence pays off, keep going",
		date: new Date("2024-03-27"),
	},
	{
		name: "Mark",
		message: "You are making a difference",
		date: new Date("2024-04-27"),
	},
];
    
function validateComment() {
	if (commentName.value.length && commentMessage.value.length) {
		commentButton.disabled = false;
	} else {
		commentButton.disabled = true;
	}
}