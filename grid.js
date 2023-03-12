const roll = document.getElementsByClassName('roll')[0];
const restart = document.getElementsByClassName('restart')[0];
const theNumber = document.querySelector('.input');

const num = document.getElementsByClassName('num');

function noColor() {
    for(let i = 0; i < 24; i++) {
        num[i].style.background = "#00994c"
    }
}

let total =0;

function random() {
    const random =Math.ceil(Math.random()*6);
    if(random !== 7) {
        total = total + random;   
        if(total === 0) {
            noColor();
            num[0].style.background = "#006935";
        }else if(total === 1) {
            noColor();
            num[1].style.background = "#006935";
        }else if(total === 2) {
            noColor();
            num[2].style.background = "#006935";
        }else if(total === 3) {
            noColor();
            num[3].style.background = "#006935";
            total = 0;
            num[0].style.background = "#1ADE7C";
        }else if(total === 4) {
            noColor();
            num[4].style.background = "#006935";
        }else if(total === 5) {
            noColor();
            num[5].style.background = "#006935";
        }else if(total === 6) {
            noColor();
            num[6].style.background = "#006935";
            total = total + 4;
            num[10].style.background = "#1ADE7C";
        }else if(total === 7) {
            noColor();
            num[7].style.background = "#006935";
        }else if(total === 8) {
            noColor();
            num[8].style.background = "#006935";
            total = total - 4;
            num[4].style.background = "#1ADE7C";
        }else if(total === 9) {
            noColor();
            num[9].style.background = "#006935";
        }else if(total === 10) {
            noColor();
            num[10].style.background = "#006935";
        }else if(total === 11) {
            noColor();
            num[11].style.background = "#006935";
        }else if(total === 12) {
            noColor();
            num[12].style.background = "#006935";
        }else if(total === 13) {
            noColor();
            num[13].style.background = "#006935";
            total = total - 3 ;
            num[10].style.background = "#1ADE7C";
        }else if(total === 14) {
            noColor();
            num[14].style.background = "#006935";
        }else if(total === 15) {
            noColor();
            num[15].style.background = "#006935";
        }else if(total === 16) {
            noColor();
            num[16].style.background = "#006935";
            total = total + 4;
            num[20].style.background = "#1ADE7C";
        }else if(total === 17) {
            noColor();
            num[17].style.background = "#006935";
        }else if(total === 18) {
            noColor();
            num[18].style.background = "#006935";
        }else if(total === 19) {
            noColor();
            num[19].style.background = "#006935";
            total = total - 15;
            num[4].style.background = "#1ADE7C";
        }else if(total === 20) {
            noColor();
            num[20].style.background = "#006935";
        }else if(total === 21) {
            noColor();
            num[21].style.background = "#006935";
        }else if(total === 22) {
            noColor();
            num[22].style.background = "#006935";
            total = total - 18;
            num[3].style.background = "#1ADE7C";
        }else if(total > 22) {
            noColor();
            num[23].style.background = "#006935";
            alert('You Won , DM me @yazeed-asaad on Twitter')
            total = 0;
        }
        theNumber.textContent = `You got ${random} from rolling the dice and you're on the Square number ${total + 1} `;
    }
};

roll.addEventListener('click', () => {
    random();
});

restart.addEventListener('click', () => {
    total = 0;
    theNumber.textContent = `You're on the ${total + 1}th Square`;
    noColor();
    num[0].style.background = "#006935"
});
