document.getElementById("blessingsButton").addEventListener("click", function() {
  document.getElementById("second").scrollIntoView({ behavior: "smooth" });
});

const audio = document.getElementById("bhaktiAudio");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            audio.play();
        }
    });
}, { threshold: 0.5 });

observer.observe(document.getElementById("second"));


let scrollTimeout;

window.addEventListener("scroll", () => {
    document.body.classList.add("show-scrollbar");
    document.body.classList.remove("hide-scrollbar");

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        document.body.classList.remove("show-scrollbar");
        document.body.classList.add("hide-scrollbar");
    }, 500); 
});



document.getElementById("burstCrackerButton").addEventListener("click", function() {
    const cracersContainer = document.querySelector('.for-cracers');
    const boxes = cracersContainer.querySelectorAll(".box");
    const displayDuration = 5000;  // Duration to show each box (in milliseconds)
    let currentBoxIndex = 0;

    // Show the container
    cracersContainer.style.display = 'block';

    function showNextBox() {
        // Hide the previous box if it's not the first call
        if (currentBoxIndex > 0) {
            boxes[currentBoxIndex - 1].style.display = 'none';
        }

        // Stop if there are no more boxes to show
        if (currentBoxIndex >= boxes.length) {
            cracersContainer.style.display = 'none';  // Hide the container after the last box
            return;
        }

        // Show the current box
        const currentBox = boxes[currentBoxIndex];
        currentBox.style.display = 'block';

        // Play the audio in the current box
        const audio = currentBox.querySelector("audio");
        audio.play();

        currentBoxIndex++;

        // Set a timeout to show the next box
        setTimeout(showNextBox, displayDuration);
    }

    // Start with the first box
    showNextBox();
});