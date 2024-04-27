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

    if (likedMusicContainer.children === 0) {
        const noMusicText = document.createElement('p');
        noMusicText.innerHTML = 'No music';
        noMusicText.style.color = `rgba(240, 89, 185, 0.632)`
        likedMusicContainer.appendChild(noMusicText);
    }

    return likedMusicContainer
}