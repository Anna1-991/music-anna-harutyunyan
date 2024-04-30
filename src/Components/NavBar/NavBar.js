import { likedMusic } from "../../../index.js";

export function NavBar() {
    //creates html elements using DOM manipulatuions
    const navBar = document.createElement("nav");
    const button = document.createElement("button");
    //append each element to each other
    navBar.append(button);
    
    button.innerHTML = `<i class="fa-solid fa-heart fa-beat-fade"></i> My Playlist`;

    button.addEventListener('click', () => {
        if (likedMusic.style.display === 'block') {
            likedMusic.style.display = 'none';
        }else{
            likedMusic.style = `display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            padding: 100px 0 20px 0;`
            likedMusic.classList.add('fade_in');
        }
    });
    
    navBar.className = "nav_container";
    return navBar;
}
