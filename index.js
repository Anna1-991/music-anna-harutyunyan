import { LikedMusic } from "./src/Components/LikedMusic/LikedMusic.js";
// import { MusicCard } from "./src/Components/MusicCard/MusicCard.js";
import { NavBar } from "./src/Components/NavBar/NavBar.js";
import { Search } from "./src/Components/Search/Search.js";

const mainContainer = document.getElementById('root');
const navBarContainer = NavBar();
const searchMusic = Search();
export const likedMusic = LikedMusic();

// Append the musicCardContainer to an existing element in the DOM
mainContainer.append(navBarContainer);
mainContainer.append(searchMusic);
mainContainer.append(likedMusic);