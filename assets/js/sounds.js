document.addEventListener('DOMContentLoaded', function() {
    const mcButtonSound = new Audio('assets/sounds/mcbutton.mp3');

    document.getElementById('mcbuttonlink0').addEventListener('click', function() {
        mcButtonSound.play();
        disableAllButtons();
    });

    mcButtonSound.addEventListener('ended', function() {
        enableButtons();
    });

    function disableAllButtons() {
        const buttons = document.querySelectorAll('.mcbuttonbackend, .mcbutton, .mcbuttonback, .mcbuttonfront');
        buttons.forEach(button => {
            button.style.pointerEvents = 'none';
        });
    }

    function enableButtons() {
        const buttons = document.querySelectorAll('.mcbuttonbackend, .mcbutton, .mcbuttonback, .mcbuttonfront');
        buttons.forEach(button => {
            button.style.pointerEvents = '';
        });
    }
});
