// Handle fade-out on link click
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        localStorage.setItem('fade', 'true');
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = this.href;
        }, 300); // Match the transition duration in CSS
    });
});

// Handle fade-in on page load
window.addEventListener('load', () => {
    if (localStorage.getItem('fade') === 'true') {
        document.body.classList.add('fade-in');
        localStorage.removeItem('fade');
        setTimeout(() => {
            document.body.classList.remove('fade-in');
        }, 1000); // Match the transition duration in CSS
    }
});
