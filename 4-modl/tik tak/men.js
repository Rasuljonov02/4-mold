let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

// Golib mashq erriyi
let winningPattern = [
	[0, 1, 2],
	[0, 3, 6],
	[2, 5, 8],
	[6, 7, 8],
	[3, 4, 5],
	[1, 4, 7],
	[0, 4, 8],
	[2, 4, 6]
];

// "X" o'yinchisi birinchi bo'lib o'ynaydi
let xturn = true;
let count = 0;

// Barcha tugmalarni o'chirib qo'yish
const disableButtons = () => {
	btnRef.forEach((element) => (element.disabled = true));
	popupRef.classList.remove("hide");
};

//Barcha tugmalarni yutib olish (yangi o'yin va qayta ishga tushirish uchun)

const enableButtons = () => {
	btnRef.forEach((element) => {
		element.innerText = "";
		element.disabled = "false";
	});
	// qalqib chiquvchi oynani o'chirish
	popupRef.classList.add("hide");
};

//  _Bu funktsiya o'yinchi g'alaba qozonishini ifodalaydi
const winFunction = (letter) => {
	disableButtons();
	if (letter === "X") {
		msgRef.innerHTML = "&#x1F389; <br> 'X' wins";
	} else {
		msgRef.innerHTML = "&#x1F389; <br> 'O' wins";
	}
};
//Chizish uchun funksiyalar
const drawFunction = () => {
	disableButtons();
	msgRef.innerHTML = "	&#x1F600; <br> It's a Draw";
};

// Yangi o'yin
newgameBtn.addEventListener("click", () => {
	count = 0;
	enableButtons();
});
restartBtn.addEventListener("click", () => {
	count = 0;
	enableButtons();
});

// Mantiqni yutib oling
const winChecker = () => {
	// barcha g'alaba naqshlari orqali aylanish
	for (let i of winningPattern) {
		let [element1, element2, element3] = [
			btnRef[i[0]].innerText,
			btnRef[i[1]].innerText,
			btnRef[i[2]].innerText,
		];
		// Elementlar to'ldirilganligini tekshiring
		if (element1 !== "" && element2 !== "" && element3 !== "") {
			if (element1 === element2 && element2 === element3) {
				winFunction(element1);
				return; // Tekshirishni davom ettirish shart emas
			}
		}
	}
};

// Bosish orqali x/o ni ko'rsating
btnRef.forEach((element) => {
	element.addEventListener("click", () => {
		if (xturn) {
			xturn = false;
			element.innerText = "X";
		} else {
			xturn = true;
			element.innerText = "O";
		}
		element.disabled = true;
		count += 1;
		if (count == 9) {
			msgRef.innerText = "It's a draw!";
			disableButtons();
		}
		winChecker();
	});
});

// Yangi oʻyin tugmasi funksiyasi
newgameBtn.addEventListener("click", () => {
	btnRef.forEach((element) => {
		element.innerText = "";
		element.disabled = false;
	});
	popupRef.classList.add("hide");
	msgRef.innerText = "";
	xturn = true;
	count = 0;
});

// Qayta ishga tushirish tugmasi funksiyasi
restartBtn.addEventListener("click", () => {
	newgameBtn.click();
});
