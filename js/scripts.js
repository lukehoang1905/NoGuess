let guess;
let guessesRemaining = 5;
let history = []
let end = false;
let time = 0;
let myTime;
computerRandomNum = (Math.floor(Math.random() * 100)) + 1
console.log(computerRandomNum)
document.getElementById("guesses-remaining").innerHTML = `Remaining lives : ${guessesRemaining}`
document.getElementById("result").innerHTML = "Let's go"
timeCounting()

function guessNumber() {
    //check if game is end>
    if (end == true) {
        timeOut()
        return
    }
    // if game is not end 

    const guess = document.getElementById("user-guess").value
    if (history.includes(guess)) {
        document.getElementById("result").innerHTML = "Already"
        document.getElementById("user-guess").value = ''
        return;
    }
    guessesRemaining = guessesRemaining - 1;
    document.getElementById("guesses-remaining").innerHTML = `Remaining lives : ${guessesRemaining}`;
    history.push(guess)
    document.getElementById("history").innerHTML = `${history}`
    if (guess == computerRandomNum) {
        document.getElementById("result").innerHTML = "You win"
        end = true
    } else if (guess < computerRandomNum) {
        document.getElementById("result").innerHTML = "You have lower"
    } else {
        document.getElementById("result").innerHTML = "You have higher"
    }
    document.getElementById("user-guess").value = ''
    if (guessesRemaining <= 0) {
        document.getElementById("guesses-remaining").innerHTML = `Sorry you's lost. Our number was : ${computerRandomNum}`;
        end = true
    }
    if (end == true) {
        timeOut()
        return
    }
}

function reset() {
    guessesRemaining = 5
    computerRandomNum = (Math.floor(Math.random() * 100)) + 1
    end = false;
    document.getElementById("guesses-remaining").innerHTML = `Remaining lives : ${guessesRemaining}`
    history = []
    document.getElementById("history").innerHTML = `${history}`
    document.getElementById("result").innerHTML = "Let's go"
    document.getElementById("user-guess").value = ''
    time = 0;
    timeOut();
    timeCounting();
}

function timeCounting() {
    myTime = setInterval(() => {
        time += 1;
        if (time == 30) {
            timeOut()
            document.getElementById("result").innerHTML = "Time's Out!"
        }
        document.getElementById('timecount').innerHTML = time
    }, 1000)
}

function timeOut() {
    clearInterval(myTime);
    end = true
}

function same() {
    history.includes(guess)
}