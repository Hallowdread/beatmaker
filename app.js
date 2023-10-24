class Drumkit {
    constructor() {
        //?  Necessary stuffs
        this.pads = document.querySelectorAll('.pad');
        this.playBtn = document.querySelector('.play-btn');
        this.index = 0;
        this.bpm = 150;
        this.isPlaying = null;
        this.mutes = document.querySelectorAll('.mute');
        this.selects = document.querySelectorAll('select');
        this.tempoSlider  = document.querySelector('.tempo-slider');
        this.tempoNo = document.querySelector('.tempo-no');

        //? Drumkit sounds
        this.kickSound = document.querySelector('.kick-sound');
        this.snareSound = document.querySelector('.snare-sound');
        this.hihatSound = document.querySelector('.hihat-sound');
        this.percSound = document.querySelector('.perc-sound');
        this.tomSound = document.querySelector('.tom-sound');
        this.clapSound = document.querySelector('.clap-sound');
        this.crashSound = document.querySelector('.crash-sound');
        this.cowbellSound = document.querySelector('.cowbell-sound');
        this.openhatSound = document.querySelector('.openhat-sound');
        this.shakerSound = document.querySelector('.shaker-sound');
        this.rideSound = document.querySelector('.ride-sound');

        //? Current Sounds
        this.currentKick = './sounds/kick-classic.wav';
        this.currentSnare = './sounds/snare-808.wav';
        this.currentHihat = './sounds/hihat-808.wav';
        this.currentPerc = './sounds/perc-808.wav';
        this.currentTom = './sounds/tom-808.wav';
        this.currentClap = './sounds/clap-808.wav';
        this.currentCrash = './sounds/crash-808.wav';
        this.currentCowbell= './sounds/cowbell-808.wav';
        this.currentOpenhat = './sounds/openhat-808.wav';
        this.currentShaker = './sounds/shaker-analog.wav';
        this.currentRide = './sounds/ride-acoustic01.wav';
    };

    //? Active Pads
    activePad() {
        this.classList.toggle('active'); 
    };

    //? Repeating the pads and the sound
    repeat() {
        let step = this.index % 8;
        const activeBars = document.querySelectorAll(`.b${step}`);
        
        //* Loop Over Bars
        activeBars.forEach(bar => {
            //* For the animation
            bar.style.animation = `playTrack alternate 0.3s ease-in-out 2`;

            //* For the sounds

            //*  Check if it's active
            if(bar.classList.contains('active')) {
                if(bar.classList.contains('kick-pad')) {
                    this.kickSound.currentTime = 0;
                    this.kickSound.play();
                }
                if(bar.classList.contains('snare-pad')) {
                    this.snareSound.currentTime = 0;
                    this.snareSound.play();
                }
                if(bar.classList.contains('hihat-pad')) {
                    this.hihatSound.currentTime = 0;
                    this.hihatSound.play();
                }
                if(bar.classList.contains('perc-pad')) {
                    this.percSound.currentTime = 0;
                    this.percSound.play();
                }
                if(bar.classList.contains('tom-pad')) {
                    this.tomSound.currentTime = 0;
                    this.tomSound.play();
                }
                if(bar.classList.contains('clap-pad')) {
                    this.clapSound.currentTime = 0;
                    this.clapSound.play();
                }
                if(bar.classList.contains('crash-pad')) {
                    this.crashSound.currentTime = 0;
                    this.crashSound.play();
                }
                if(bar.classList.contains('cowbell-pad')) {
                    this.cowbellSound.currentTime = 0;
                    this.cowbellSound.play();
                }
                if(bar.classList.contains('openhat-pad')) {
                    this.openhatSound.currentTime = 0;
                    this.openhatSound.play();
                }
                if(bar.classList.contains('shaker-pad')) {
                    this.shakerSound.currentTime = 0;
                    this.shakerSound.play();
                }
                if(bar.classList.contains('ride-pad')) {
                    this.rideSound.currentTime = 0;
                    this.rideSound.play();
                };
            };
        });
        // console.log(activeBars);
        this.index++;
    };

    //? Starting the drumkit
    start() {
        const interval = (60/this.bpm) * 1000;

        //* Check if it plays 
        if (!this.isPlaying) {
            this.isPlaying = setInterval(() => {
                this.repeat();
            }, interval);
        } else {
            //* Remove the interval if it's playin
            clearInterval(this.isPlaying);
            this.isPlaying = null;
        };

        // console.log(this.isPlaying);
    };

    //? Adding functionality to the play button
    updateBtn() {
        if(!this.isPlaying) {
            this.playBtn.innerText = 'Play';
            this.playBtn.classList.remove('playing'); 
        } else {
            this.playBtn.innerText = 'Stop';
            this.playBtn.classList.add('playing');
        }
    };

    //? Muting the sounds
    muteSound(e) {
        const muteIndex  = e.target.getAttribute('data-track');
        const mute = e.target;

        mute.classList.toggle('active');

        if(mute.classList.contains('active')) {
            switch (muteIndex) {
                case '0':
                    this.kickSound.volume = 0;
                    break;
                case '1':
                    this.snareSound.volume = 0;
                    break;
                case '2':
                    this.hihatSound.volume = 0;
                    break;
                case '3':
                    this.percSound.volume = 0;
                    break;
                case '4':
                    this.tomSound.volume = 0;
                    break;
                case '5':
                    this.clapSound.volume = 0;
                    break;
                case '6':
                    this.crashSound.volume = 0;
                    break;
                case '7':
                    this.cowbellSound.volume = 0;
                    break;
                case '8':
                    this.openhatSound.volume = 0;
                    break;
                case '9':
                    this.shakerSound.volume = 0;
                    break;
                case '10':
                    this.rideSound.volume = 0;
                    break;
            }
        } else {
            switch (muteIndex) {
                case '0':
                    this.kickSound.volume = 1;
                    break;
                case '1':
                    this.snareSound.volume = 1;
                    break;
                case '2':
                    this.hihatSound.volume = 1;
                    break;
                case '3':
                    this.percSound.volume = 1;
                    break;
                case '4':
                    this.tomSound.volume = 1;
                    break;
                case '5':
                    this.clapSound.volume = 1;
                    break;
                case '6':
                    this.crashSound.volume = 1;
                    break;
                case '7':
                    this.cowbellSound.volume = 1;
                    break;
                case '8':
                    this.openhatSound.volume = 1;
                    break;
                case '9':
                    this.shakerSound.volume = 1;
                    break;
                case '10':
                    this.rideSound.volume = 1;
                    break;
            };
        };
    };

    //?  Changing the sounds
    changeSound(e) {
        const selectionName  = e.target.name;
        const selectionValue  = e.target.value;

        switch (selectionName) {
            case 'kick-select':
                this.kickSound.src  = selectionValue;
                break;
            case 'snare-select':
                this.snareSound.src  = selectionValue;
                break;
            case 'hihat-select':
                this.hihatSound.src  = selectionValue;
                break;
            case 'perc-select':
                this.percSound.src  = selectionValue;
                break;
            case 'tom-select':
                this.tomSound.src  = selectionValue;
                break;
            case 'clap-select':
                this.clapSound.src  = selectionValue;
                break;
            case 'crash-select':
                this.crashSound.src  = selectionValue;
                break;
            case 'cowbell-select':
                this.cowbellSound.src  = selectionValue;
                break;
            case 'openhat-select':
                this.openhatSound.src  = selectionValue;
                break;
            case 'shaker-select':
                this.shakerSound.src  = selectionValue;
                break;
            case 'ride-select':
                this.rideSound.src  = selectionValue;
                break;
        };

        console.log(selectionValue);
    };

    //? Changing the tempo number
    changeTempo(e) {
        this.tempoNo.innerText = e.target.value;
    };

    //? Increasing and Reducing the tempo
    updateTempo(e) {
        this.bpm = e.target.value;
        clearInterval(this.isPlaying);
        this.isPlaying = null;

        if (this.playBtn.classList.contains('playing')) {
            this.start();
        };
        // console.log(this.bpm);
    };
};

const drumKit  = new Drumkit();

//? Event Listeners
drumKit.pads.forEach(pad => {
    pad.addEventListener('click', drumKit.activePad);
    pad.addEventListener('animationend', () => {
        pad.style.animation = '';
    })
});

drumKit.playBtn.addEventListener('click', () => {
    drumKit.start();
    drumKit.updateBtn();
});

drumKit.mutes.forEach(mute => {
    mute.addEventListener('click', (e) => {
        drumKit.muteSound(e);
    });
});

drumKit.selects.forEach(select => {
    select.addEventListener('change', (e) => {
        drumKit.changeSound(e);
    });
});

drumKit.tempoSlider.addEventListener('input', (e) => {
    drumKit.changeTempo(e)
});

drumKit.tempoSlider.addEventListener('change', (e) => {
    drumKit.updateTempo(e);
});