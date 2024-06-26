function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function toggleDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

function translateText() {
    const inputText = document.getElementById('input-text').value;
    const modalImagesContainer = document.getElementById('modal-images');
    const modalLettersContainer = document.getElementById('modal-letters');
    modalImagesContainer.innerHTML = ''; // Limpiar imágenes previas
    modalLettersContainer.innerHTML = ''; // Limpiar letras previas

    const alphabet = {
        'a': 'img/a.png',
        'b': 'img/b.png',
        'c': 'img/c.png',
        'd': 'img/d.png',
        'e': 'img/e.png',
        'f': 'img/f.png',
        'g': 'img/g.png',
        'h': 'img/h.png',
        'i': 'img/i.png',
        'j': 'img/j.png',
        'k': 'img/k.png',
        'l': 'img/l.png',
        'll': 'img/ll.png',
        'm': 'img/m.png',
        'n': 'img/n.png',
        'ñ': 'img/ñ.png',
        'o': 'img/o.png',
        'p': 'img/p.png',
        'q': 'img/q.png',
        'r': 'img/r.png',
        'rr': 'img/rr.png',
        's': 'img/s.png',
        't': 'img/t.png',
        'u': 'img/u.png',
        'v': 'img/v.png',
        'w': 'img/w.png',
        'x': 'img/x.png',
        'y': 'img/y.png',
        'z': 'img/z.png',
    };

    // Dividir la palabra en caracteres
    const characters = inputText.replace(/\s+/g, '').toLowerCase().split('');
    characters.forEach(char => {
        if (alphabet[char]) {
            const img = document.createElement('img');
            img.src = alphabet[char];
            img.alt = char;
            modalImagesContainer.appendChild(img);
            modalLettersContainer.innerHTML += char + ' ';
        }
    });

    // Mostrar el modal
    document.getElementById('translation-modal').style.display = 'block';
}

function selectImage(imageId) {
    const selectedWordContainer = document.getElementById('selected-word');
    const img = document.createElement('img');
    img.src = `img/${imageId}.png`;
    img.alt = imageId;
    img.style.margin = '5px';
    selectedWordContainer.appendChild(img);

    const selectedLettersContainer = document.getElementById('selected-letters');
    selectedLettersContainer.innerHTML += imageId + ' ';
}

function clearSelection() {
    document.getElementById('selected-word').innerHTML = '';
    document.getElementById('selected-letters').innerHTML = '';
}

function removeLast() {
    const selectedWordContainer = document.getElementById('selected-word');
    const selectedLettersContainer = document.getElementById('selected-letters');
    selectedWordContainer.removeChild(selectedWordContainer.lastChild);

    const lettersArray = selectedLettersContainer.innerHTML.trim().split(' ');
    lettersArray.pop();
    selectedLettersContainer.innerHTML = lettersArray.join(' ') + ' ';
}

function closeModal() {
    document.getElementById('translation-modal').style.display = 'none';
    document.getElementById('input-text').value = '';
    document.getElementById('modal-images').innerHTML = '';
    document.getElementById('modal-letters').innerHTML = '';
}

function openGifModal(gifSrc) {
    const gifModal = document.getElementById('gif-modal');
    const gifImage = document.getElementById('gif-image');
    gifImage.src = gifSrc;
    gifModal.style.display = 'block';
}

function closeGifModal() {
    const gifModal = document.getElementById('gif-modal');
    gifModal.style.display = 'none';
    const gifImage = document.getElementById('gif-image');
    gifImage.src = '';
}
