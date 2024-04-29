export const LikedMusic = () => {
    const likedMusicContainer = document.createElement('div');
    const closeButton = document.createElement('button');
    likedMusicContainer.append(closeButton);

    closeButton.innerHTML = `<i class="fa-solid fa-x"></i>`;
    likedMusicContainer.className = 'liked_container';

    closeButton.addEventListener('click', () => {
        likedMusicContainer.classList.add('fade_out');
        likedMusicContainer.style.display = 'none';
    });
    
    return likedMusicContainer
}