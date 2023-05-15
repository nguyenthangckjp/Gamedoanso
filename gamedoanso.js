function startGame() {
    let maxNumber = prompt("Nhập vào số lớn nhất mà bạn muốn đoán:");
    let targetNumber = Math.floor(Math.random()*maxNumber) +1;
    let guess;
    do{
        guess = parseInt(prompt("hãy đoán số"));
        if(guess < targetNumber){
            alert("số bạn đoán nhỏ hơn số cần tìm");
        }else if (guess > targetNumber){
            alert("số bạn đoán lớn hơn số cần tìm");
        }else{
            alert("Chúc mừng! bạn đã đoán đúng số " + targetNumber);
            break;
        }
    }while(true);
    let playAgain = confim("ban co muon choi lai khong?");
    if(playAgain) {
        startGame();
    }
}