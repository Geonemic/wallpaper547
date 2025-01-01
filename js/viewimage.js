document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const src = urlParams.get('src');
    const download = urlParams.get('download');
    const categories = urlParams.get('categories');
    const description = urlParams.get('description');

    const largeImage = document.getElementById('largeImage');
    const imageDescription = document.getElementById('imageDescription');
    const downloadBtn = document.getElementById('downloadBtn');

    largeImage.src = src;
    imageDescription.textContent = description;
    downloadBtn.addEventListener('click', () => {
        window.location.href = download;
    });

    // Load categories
    const categoriesContainer = document.getElementById('categories');
    categories.split(',').forEach(category => {
        const categoryElement = document.createElement('span');
        categoryElement.className = 'category';
        categoryElement.textContent = category;
        categoriesContainer.appendChild(categoryElement);
    });
});