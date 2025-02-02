AOS.init({
    duration: 1000,
    once: true,
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animated',
});

document.querySelectorAll('[data-aos]').forEach(function (el) {
    el.addEventListener('aos:in', function () {
        const h2Spans = el.querySelectorAll('h2 span');
        h2Spans.forEach((span, index) => {
            span.style.animationDelay = `${index * 0.1}s`;
            span.classList.add('animated');
        });
    });
});

document.getElementById('acceptCookies').addEventListener('click', function () {
    document.getElementById('cookieConsent').style.display = 'none';
    // Set a cookie to remember the user's consent
    document.cookie = "cookieConsent=true; max-age=" + 60 * 60 * 24 * 30 + "; path=/";
});

// Check if the user has already accepted cookies
if (document.cookie.indexOf('cookieConsent=true') !== -1) {
    document.getElementById('cookieConsent').style.display = 'none';
}
