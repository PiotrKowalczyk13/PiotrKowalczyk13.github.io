class platformHorizontal {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.x = x;
        this.y = y;
        this.color = "green";
    }
    update() {
        ctx = myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    newPosVer(obj) {
        if (this.speedX < 0) {
            if (this.x > 0 && (this.x > obj.x + obj.width || this.y > obj.y + obj.height)) {
                this.x += this.speedX;
            }
        }
        else if (this.speedX > 0) {
            if ((this.x + this.width) < myGameArea.canvas.width) {
                this.x += this.speedX;
            }
        }
    }
    newPos() {
        if (this.speedX < 0) {
            if (this.x > 0) {
                this.x += this.speedX;
            }
        }
        else if (this.speedX > 0) {
            if ((this.x + this.width) < myGameArea.canvas.width) {
                this.x += this.speedX;
            }
        }
    }
}

class platformVertical {
    constructor(width, height, x, y){
        this.width = width;
        this.height = height;
        this.speedY = 0;
        this.x = x;
        this.y = y;
        this.color = "green";
    } 
    update() {
        ctx = myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    newPos(obj) {
        if (this.speedY < 0) {
            if (this.y > 100) {
                this.y += this.speedY;
            }
        }
        else if (this.speedY > 0) {
            if (this.y + this.height < myGameArea.canvas.height && (this.y + this.height < obj.y || this.x + this.width < obj.x)) {
                this.y += this.speedY;
            }
        }
    }
}

class ball {
    constructor() {
        this.x = Math.floor(Math.random() * (400 - 100 + 1) + 100);
        this.y = Math.floor(Math.random() * (150 - 100 + 1) + 100);
        this.radius = 5;
        var selector = Math.floor(Math.random() * 2);
        if (selector == 0) {
            this.speedX = -3;
        }
        else {
            this.speedX = 3;
        }
        this.speedY = 3;
    }
    update() {
        ctx = myGameArea.context;
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
    }
    newPos() {
        if (this.speedX < 0) {
            if (this.x - this.radius <= 0) {
                this.speedX = this.speedX * (-1);
            }
        }
        else if (this.speedX > 0) {
            if (this.x + this.radius >= myGameArea.canvas.width) {
                this.speedX = this.speedX * (-1);
            }
        }
        if (this.speedY < 0) {
            if (this.y - this.radius <= 0) {
                this.speedY = this.speedY * (-1);
            }
        }
        else if (this.speedY > 0) {
            if (this.y + this.radius > myGameArea.canvas.height) {
                gameOver();
            }
        }
        this.x += this.speedX;
        this.y += this.speedY;
    }

    checkHorizontalPlatform(obj) {
        if (this.speedY > 0) {
            if (this.y + this.radius > obj.y) {
                if ((this.x + 0.8 * this.radius < obj.x && this.x + this.radius >= obj.x)
                    || (this.x - 0.8 * this.radius > obj.x + obj.width && this.x - this.radius <= obj.x + obj.width)) {
                    this.speedX = this.speedX * (-1);
                }
                else if (this.y < obj.y) {
                    if (this.speedX < 0) {
                        this.speedX = -3;
                    }
                    else if (this.speedX > 0) {
                        this.speedX = 3;
                    }

                    if ((this.x + 0.8 * this.radius >= obj.x && this.x <= obj.x + 0.1 * obj.width)
                        || (this.x >= obj.x + 0.9 * obj.width && this.x - 0.8 * this.radius <= obj.x + obj.width)) {
                        this.speedX = this.speedX * 3;
                        this.speedY = this.speedY * (-1);
                    }
                    else if ((this.x <= obj.x + 0.3 * obj.width && this.x > obj.x + 0.1 * obj.width)
                        || (this.x >= obj.x + 0.7 * obj.width && this.x < obj.x + 0.9 * obj.width)) {
                        this.speedX = this.speedX * 2;
                        this.speedY = this.speedY * (-1);
                    }
                    else if ((this.x <= obj.x + 0.4 * obj.width && this.x > obj.x + 0.3 * obj.width)
                        || (this.x >= obj.x + 0.6 * obj.width && this.x < obj.x + 0.7 * obj.width)) {
                        this.speedX = this.speedX * 1.5;
                        this.speedY = this.speedY * (-1);
                    }
                    else if (this.x > obj.x + 0.4 * obj.width && this.x < obj.x + 0.6 * obj.width) {
                        this.speedY = this.speedY * (-1);
                    }
                }
            }
        }
    }

