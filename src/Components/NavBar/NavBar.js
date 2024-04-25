import { likedMusic } from "../../../index.js";
// import { fetchMusicData, fetchToken } from "../../helpers/api.js";

export function NavBar() {
    //creates html elements using DOM manipulatuions
    const navBar = document.createElement("nav");
    const formContainer = document.createElement("form");
    const inputSearch = document.createElement("input");
    const button = document.createElement("button");
    //append each element to each other
    navBar.append(formContainer);
    formContainer.append(button);
    formContainer.append(inputSearch);

    inputSearch.placeholder = "Search music";
    button.innerHTML = `<i class="fa-solid fa-heart fa-beat-fade"></i> My Playlist`;

    button.addEventListener('click', () => {
        likedMusic.style.display = 'block'
    });
    
    formContainer.className = "form_container";
    // inputSearch.addEventListener("input", handleSearch);
    return navBar;
}
