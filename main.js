const buttons = document.querySelectorAll('.button');
const top_text = document.querySelector('#top');
const bottom_text = document.querySelector('#bottom');
console.log(bottom_text.textContent);
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        press(buttons[i].textContent);
    })
}
function press (value) {
    if (value == '.' && bottom_text.textContent.includes('.')) {
        return;
    }
    if (!isNaN(value) || value == '.') {
        if (bottom_text.textContent == '0') {
            bottom_text.textContent = '';
        }
        bottom_text.textContent += value;
    } else if (value == 'AC') {
        top_text.textContent = '';
        bottom_text.textContent = 0;
    } else if (value == '%') {
        bottom_text.textContent = Math.round(parseFloat(bottom_text.textContent) * 10) / 1000;
    } else {
        let operation = top_text.textContent[top_text.textContent.length - 1];
        let total;
        if (operation == '+') {
            total = parseFloat(bottom_text.textContent) + parseFloat(top_text.textContent);
        } else if (operation == '-') {
            total =  - parseFloat(bottom_text.textContent) + parseFloat(top_text.textContent);
        } else if (operation == '*') {
            total = parseFloat(bottom_text.textContent) * parseFloat(top_text.textContent);
        } else if (operation == '/') {
            total = parseFloat(bottom_text.textContent) / parseFloat(top_text.textContent);
        }else {
            total = bottom_text.textContent;
        }
        if (isNaN(total)) {
            total = 0;
        }
        total = Math.round(total * 1000) / 1000;
        top_text.textContent = total + ' ' + value;
        bottom_text.textContent = 0;
        if (value == '=') {
            top_text.textContent = ':)';
            bottom_text.textContent = total;
        }
    }
}