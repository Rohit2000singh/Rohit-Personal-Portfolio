window.onscroll = function() {
    updateProgressBar();
};

function updateProgressBar() {
    // Get the scroll position of the page
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    
    // Get the height of the entire page including scrolled out parts
    let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    
    // Get the height of the window
    let clientHeight = document.documentElement.clientHeight || window.innerHeight;
    
    // Calculate the total scrollable area
    let scrollableHeight = scrollHeight - clientHeight;
    
    // Calculate the scroll progress percentage
    let scrollPercentage = (scrollTop / scrollableHeight) * 100;
    
    // Update the width of the progress bar
    document.getElementById('progress-bar').style.width = scrollPercentage + "%";
}


// script.js
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("ul li a");

    for (const link of links) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    }
});
