const section = document.getElementById('sectionCode')

const menuVisibility = () => {
    document.querySelector('body').classList.toggle('body-noScroll')
    document.querySelector('#menu-wrapper').classList.toggle('menu-visible');
}

const code = document.querySelector('#code')
const content = code.querySelectorAll('span')
const codeText = []
const codeElements = []

const codeInitContent = () => {
    content.forEach(el => {
        codeText.push(el.innerText)
        el.innerText = ''
        codeElements.push(el)
    })
}

const writeCode = (speed = 50) => {
    let startWriting = 0
    let textElement

    codeText.forEach((el, index) => {
        const text = [...el]

        setTimeout(() => {
            textElement = codeElements[index]

            text.forEach((char, i) => {
                setTimeout(() => {
                    char === ' ' ? char = ' ' : char
                    textElement.innerHTML += char
                }, i * speed)
            })
        }, startWriting * speed)
        startWriting = startWriting + text.length
    })
};

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function eventOnScroll () {
    if(isInViewport(section)) {
        writeCode(40)
        document.removeEventListener('scroll', eventOnScroll);
    }
}

codeInitContent()
document.querySelector('#burger').addEventListener('click', menuVisibility);
document.querySelector('.button--close').addEventListener('click', menuVisibility);
window.addEventListener('resize', function () {
    if(window.innerWidth > 768) {
        document.querySelector('body').classList.remove('body-noScroll')
    }
})
document.addEventListener('scroll', eventOnScroll);