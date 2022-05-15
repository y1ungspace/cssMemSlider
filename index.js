let wrapper = document.createElement('DIV');
wrapper.classList.add('wrapper');

let imageWrapper = document.createElement('DIV');
imageWrapper.classList.add('image-wrapper');

let slider = document.createElement('DIV');
slider.classList.add('slider');

let bottomPanel = document.createElement('DIV');
bottomPanel.classList.add('bottom-panel');

let textBox = document.createElement('DIV');
textBox.classList.add('text-box');

let buttonsBox = document.createElement('DIV');
buttonsBox.classList.add('buttons-box');

document.body.append(wrapper);
wrapper.append(imageWrapper);
imageWrapper.append(slider);
wrapper.append(bottomPanel)
bottomPanel.append(textBox)
bottomPanel.append(buttonsBox);



let memes = [
    {
        src: "./assets/1f7.jpg",
        text: "hehe"
    },
    {
        src: "./assets/22ad2c40151f0062adc0eb992f4b72ba.jpg",
        text: "no talk me i angy"
    },
    {
        src: "./assets/2d479c77bbafe1d5cdf5819f758d4ddb.jpg",
        text: "no wait come back"
    },
    {
        src: "./assets/49e707b949aa2af12331d36d4b399578.jpg",
        text: "shut up i'm going to hit you"
    },
    {
        src: "./assets/94c9692ccce00ba68de2b81663889946.jpg",
        text: "heck forgot my snacks"
    },
    {
        src: "./assets/d8fae6b66c05f4e64bcd910a2252afec.jpg",
        text: "i'm listening you"
    }
];

for (let i = 0; i < 6; i++) {
    let button = document.createElement('DIV');
    let sliderImage = document.createElement('IMG');
    let control = document.createElement('DIV');
    control.classList.add('control', `control${i}`);
    slider.append(sliderImage);
    sliderImage.src = memes[i].src;
    sliderImage.classList.add('image');
    button.classList.add('button', `button${i}`);
    buttonsBox.append(control);
    document.getElementsByClassName('control')[i].append(button);

}

function changeMeme(elem) {
    let target = elem.target
    let numberOfImage;
    if (target.classList.contains('button') || target.classList.contains('control')) {
        numberOfImage = target.className.slice(-1);
    } else {
        return;
    }
    let n = numberOfImage * 30
    slider.style.transform = `translateX(-${n}vh)`;
    textBox.textContent = memes[numberOfImage].text
}

buttonsBox.addEventListener('click', changeMeme)