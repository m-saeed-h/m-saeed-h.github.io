document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const contents = document.querySelectorAll('.content');

    // Function to show content based on target ID
    function showContent(targetId) {
        contents.forEach(function(content) {
            content.style.display = 'none';
            if (content.id === targetId) {
                content.style.display = 'block';
            }
        });
    }

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Remove the '#' character
            
            // Remove the 'active' class from all links
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });

            // Add the 'active' class to the clicked link
            this.classList.add('active');

            // Show the corresponding content
            showContent(targetId);
        });
    });

    // Open the "About" section by default
    showContent('about');
    document.querySelector('.nav-link[href="#about"]').classList.add('active');
});
