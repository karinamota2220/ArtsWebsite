const images = [
    "images/Birthday-cake.jpg",
    "images/BirthdayGroup.jpg",
    "images/Birthday-4.jpg",
    "images/Birthday-45.jpg"
];

let currentIndex = 0;

function changeImage(imageSrc) {
    if (imageSrc === "next") {
        currentIndex = (currentIndex + 1) % images.length;
    } else if (imageSrc === "prev") {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    } else {
        currentIndex = images.indexOf(imageSrc);
    }
    const mainImage = document.getElementById('mainImage');
    mainImage.src = images[currentIndex];
}
