let scoreh2 = document.getElementById('score');
let timelefth2 = document.getElementById('timeleft');
let start = document.getElementById('start');
let pause = document.getElementById('pause');
let square = document.querySelectorAll('.square')
let heading = document.getElementsByClassName('heading')[0];
randPosi = null;
let score = 0;
let timeleft = 60;
let timmer = null;
let game = null;

let gameaudio = new Audio('gameMusic.mp3');

let hitsound = new Audio('hitMusic.mp3');



function randomPosition(){
    randPosi = Math.floor(Math.random()*square.length);
    for(let i=0;i<square.length;i++){
        square[i].classList.remove("mole");
    }
        square[randPosi].classList.add("mole");
    }


start.addEventListener('click',startTheGame);


function timing(){
    timeleft--;
    timelefth2.innerHTML = `Time left: ${timeleft}`;

    if(timeleft == 0){
        clearInterval(game);
        clearInterval(timer);
        start.innerHTML = 'Restart';
        start.style.display = 'inline';
        pause.style.display = 'none';
        gameaudio.pause();
        heading.innerHTML = 'GAME OVER';


    }
}

function startTheGame(){
    score = 0;
    timeleft = 60;
    gameaudio.play();

    heading.innerHTML = 'Whack The Mole';
    scoreh2.innerHTML = 'your score is 0';

    pause.innerHTML = 'pause';
    start.style.display = 'none';
    pause.style.display = 'inline';

    timer = setInterval(timing , 1000);

    square.forEach(sq =>{
        sq.addEventListener('click',()=>{
            if(sq.id == randPosi){
                score++;
                scoreh2.innerHTML = `your score is ${score}`;

                hitsound.play();
                setTimeout(()=>{
                    hitsound.pause
                }
                ,1000);
            }
            randPosi = null;
        })
    })

    game = setInterval(randomPosition, 1000);
    
}


pause.addEventListener('click' , pauseTheGame);

function pauseTheGame(){
    if(pause.innerHTML == 'pause'){
        pause.innerHTML = 'Resume';
        gameaudio.pause()
        randPosi = null;
        clearInterval(timer);
        clearInterval(game);
        timer = null;
        game = null;
        start.innerHTML = 'Restart';
        start.style.display = 'inline';
    }
    else{
        pause.innerHTML = 'pause';
        gameaudio.play();
        start.style.display = 'none';
        timer =setInterval(timing ,1000);
        game =setInterval(randomPosition ,1000);
    }
}