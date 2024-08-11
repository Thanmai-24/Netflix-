let slideIndexes = {
    popular: 0,
    kdrama: 0
};

function moveSlide(direction, section) {
    const movieGrid = document.querySelector(`.movie-grid.${section}`);
    const movieItems = movieGrid.querySelectorAll('.movie-item');
    const itemWidth = movieItems[0].offsetWidth + 16; // Adding 16px margin

    slideIndexes[section] += direction;
    if (slideIndexes[section] < 0) {
        slideIndexes[section] = 0;
    } else if (slideIndexes[section] > movieItems.length - Math.floor(movieGrid.offsetWidth / itemWidth)) {
        slideIndexes[section] = movieItems.length - Math.floor(movieGrid.offsetWidth / itemWidth);
    }

    movieGrid.style.transform = `translateX(${-slideIndexes[section] * itemWidth}px)`;
}
