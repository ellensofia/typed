var typed = new Typed('.type', {
    strings: [
        'my webpage',
        'cyberspace'
    ],
    typeSpeed: 110,
    backSpeed: 160,
    loop: true,
});


var typed = new Typed('.element', {
    // Waits 10000ms after typing "First"
    strings:
        ['Sorry for the annoying blinking...',
            "It is not the best plugin ever..."
        ],
    typeSpeed: 70,
    backSpeed: 80,
    loop: true,

    /**
 * @property {boolean} fadeOut Fade out instead of backspace
 * @property {string} fadeOutClass css class for fade animation
 * @property {boolean} fadeOutDelay Fade out delay in milliseconds
 */
    fadeOut: true,
    fadeOutClass: '.element',
    fadeOutDelay: 50
})