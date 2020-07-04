class point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    multiply(v) {
        this.x *= v;
        this.y *= v;
    }

    equals(p) {
        return this.x == p.x && this.y == p.y;
    }
}

class canvas {
    constructor() {
        this.cv = document.getElementsByTagName('canvas')[0];
        this.ctx = this.cv.getContext('2d');
        this.history = []
    }

    clear(color = '#121212') {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.cv.width, this.cv.height);
    }

    clearHistory() {
        this.history = []
    }

    fillCircle(p, color = '#fff') {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, 10, 0, 2 * Math.PI);
        this.ctx.fill();
        this.history.push(p);
    }

    showHistory(color = '#ccc') {
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        for (let i = 0; i < this.history.length; i++) {
            this.ctx.lineTo(this.history[i].x, this.history[i].y)
        }
        this.ctx.stroke();
    }

    toCanvasSize(p) {
        return new point((p.x + 1) * (this.cv.width / 2), (p.y + 1) * (this.cv.height / 2));
    }
}