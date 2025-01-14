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

// image section
// Function to open the modal with the clicked image
function openModal(img) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImg");
    var caption = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    caption.innerHTML = img.alt;
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Attach event listeners to image items for modal view
document.querySelectorAll(".image-item img").forEach(function (img) {
    img.addEventListener("click", function () {
        openModal(this);
    });
});

