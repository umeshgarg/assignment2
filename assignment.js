function getRandom() {
    const rand = Math.floor(Math.random() * 101);    
    return rand;
}


function lottery(range) {
    let input = prompt("Enter a lottery number between 0 to 100");
    let intInput = parseInt(input);
    if (isNaN(intInput) || intInput > 100 || intInput <0){
        alert("Enter a valid number");
        lottery(range);
    }
    else{
        let lotteryInt = getRandom();
        // user -> 11
        // program -> 51
        // 51 - 50/2 = 26
        // 51 + 50/2 = 76
        let low = lotteryInt - range/2;
        let high = lotteryInt + range/2;
        if (low < intInput && intInput < high){
            alert("Congratulations, You Won!!");
            return true;
        }
        else{
            alert("Better luck next time :(");
            return false;
        }
    }
}

function main() {
    for (let index = 0; index < 10; index++) {
        if (lottery(index*10)){
            break;
        }
    }
}

window.onload = main()


