const fortunes = [
    "大吉　素敵な出会いがあるかも！",
    "中吉　少し勇気を出すといいことが起きる",
    "小吉　今日はゆっくり過ごそう",
    "凶　無理せず慎重に行動しよう",
    "大凶　きおつけて"
];

const button = document .getElementById("a");
const result = document .getElementById("q");

button.addEventListener("click",function () {

    const randomNumber = Math.floor(Math.random() * fortunes.length)
    if (randomNumber==0) {
        result.style.color = "red";
    }
    else
        {
        result.style.color = "black";
        

    }
    result.textContent = fortunes[(randomNumber)];
});