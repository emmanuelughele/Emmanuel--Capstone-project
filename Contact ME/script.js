document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".contact-item");

    items.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
    });

    setTimeout(() => {
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
                item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            }, index * 150);
        });
    }, 500);
});
