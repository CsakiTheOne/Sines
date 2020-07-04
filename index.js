let c = new canvas();
let t = new point(0, 0);
let p;
let i;
let iPrev = new point(0, 0);

function getInput() {
    return new point(
        parseInt(document.getElementById('inputX').value),
        parseInt(document.getElementById('inputY').value)
    )
}

function reset() {
    c.clearHistory();
    t = new point(0, 0);
    iPrev = i;
}

function tick() {
    c.clear('#000');

    c.showHistory(document.getElementById('inputColorLine').value);

    p = new point(Math.sin(t.x), Math.cos(t.y))
    p.multiply(.9);
    c.fillCircle(c.toCanvasSize(p), document.getElementById('inputColorDot').value);

    i = getInput();
    if (!i.equals(iPrev)) reset();

    t.x += Math.PI / 100 * i.x;
    t.y += Math.PI / 100 * i.y;
}

setInterval(tick, 1000 / 60);