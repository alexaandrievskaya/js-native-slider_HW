let $container = $('#carousel');
let $slides = $('.slide');
let currentSlide = 0;
let interval = 2000;
let timerID = null;
let slidesCount = $slides.lenth;
let isPlaying = true;

const SPACE = ' ';
const LEFT_ARROW = 'ArrowLeft';
const RIGHT_ARROW = 'ArrowRight';
const FA_PAUSE = '<i class="far fa-pause-circle"></i>';
const FA_PLAY = '<i class="far fa-play-circle"></i>';
const FA_PREV = '<i class="fas fa-angle-left"></i>';
const FA_NEXT = '<i class="fas fa-angle-right"></i>';

let initControls = () => {
    let $controls = $container.add('div').addClass('controls').addId('controls-container');

    const PAUSE = `<span id="pause-btn" class="control-pause">${this.FA_PAUSE}</span>`;
    const PREV = `<span id="prev-btn" class="control-prev">${this.FA_PREV}</span>`;
    const NEXT = `<span id="next-btn" class="control-next">${this.FA_NEXT}</span>`;

    
};



console.log($controls);