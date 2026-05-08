const fortunes = [
    "大吉　いい出会いがあるかも！",
    "中吉　少し勇気を出すといいことが起きる",
    "小吉　今日はゆっくり過ごそう",
    "凶　無理せず慎重に行動しよう",
    "大凶　きおつけて"
];

const Advice = [
    "西郷",
    "Vやねん",
    "強く生きて",
    "無理や",
    "詰みやで、君"
];
const omikuji = [
    "<img src='omikuji-daikichi.png'>",
    "<img src='omikuji-chukichi.png'>",
    "<img src='omikuji-shokichi.png'>",
    "<img src='omikuji-kyo.png'>",
    "<img src='omikuji-daikyo.png'>",
];

const omikujiimg =  document .getElementById("omikuji-img");

const button = document .getElementById("a");
const result = document .getElementById("q");
const advice = document .getElementById("d");

 omikujiimg.innerHTML ="<img src='omikuji.png'>";

button.addEventListener("click",function () {

    const randomNumber = Math.floor(Math.random() * fortunes.length)
    if (randomNumber==0) 
        {
        result.style.color = "red";
        }
        else if(randomNumber==4)
        {
        result.style.color = "blue";
        }
        else
        {
        result.style.color = "black";
        }
        advice.style.color = "white";        
    advice.textContent = Advice[(randomNumber)]
    result.textContent = fortunes[(randomNumber)];
     omikujiimg.innerHTML =omikuji[(randomNumber)];

    
});