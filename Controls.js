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
        ballTempSpeedX = myBall.speedX;
        ballTempSpeedY = myBall.speedY;
        myBall.speedX = 0;
        myBall.speedY = 0;
        gamePaused = true;
    }
}

function start() {
    if (gamePaused) {
        myBall.speedX = ballTempSpeedX;
        myBall.speedY = ballTempSpeedY;
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