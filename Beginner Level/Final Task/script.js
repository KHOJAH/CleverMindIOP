// --- Welcome Screen Fade Out ---
window.addEventListener('load', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    // Wait a bit before starting fade (e.g., 1 second)
    setTimeout(() => {
        welcomeScreen.classList.add('hidden');
        // Optional: Remove the element after transition completes
        // welcomeScreen.addEventListener('transitionend', () => {
        //     welcomeScreen.remove();
        // });
    }, 1000); // 1000 milliseconds = 1 second delay
});


// --- Navigation Highlight ---
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.header-nav a');
    const highlight = document.getElementById('nav-highlight');
    const navList = document.querySelector('.header-nav ul');

    function moveHighlight(element) {
        if (!element) {
            highlight.style.opacity = '0';
            return;
        }
        const linkRect = element.getBoundingClientRect();
        const navRect = navList.getBoundingClientRect(); // Get nav container's position

        highlight.style.width = `${linkRect.width}px`;
        // Calculate left relative to the navList container
        highlight.style.left = `${linkRect.left - navRect.left}px`;
        highlight.style.opacity = '1';
    }

    // Initial position (optional, could highlight 'Home' by default)
    // moveHighlight(navLinks[0]); // Uncomment to highlight first item initially

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => moveHighlight(link));
    });

    // Reset highlight when mouse leaves the entire nav area
    navList.addEventListener('mouseleave', () => {
        highlight.style.opacity = '0';
    });

    // Adjust highlight on window resize
    window.addEventListener('resize', () => {
        // Find the currently hovered link (if any) to reposition highlight
        const hoveredLink = document.querySelector('.header-nav a:hover');
        if (hoveredLink && window.innerWidth > 768) { // Only move if not in mobile view where highlight is hidden
            moveHighlight(hoveredLink);
        } else {
            highlight.style.opacity = '0'; // Hide if no link is hovered or in mobile view
        }
    });
});

// --- Text Animation (ml4) ---
// Remove the previous .ml4 animation block that wrapped individual letters.
// Replace it with the following:

// Check if the container exists
var ml4Container = document.querySelector('.ml4');
if (ml4Container) {
    // Define animation parameters based on the example
    var ml4 = {};
    ml4.opacityIn = [0,1];
    ml4.scaleIn = [0.2, 1];
    ml4.scaleOut = 3;
    ml4.durationIn = 800;
    ml4.durationOut = 600;
    ml4.delay = 500; // Delay between words

    anime.timeline({loop: true})
      .add({
        targets: '.ml4 .letters-1', // Target the first word span
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      }).add({
        targets: '.ml4 .letters-1',
        opacity: 0, // Fade out
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      }).add({
        targets: '.ml4 .letters-2', // Target the second word span
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      }).add({
        targets: '.ml4 .letters-2',
        opacity: 0, // Fade out
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      }).add({
        targets: '.ml4 .letters-3', // Target the third word span
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      }).add({
        targets: '.ml4 .letters-3',
        opacity: 0, // Fade out
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      }).add({
        targets: '.ml4', // Target the whole container at the end
        opacity: 0, // Fade out the container briefly before loop
        duration: 500,
        delay: 500
      });

} else {
    console.warn("Element with class '.ml4' not found for animation.");
}


// --- Image Slider ---
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.image-slider');
    const dots = document.querySelectorAll('.slider-nav-dots .dot');
    const images = document.querySelectorAll('.image-slider img');
    const totalImages = images.length;
    let currentIndex = 0;

    function updateSlider() {
        const offset = -currentIndex * (100 / totalImages); // Calculate percentage offset
        slider.style.transform = `translateX(${offset}%)`;

        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    // Optional: Auto-slide functionality
    // setInterval(() => {
    //     currentIndex = (currentIndex + 1) % totalImages;
    //     updateSlider();
    // }, 5000); // Change image every 5 seconds

    // Initial setup
    updateSlider();
});

// --- Text Animation (ml1) ---
// Wrap every letter in a span
var textWrapperMl1 = document.querySelector('.ml1 .letters');
if (textWrapperMl1) { // Check if the element exists
    textWrapperMl1.innerHTML = textWrapperMl1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
      .add({
        targets: '.ml1 .letter',
        scale: [0.3,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i+1)
      }).add({
        targets: '.ml1 .line',
        scaleX: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 700,
        offset: '-=875', // Starts midway through letters animation
        delay: (el, i, l) => 80 * (l - i)
      }).add({
        targets: '.ml1',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
} else {
    console.warn("Element with class '.ml1 .letters' not found for animation.");
}


// --- Text Animation (ml3) ---
// Wrap every letter in a span
var textWrapperMl3 = document.querySelector('.ml3');
if (textWrapperMl3) { // Check if the element exists
    textWrapperMl3.innerHTML = textWrapperMl3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
      .add({
        targets: '.ml3 .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i+1)
      }).add({
        targets: '.ml3',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
} else {
    console.warn("Element with class '.ml3' not found for animation.");
}