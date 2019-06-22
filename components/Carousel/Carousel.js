class Carousel {
    constructor(element) {
        this.element = element;
        const images = document.querySelectorAll('.carousel img');
        this.images = Array.from(images).map(image => new CarouselImage(image));
        this.currentIndex = 0;
        this.currentImage = images[this.currentIndex];
        rightButton.addEventListener('click', () => this.right());
        leftButton.addEventListener('click', () => this.left());
        console.log(this);
    }

    right() {
        const images = document.querySelectorAll('.carousel img');
        images.forEach(image => image.classList.remove('current-img'));
        if (this.currentIndex === this.images.length - 1) {
            this.currentIndex = 0;
        } else {
            this.currentIndex += 1;
        }
        this.currentImage = images[this.currentIndex];
        this.currentImage.classList.add('current-img');
        console.log(this);
    }

    left() {
        const images = document.querySelectorAll('.carousel img');
        images.forEach(image => image.classList.remove('current-img'));
        if (this.currentIndex === 0) {
            this.currentIndex = this.images.length - 1;
        } else {
            this.currentIndex -= 1;
        }
        this.currentImage = images[this.currentIndex];
        this.currentImage.classList.add('current-img');
        console.log(this);
    }
}

class CarouselImage {
    constructor(element) {
        this.element = element;
        this.data = element.dataset.img;
        this.currentIndex = parseInt(this.data);
    }
}


// let images = document.querySelectorAll('.carousel img');
const carousel = document.querySelector('.carousel');
const leftButton = carousel.querySelector('.left-button');
const rightButton = carousel.querySelector('.right-button');
const carouselComponent = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
