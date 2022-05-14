let wrapper = document.createElement('DIV');
wrapper.classList.add('wrapper');

let buttonsBox = document.createElement('DIV');
buttonsBox.classList.add('buttons-box');

document.body.append(wrapper);
document.body.append(buttonsBox);

for (let i = 0; i < 6; i++) {
    let button = document.createElement('DIV');
    button.classList.add('button', `button${i}`);
    buttonsBox.append(button);
}

let memes = [
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {
        
    }
]