function moveleft() {
    horizontalPlatform.speedX = -3;
}

function moveright() {
    horizontalPlatform.speedX = 3;
}

function moveup() {
    if (verticalPlatform) {
        verticalPlatform.speedY = -3;
    }
}

function movedown() {
    if (verticalPlatform) {
        verticalPlatform.speedY = 3;
    }
}

function clearmove() {
    if (verticalPlatform) {
        verticalPlatform.speedY = 0;
    }
    horizontalPlatform.speedX = 0;
}

function pause() {
    if (!gamePaused) {
        for (let i = 0; i < myBallArray.length; i++) {
            tempBallSpeedX.push(myBallArray[i].speedX);
            tempBallSpeedY.push(myBallArray[i].speedY);
            myBallArray[i].speedX = 0;
            myBallArray[i].speedY = 0;
        }
        gamePaused = true;
    }
}

function start() {
    if (gamePaused) {
        for (let i = 0; i < myBallArray.length; i++) {
            myBallArray[i].speedX = tempBallSpeedX.shift();
            myBallArray[i].speedY = tempBallSpeedY.shift();
        }
        gamePaused = false;
    }
}

function gameOver() {
    clearmove();
    window.alert("You lost");
    addScore(db);
    clearInterval(myGameArea.interval);
    score = 0;
    verticalPlatform = null;
    player = null;
    startGame();
}

function gameWin() {
    clearmove();
    window.alert("You won!");
    addScore(db);
    clearInterval(myGameArea.interval);
    score = 0;
    verticalPlatform = null;
    player = null;
    startGame();
}