// script.js
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const scrollToTopButton = document.getElementById("scroll-to-top");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}


document.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});


function toggleMenu() {
    const navList = document.getElementById("navList");
    navList.classList.toggle("show-menu");
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function scrollToTop() {
    const navigationBlock = document.getElementById("navigation");
    navigationBlock.scrollIntoView({ behavior: "smooth" });
}

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const scrollToTopButton = document.getElementById("scroll-to-top");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

function submitFeedback() {
    const username = document.getElementById('username').value;
    const userFeedback = document.getElementById('userFeedback').value;

    const feedbackItem = document.createElement('div');
    feedbackItem.classList.add('feedback-item');

    const feedbackHeader = document.createElement('h3');
    feedbackHeader.textContent = username;

    const feedbackParagraph = document.createElement('p');
    feedbackParagraph.textContent = userFeedback;

    feedbackItem.appendChild(feedbackHeader);
    feedbackItem.appendChild(feedbackParagraph);

    document.getElementById('feedback').appendChild(feedbackItem);

    feedbackItem.classList.add('animated');
    const thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = 'Дякую за ваш відгук';
    thankYouMessage.classList.add('thank-you-message');

    document.getElementById('feedback').appendChild(thankYouMessage);
    
    thankYouMessage.classList.add('animated');
}


