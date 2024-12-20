


const targetDate = new Date("2025-12-15T23:59:59").getTime();

// Update function
function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
        clearInterval(timer);
        document.querySelector(".deals-time").innerHTML = "<h4>Time is Over!!</h4>";
        return;
    }

    // Calculate time parts
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update HTML
    document.querySelectorAll(".deals-time ul li h4")[0].innerText = days;
    document.querySelectorAll(".deals-time ul li h4")[1].innerText = hours;
    document.querySelectorAll(".deals-time ul li h4")[2].innerText = minutes;
    document.querySelectorAll(".deals-time ul li h4")[3].innerText = seconds;
}

// Run the countdown every second
const timer = setInterval(updateCountdown, 1000);

// Call immediately to prevent delay
updateCountdown();
