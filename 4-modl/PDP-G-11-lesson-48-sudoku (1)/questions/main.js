const cells = document.querySelectorAll(".cell"); // [.cell * 81]
const form = document.querySelector("form");
const generateBtn = document.querySelector("#generate");
const countInput = form.querySelector("#count");
const historiesElm = document.querySelector(".histories");

const histories = [];
let currentIdx = 0;

function generateNums(count = 0, max, isNotRepeat = false) {
	const result = [];

	for (let i = 0; i < count; i++) {
		const randomNum = Math.floor(Math.random() * max);

		if (isNotRepeat && result.includes(randomNum)) i--;
		else result.push(randomNum);
	}

	return result;
}

form.onsubmit = (e) => {
	e.preventDefault(); // no refresh

	const count = +countInput.value;
	countInput.value = "";

	const randomNums = generateNums(count, 10);
	const randomIndexes = generateNums(count, 81, true);

	const history = {
		count: count,
		randomNums: randomNums,
		randomIndexes: randomIndexes,
	};

	histories.push(history);
	currentIdx = histories.length - 1;

	renderCells();
	renderHistories();
};

function renderCells() {
	const history = histories[currentIdx];

	const randomNums = history.randomNums;
	const randomIndexes = history.randomIndexes;

	cells.forEach((cell) => {
		cell.innerText = "";
		cell.className = "cell";
	});

	randomIndexes.forEach((cellIdx, idx) => {
		const cell = cells[cellIdx];
		const num = randomNums[idx];

		cell.innerText = num;
		cell.className = "cell active";
	});
}

function renderHistories() {
	historiesElm.innerHTML = "";

	for (let idx = 0; idx < histories.length; idx++) {
		const history = histories[idx];
		const btn = document.createElement("button");
		btn.className = "btn btn-outline-primary" + (idx === currentIdx ? " active" : "");
		btn.innerText = `History-${idx + 1}[${history.count}]`;
		historiesElm.appendChild(btn);

		btn.onclick = () => {
			currentIdx = idx;
			renderCells();
			renderHistories();

			const isSimilar = currentIdx !== histories.length - 1;

			generateBtn.disabled = isSimilar;
			countInput.disabled = isSimilar;
			countInput.value = isSimilar ? history.count : "";
		};
	}
}
