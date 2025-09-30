function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const refs = {
    input: document.querySelector('#controls input'),
    btnCreate: document.querySelector('[data-create]'),
    btnDestroy: document.querySelector('[data-destroy]'),
    boxes: document.querySelector('#boxes'),
};

refs.btnCreate.addEventListener('click', () => {
    const raw = refs.input.value.trim();
    const amount = Number(raw);

    if (!Number.isInteger(amount) || amount < 1 || amount > 100) {
        return;
    }

    createBoxes(amount);
    refs.input.value = '';
});

refs.btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    refs.boxes.innerHTML = '';

    const base = 30; // px
    const step = 10; // px
    const frag = document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
        const size = base + i * step;
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.style.borderRadius = '6px';
        box.style.margin = '4px';
        frag.appendChild(box);
    }

    refs.boxes.append(frag);
}

function destroyBoxes() {
    refs.boxes.innerHTML = '';
}