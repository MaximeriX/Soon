document.addEventListener('DOMContentLoaded', function() {
    const mcButtonBackend = document.querySelector('.mcbutton-backend');
    const mcButtonBackendClass = `.mcbutton-backend`
    const mcButtonFront = document.querySelector('.mcbutton-front');
    const mcButton = document.querySelector('.mcbutton');

    const mcButtonSound = new Audio('assets/sounds/mcbutton.mp3');

    document.querySelector(`${mcButtonBackendClass} a`).addEventListener('click', function() {
        mcButtonSound.play();
        disableAllButtons();
        addActive();
    });

    mcButtonSound.addEventListener('ended', function () {
       enableButtons();
       removeActive();
    });

    function addActive() {
        if (mcButtonBackend) {
            const mcButtons = document.querySelectorAll('.mcbutton-backend, .mcbutton-backend *');
            mcButtons.forEach(button => {
                button.classList.add('active');
            });
        }
        if (mcButton) {
            mcButton.classList.add('active');
        }
        if (mcButtonBackend) {
            mcButtonBackend.classList.add('active');
        }
    }

    function removeActive() {
        if (mcButtonBackend) {
            const mcButtons = document.querySelectorAll('.mcbutton-backend, .mcbutton-backend *');
            mcButtons.forEach(button => {
                button.classList.remove('active');
            });
        }
        if (mcButton) {
            mcButton.classList.remove('active');
        }
        if (mcButtonBackend) {
            mcButtonBackend.classList.remove('active');
        }
    }

    function disableAllButtons() {
        const buttons = document.querySelectorAll(`${mcButtonBackendClass} *`);
        buttons.forEach(button => {
            button.style.pointerEvents = 'none';
        });
    }

    function enableButtons() {
        const buttons = document.querySelectorAll(`${mcButtonBackendClass} *`);
        buttons.forEach(button => {
            button.style.pointerEvents = '';
            button.style.cursor = 'pointer';
        });
    }
});