    checkVerticalPlatform(obj) {
        if (this.speedY > 0) {
            if (this.x < obj.x + obj.width && this.y + this.radius > obj.y && this.y < obj.y) {
                this.speedY = this.speedY * (-1);
            }
        }
        else if (this.speedY < 0) {
            if (this.x < obj.x + obj.width && this.y - this.radius < obj.y + obj.height && this.y > obj.y + obj.height) {
                this.speedY = this.speedY * (-1);
            }
        }
        if (this.speedX < 0) {
            if (this.speedY < 0) {
                this.speedY = -3;
            }
            else if (this.speedY > 0) {
                this.speedY = 3;
            }

            if (this.x - this.radius <= obj.x + obj.width) {
                if ((this.y <= obj.y + 0.1 * obj.height && this.y > obj.y)
                    || (this.y >= obj.y + 0.9 * obj.height && this.y < obj.y + obj.height)) {
                    this.speedY = this.speedY * 3;
                    this.speedX = this.speedX * (-1);
                }
                else if ((this.y <= obj.y + 0.3 * obj.height && this.y > obj.y + 0.1 * obj.height)
                    || (this.y >= obj.y + 0.7 * obj.height && this.y < obj.y + 0.9 * obj.height)) {
                    this.speedY = this.speedY * 2;
                    this.speedX = this.speedX * (-1);
                }
                else if ((this.y <= obj.y + 0.4 * obj.height && this.y > obj.y + 0.3 * obj.height)
                    || (this.y >= obj.y + 0.6 * obj.height && this.y < obj.y + 0.7 * obj.height)) {
                    this.speedY = this.speedY * 1.5;
                    this.speedX = this.speedX * (-1);
                }
                else if (this.y > obj.y + 0.4 * obj.height && this.y < obj.y + 0.6 * obj.height) {
                    this.speedX = this.speedX * (-1);
                }
            }
        }
    }

    checkCollisionTile(obj) {
        if (this.speedY < 0) {
            if (this.y - this.radius < obj.y + obj.height) {
                if ((this.x + 0.8 * this.radius < obj.x && this.x + this.radius >= obj.x)
                    || (this.x - 0.8 * this.radius > obj.x + obj.width && this.x - this.radius <= obj.x + obj.width)) {
                    this.speedX = this.speedX * (-1);
                    return true;
                }
                else if (this.y > obj.y + obj.height) {
                    if ((this.x + 0.8 * this.radius >= obj.x) && (this.x - 0.8 * this.radius <= obj.x + obj.width)) {
                        this.speedY = this.speedY * (-1);
                        return true;
                    }
                }
            }
            else if (this.speedY > 0) {
                if (this.y + this.radius > obj.y + obj.height && this.y < obj.y) {
                    if ((this.x + 0.8 * this.radius < obj.x && this.x + this.radius >= obj.x)
                        || (this.x - 0.8 * this.radius > obj.x + obj.width && this.x - this.radius <= obj.x + obj.width)) {
                        this.speedX = this.speedX * (-1);
                        return true;
                    }
                }
                else if (this.y > obj.y) {
                    if ((this.x + 0.8 * this.radius >= obj.x) && (this.x - 0.8 * this.radius <= obj.x + obj.width)) {
                        this.speedY = this.speedY * (-1);
                        return true;
                    }
                }
            }
        }
    }
}

class tile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 49;
        this.height = 9;
    }
    update() {
        ctx = myGameArea.context;
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
