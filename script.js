
// Function to switch project image
function switchProjectImage(event) {
    const imgSrc = event.target.getAttribute('data-img');
    if (imgSrc) {
        const projectImage = document.getElementById('project-image');
        projectImage.src = imgSrc;
        projectImage.alt = event.target.textContent;
    }
}

// Event Listener for project list
document.addEventListener('DOMContentLoaded', function() {
    const projectListItems = document.querySelectorAll('.projects-list ul li');
    projectListItems.forEach(item => {
        item.addEventListener('click', switchProjectImage);
    });
});
