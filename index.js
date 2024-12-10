let count = 0;

function checkAnswer(answer) {
    const result = document.getElementById('result');

    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        count = 1;
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
}

function checkAnswer2(answer2) {
    const result2 = document.getElementById('result2');
    const result3 = document.getElementById('result3');

    if (answer2 === 'b') {
        result2.textContent = "ถูกต้อง 7-11 มีสาขาในประเทศไทย 14,215 สาขา";
        result2.style.color = 'green';
        count++;
    } else {
        result2.textContent = "Incorrect! Try again.";
        result2.style.color = 'red';
    }

    result3.textContent = "คุณได้ทั้งหมด " + count + " คะแนน";
    count = 0;

}

