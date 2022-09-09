// https://www.youtube.com/watch?v=8i2K7uwh124&t=713s
var container = document.querySelector(".text");

var speeds = {
    pause: 500,
    slow: 200,
    normal: 100,
    fast: 20
};

var textLines = [
    { string: "Hey.", speed: speeds.normal },
    { string: "I'm not doing great right now", speed: speeds.normal },
    { string: "...", speed: speeds.slow },
    { string: "I want to die.", speed: speeds.slow, classes: ["red"] }
];

var characters = [];
textLines.forEach((line, index) => {

    if (index < textLines.length - 1) {
        line.string += " ";
    }

    line.string.split("").forEach(character => {
        var span = document.createElement("span");
        span.textContent = character;
        container.appendChild(span);
        characters.push({
            span: span,
            isSpace: character === " ",
            delayAfter: line.speed,
            classes: line.classes || []
        })
    })
})

function revealOneCharacter(list) {
    var next = list.splice(0, 1)[0];
    next.span.classList.add("revealed");
    next.classes.forEach((c) => {
        next.span.classList.add(c);
    })

    var delay = next.isSpace ? 0 : next.delayAfter;

    if (list.length > 0) {
        setTimeout(function() {
            revealOneCharacter(list);
        }, delay)
    }
};

revealOneCharacter(characters);