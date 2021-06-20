let minValue;
let maxValue;
let answerNumber;
let orderNumber;
let gameRun;
let phraseRandom;
let answerPhrase;

let orderNumberField = document.getElementById('orderNumberField');
let answerField = document.getElementById('answerField');

startGame();

document.getElementById('btnRetry').addEventListener('click', function () {
    startGame();
});


//кнопка больше
document.getElementById('btnOver').addEventListener('click', function () {
   if (gameRun){
       if (minValue === maxValue){
        const phraseRandom = Math.round( Math.random()*3);
        const answerPhrase = (phraseRandom === 1) ?
            `Вы загадали неправильное число!\n\u{1F914}` :
            (phraseRandom === 2) ?
            `Зачем ты так \n\u{1F615}` :
            `Я сдаюсь..\n\u{1F92F}`;

        answerField.innerText = answerPhrase;
        gameRun = false;

           
       } else {
           minValue = answerNumber  + 1;
           answerNumber  = Math.floor((minValue + maxValue) / 2);
           orderNumber++;
           orderNumberField.innerText = orderNumber;
           answerField.innerText = `Вы загадали число ${answerNumber }?`;
       }
   }
});

//кнопка меньше
document.getElementById('btnLess').addEventListener('click', function () {
   if (gameRun){
       if (minValue === maxValue){
        const phraseRandom = Math.round( Math.random());
        const answerPhrase = (phraseRandom === 1) ?
        `Вы загадали неправильное число!\n\u{1F914}` :
        (phraseRandom === 2) ?
        `Зачем ты так \n\u{1F615}` :
        `Я сдаюсь..\n\u{1F92F}`;
        answerField.innerText = answerPhrase;
        gameRun = false;
       } else {
           maxValue = answerNumber;
           answerNumber  = Math.floor((minValue + maxValue) / 2);
           orderNumber++;
           orderNumberField.innerText = orderNumber;
           answerField.innerText = `Вы загадали число ${answerNumber }?`;
       }
   }
});

//кнопка верно
document.getElementById('btnEqual').addEventListener('click', function () {
   if (gameRun){
       answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
       let phraseRandom = Math.round(Math.random()*3);
       let answerPhrase = (phraseRandom === 1) ?
                `Я всегда угадываю\n\u{1F60E}`:
                (phraseRandom === 2) ?
                `Тебе меня не победить!\n\u{1F60E}` :
                `Давай, рискни еще разок!\n\u{1F60E}`;
        answerField.textContent = answerPhrase;

       gameRun = false;
   }
})

//функция игры 
function startGame () {
   minValue = 0;
   maxValue = 100;
   orderNumber = 0;
   alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
   minValue = parseInt(prompt('Минимальное знание числа для игры', '0')) || 0;
   maxValue = parseInt(prompt('Максимальное знание числа для игры', '100')) || 100;

   minValue < -999 ? minValue = -999 : minValue;
   maxValue > 999 ? maxValue = 999 : maxValue;

   if(minValue > maxValue){
       alert('Вы ошиблись, загадайте так, чтобы минималное значение было меньше максимального :)');
       startGame ();
   }

   answerNumber = Math.floor((minValue + maxValue) / 2);
      orderNumber = 1;
      gameRun = true;
      orderNumberField.innerText = orderNumber;
      answerField.innerText = `Вы загадали число ${answerNumber}?`;

  
};

