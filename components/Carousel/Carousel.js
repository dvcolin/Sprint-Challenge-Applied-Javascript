class CarouselImage {
    constructor(element) {
        this.element = element;
        this.data = element.dataset.img;
        this.currentIndex = parseInt(this.data);
        rightButton.addEventListener('click', () => this.right());
    }

    right() {
        images.forEach(image => image.classList.remove('current-img'));

        if(this.currentIndex !== (images.length - 1)) {
            this.currentIndex += 1;
        } else {
            this.currentIndex = 0;
        }
        console.log(this.currentIndex);
        images[this.currentIndex].classList.add('current-img');
    }
}


let images = document.querySelectorAll('.carousel img');
const carousel = document.querySelector('.carousel');
const leftButton = carousel.querySelector('.left-button');
const rightButton = carousel.querySelector('.right-button');


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
