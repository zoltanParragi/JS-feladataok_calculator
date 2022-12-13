const claculatorButtonTexts = [...Array(10).keys(), "+", "-", "(", ")", "*", "/", ".", "Del", "C", "="]
claculatorButtonTexts.forEach((text) => {
    document.querySelector('body > div > div:last-child').innerHTML += `<button>${text}</button>`
})

let btns = document.querySelectorAll('button')
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = () => {
        const display = document.querySelector('input')
        const clickedBtnText = btns[i].innerText
        if (clickedBtnText === "C") {
            display.value = ""
        } else if (clickedBtnText === "=") {
            try {
                display.value = eval(display.value)
            } catch (error) {
                alert('No hacking!')
                display.value = ''
            }
        } else if (clickedBtnText === "Del") {
            display.value = display.value.slice(0, -1)
        } else {
            display.value += btns[i].innerText
        }
    }
}
