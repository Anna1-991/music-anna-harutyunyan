import { likedMusic } from "../../../index.js";
import { fetchMusicData, fetchToken } from "../../helpers/api.js";

export const Search = () => {
    const inputSearch = document.createElement("input");
    const searchContainer = document.createElement("div");
    const cardContainer = document.createElement("div");
    inputSearch.placeholder = "Search Music";
    cardContainer.className = "card_container";
    searchContainer.className = "search_container";
    searchContainer.append(inputSearch, cardContainer);
    //provides search, when input value is false or empty it log the message, 
    //else get the data and create the music cards
    const handleSearch = async () => {
        const searchValue = inputSearch.value;
        if (!searchValue || searchValue === "") {
            console.log("Please enter a search term.");
            return null; // Exit function if search value is empty
        } else {
            try {
                //import tocken and musicdata
                const token = await fetchToken();
                const tracks = await fetchMusicData(searchValue, 0, token);
                cardContainer.innerHTML = ""; // Clear previous search results
                tracks
                    .map((track) => createCard(track))//create card for each track
                    .filter((card) => card !== null) // filter cards with null
                    .forEach((card) => cardContainer.appendChild(card));//each card apend to cardcontainer
            } catch (error) {
                console.log("Request failed:", error);
            }
        }
    };
    //shows reault of serch when press enter key
    const handleEnterKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };
    //clear card container if input value is empty
    const handleInputChange = () => {
        if (inputSearch.value === "") {
            cardContainer.innerHTML = ""; 
        }
    };
    //function that create cards
    const createCard = (track) => {
        if (track.preview_url === null) {
            return null; // don't show cards if track url is empty
        }
        //create elements
        const card = document.createElement("div");
        const image = document.createElement("img");
        const textContainer = document.createElement("div");
        const artistName = document.createElement("h3");
        const trackName = document.createElement("p");
        const releaseDate = document.createElement("span");
        const audio = document.createElement("div");
        const audioTrack = document.createElement("audio");
        const likeButton = document.createElement("button");
        //take info from API 
        card.className = "card";
        image.src = track.album.images[0].url;
        artistName.innerText = track.album.artists[0].name;
        trackName.innerText = track.name;
        releaseDate.innerText = `Release Date: ${track.album.release_date} `;
        audioTrack.src = track.preview_url;
        audioTrack.controls = true;
        likeButton.innerHTML = `Like <i class="fa-solid fa-heart fa-beat-fade"></i>`;
        likeButton.addEventListener("click", () => handleLike(track));
        //append elements
        audio.append(audioTrack, likeButton);
        card.append(image, textContainer, audio);
        textContainer.append(artistName, trackName, releaseDate);

        return card;
    };

    const handleLike = (track) => {
        const likedCard = createCard(track); // create a card for the liked track
        const removeButton = document.createElement('button');
        removeButton.innerHTML = 'Remove from playlist'
        likedCard.append(removeButton);
        removeButton.addEventListener('click', () => {
            likedCard.remove(); // remove the clicked card from the DOM
        });
        likedMusic.appendChild(likedCard); // append the liked card to the likedMusicContainer
    };
    //add eventlistner to input
    inputSearch.addEventListener("keypress", handleEnterKeyPress);
    inputSearch.addEventListener("input", handleInputChange);

    return searchContainer; // return searchContainer
};
