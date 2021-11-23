const section = document.getElementById('sectionCode')

const menuVisibility = () => {
    document.querySelector('body').classList.toggle('body-noScroll')
    document.querySelector('#menu-wrapper').classList.toggle('menu-visible');
}

function setupTypewriter(t) {
    var HTML = t.innerHTML;

    t.innerHTML = "";

    var cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 50,
        tempTypeSpeed = 0;

    var type = function() {

        if (writingTag === true) {
            tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
            tempTypeSpeed = 0;
            if (tagOpen) {
                tagOpen = false;
                writingTag = true;
            } else {
                tag = '';
                tagOpen = true;
                writingTag = true;
                tag += HTML[cursorPosition];
            }
        }
        if (!writingTag && tagOpen) {
            tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
            if (HTML[cursorPosition] === "") {
                tempTypeSpeed = 0;
            }
            else {
                tempTypeSpeed = 40;
            }
            t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
            tempTypeSpeed = 40;
            writingTag = false;
            if (tagOpen) {
                var newSpan = document.createElement("span");
                t.appendChild(newSpan);
                newSpan.innerHTML = tag;
                tag = newSpan.firstChild;
            }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
            setTimeout(type, tempTypeSpeed);
        }

    };

    return {
        type: type
    };
}

var typer = document.getElementById('typewriter');

typewriter = setupTypewriter(typewriter);


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function write () {
    typewriter.type();
}

function eventOnScroll () {
    if(isInViewport(section)) {
        write ();
        document.removeEventListener('scroll', eventOnScroll);
    }
}

document.querySelector('#burger').addEventListener('click', menuVisibility);
document.querySelector('.button--close').addEventListener('click', menuVisibility);
window.addEventListener('resize', function () {
    if(window.innerWidth > 768) {
        document.querySelector('body').classList.remove('body-noScroll')
    }
})
document.addEventListener('scroll', eventOnScroll);