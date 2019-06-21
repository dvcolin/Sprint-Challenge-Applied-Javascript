class CarouselImage {
    constructor(element) {
        this.element = element;
        this.data = element.dataset.img;
        this.currentIndex = 1;
        this.images = document.querySelectorAll('.carousel img');
        this.image = `images[data-img = '${this.data}']`;
        rightButton.addEventListener('click', () => this.right());
        leftButton.addEventListener('click', () => this.left());
    }

    right() {
        if(this.data !== toString(this.images.length)) {
            this.images.forEach(image => image.classList.remove('current-img'));
            this.currentIndex += 1;
            this.image = `images[data-img = '${toString(this.currentIndex)}']`;
            this.image.classList.add('current-img');

        }
    }
}



const images = document.querySelectorAll('.carousel img');
const carousel = document.querySelector('.carousel');
const leftButton = carousel.querySelector('.left-button');
const rightButton = carousel.querySelector('.right-button');
 images.forEach(image => new CarouselImage(image));
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
