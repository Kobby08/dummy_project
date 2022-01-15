window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual')
    const bubbleColors = ['#150050', '#3F0071', '#950101', '#3D0000', '#1E5128', '#4E9F3D']

    // Tapping pads event goes here...
    pads.forEach((pad, index) => {
        pad.addEventListener('click', () => {
            // Play sound
            const tappedSound = sounds[index];
            tappedSound.currentTime = 0; // resets sound
            tappedSound.play();

            createBubbles(index);

        })
    })

    // Create bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement('div')
        visual.appendChild(bubble)
        bubble.style.backgroundColor = bubbleColors[index]
        bubble.style.animation = 'jump 1s ease'
        bubble.addEventListener('animationend', function() {
            visual.removeChild(this)
        })
    }

})