document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("dynamic-elements-container");
    const headerTitle = document.getElementById("atelier-name");

    // Припускаємо, що висота великої літери визначається фіксованим множником
    const letterHeight = parseFloat(window.getComputedStyle(headerTitle).fontSize) * 1.2;
    const imageSize = letterHeight * 2; // Подвоєна висота

    const images = ["images/needle.png", "images/thread.png", "images/scissors.png"];

    // Додавання зображень кожні 2 секунди
    setInterval(() => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        createDynamicItem(randomImage, imageSize, container);
    }, 5000);
});

function createDynamicItem(imageSrc, size, container) {
    const item = document.createElement("img");
    item.src = imageSrc;
    item.className = "dynamic-item";
    item.style.width = `${size}px`;
    item.style.height = `${size}px`;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const randomX = Math.random() * (containerWidth - size);
    const randomY = Math.random() * (containerHeight - size);

    item.style.left = `${randomX}px`;
    item.style.top = `${randomY}px`;

    container.appendChild(item);
    setTimeout(() => {
        item.remove();
    }, 5000);
}