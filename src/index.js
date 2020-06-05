import Two from 'two.js';

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

function setCircleSize(circle) {
    circle.width = two.width / 2
    circle.height = two.height / 2
    circle.radius = (Math.min(two.width, two.height) * 0.75) / 2;
    circle.translation.set(circle.width, circle.height);
}

var text = 'this is a test anagram'.replace(/\s/g, '').shuffle();

var two = new Two({fullscreen: true}).appendTo(document.body);

var circle = two.makeCircle();
setCircleSize(circle);

var twoText = two.makeText(text, 0, 0, {alignment: 'left'});

two.update();

twoText._renderer.elem.innerHTML = [
    '<textPath xlink:href="#', circle.id, '">', twoText.value, '</textPath>'
].join('');

circle.stroke = 'green';
circle.linewidth = 5;

window.addEventListener("resize", function(event) {
    setCircleSize(circle);
    two.update();
});

two.update();