const dino = document.querySelector('.dino');
const kactus = document.querySelector('.kactus');
// kactus.classList.add('kactusMove')
let score = 0;
let count1 = 0


document.addEventListener('keydown', (e)=> {
    jump();
  
});

function jump(){
    // dino.classList.add('jump');
    if (dino.classList != 'jump'){
        dino.classList.add('jump');
        score++
        localStorage.setItem('score', score);
    } 
    setTimeout(()=> {
        dino.classList.remove('jump');
        document.querySelector('.out').innerHTML ='Текущий счёт:' + score;
        // cout = 0;
    }, 500);

    switch (score){
        case 5:
            kactus.classList.add('kactus2');
            break;
        case 10:
            kactus.classList.remove('kactus2');
            kactus.classList.add('kactus3');
            break;    
        case 15:
            kactus.classList.remove('kactus3');
            kactus.classList.add('kactus4');
            break; 
        case 20:
            kactus.classList.remove('kactus4');
            kactus.classList.add('kactus5');
            break;    
        case 25:
            kactus.classList.remove('kactus5');
            kactus.classList.add('kactus6');
            break;
    }

}



setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let kactusLeft = parseInt(window.getComputedStyle(kactus).getPropertyValue('left'));
    count1 = localStorage.getItem('count1')
    if(kactusLeft < 150 && kactusLeft > 0 && dinoTop >= 150){
        
        if( confirm('продолжить??') ){
            score = 0;
            window.location.reload();
        }
    } 
    if(score > count1){
        count1 = score;
        localStorage.setItem('count1', count1);
    }
}, 10);

document.querySelector('.out1').innerHTML = 'Лучший счёт:' + localStorage.getItem('count1');



// =========================<<<<<<....TIMER....>>>>>>=======================

let timerSec = 0;
let timerMin = 0;
let timerHour = 0;
let timer = document.querySelector('.time');

setInterval(count, 1000);

function count(){
    timerSec++;
    if(timerSec == 61){
        timerMin++;
        timerSec = 0;
    } else if(timerMin == 61 ){
        timerHour++;
        timerMin = 0;
    }else if(timerHour == 61 ){
        timerMin = 0;
        timerHour = 0;
        timerSec = 0;
        timerSec++;
    }
    timer.textContent = `0${timerHour}:0${timerMin}:0${timerSec}`   
}