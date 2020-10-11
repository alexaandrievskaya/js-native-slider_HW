let $slides = $('.slide');
let $indContainer = $('.indicators');
let $indicators = $('.indicator');
let $pauseBtn = $('#pause-btn');
let $nextBtn = $('#next-btn');
let $prevBtn = $('#prev-btn');

let currentSlide = 0;
let interval = 2000;
let timerID = null;
let slidesCount = $slides.length;
let isPlaying = true;

const SPACE = ' ';
const LEFT_ARROW = 'ArrowLeft';
const RIGHT_ARROW = 'ArrowRight';
const FA_PAUSE = '<i class="far fa-pause-circle"></i>';
const FA_PLAY = '<i class="far fa-play-circle"></i>';


//$indContainer.css('display', 'flex');
//$('.controls').css('display', 'block');

let gotoNth = (n) => {
    $($slides[currentSlide]).toggleClass('active');
    $($indicators[currentSlide]).toggleClass('active');
    currentSlide = (n + slidesCount) % slidesCount;
    $($slides[currentSlide]).toggleClass('active');
    $($indicators[currentSlide]).toggleClass('active');
};

let gotoNext = () => {
    gotoNth(currentSlide + 1);
};

let gotoPrev = () => {
    gotoNth(currentSlide - 1);
};

let play = () => {
    $pauseBtn.html(FA_PAUSE);
    isPlaying = !isPlaying;
    timerID = setInterval(gotoNext, interval);
};

let pause = () => {
    if(isPlaying) {
        $pauseBtn.html(FA_PLAY);
        isPlaying = !isPlaying;
        clearInterval(timerID);
    }
};

let pausePlay = () => isPlaying ? pause() : play();

let prev = () => {
    pause();
    gotoPrev();
};

let next = () => {
    pause();
    gotoNext();
};

$pauseBtn.on('click', pausePlay);
$nextBtn.on('click', next);
$prevBtn.on('click', prev);

let indicate = (e) => {
    let target = e.target;

    if (target.classList.contains('indicator')) {
        pause();
        gotoNth(+target.getAttribute('data-slide-to'));
    }
};

$indContainer.on('click', '.indicator', indicate);

let pressKey = (e) => {
    if (e.key === LEFT_ARROW) prev();
    if (e.key === RIGHT_ARROW) next();
    if (e.key === SPACE) pausePlay();
};

$(document).on('keydown', pressKey);
