
function modeOne() {
    if (tilesArray.length < 5) {
        let counter = 0;
        let tilesToGenerate = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        while (tilesToGenerate > 0) {
            for (let i = 50; i < 80; i = i + 21) {
                for (let j = 65; j < 575; j = j + 51) {
                    if (tilesArray[counter].x != j || tilesArray[counter].y != i) {
                        let random = Math.floor(Math.random() * (100 - 1 + 1) + 1);
                        if (random < 20) {
                            tilesArray.splice(counter, 0, new tile(j, i));
                            tilesToGenerate--;
                            if (tilesArray.length >= 25) {
                                return;
                            }
                        }
                    }
                    counter++;
                }
            }
        }
    }
    else if (tilesArray.length < 25 && tilesArray.length >= 5) {
        let counter = 0;
        for (let i = 50; i < 80; i = i + 21) {
            for (let j = 65; j < 575; j = j + 51) {
                if (tilesArray[counter].x != j || tilesArray[counter].y != i) {
                    let random = Math.floor(Math.random() * (100 - 1 + 1) + 1);
                    if (random < 10) {
                        tilesArray.splice(counter, 0, new tile(j, i));
                        if (tilesArray.length >= 25) {
                            return;
                        }
                    }
                }
                counter++;
            }
        }

    }
}

function modeTwo() {
    for (let i = 0; i < tilesArray.length; i++) {
        tilesArray[i].y += 21;
    }
    let j = 2;
    for (let i = 0; i < 10; i++) {
        tilesArray.push(new tile(j, 50));
        j += 51;
    }
    let lowest = 0;
    if (verticalPlatform) {
        for (let i = 0; i < tilesArray.length; i++) {
            if (tilesArray[i].tileCollision(verticalPlatform)) {
                verticalPlatform.x = tilesArray[i].x + tilesArray[i].height + 3;
                if (verticalPlatform.x + verticalPlatform.height > myGameArea.clear.height) {
                    gameOver();
                }
            }
            if (tilesArray[i].tileCollision(horizontalPlatform)) {
                gameOver();
            }
            if (tilesArray[i].x + tilesArray[i].height > lowest) {
                lowest = tilesArray[i].x + tilesArray[i].height + 60;
            }
        }
    }
    else {
        for (let i = 0; i < tilesArray.length; i++) {
            if (tilesArray[i].tileCollision(horizontalPlatform)) {
                gameOver();
            }
            if (tilesArray[i].x + tilesArray[i].height > lowest) {
                lowest = tilesArray[i].x + tilesArray[i].height + 60;
            }
        }
    }
}
