import { fetchMusicData, fetchToken } from "../../helpers/api.js";

export function MusicCard() {
    const cardContainer = document.createElement("div");
    const fetchDataRender = async () => {
        try {
            // waits for the fetchToken() function to complete and return a value.
            const token = await fetchToken();
            // fetch music tracks that belong to the "rock" starting from the beginning 0 index
            const tracks = await fetchMusicData('rock', 0, token);
            // iterates over each item in the tracks array.
            console.log(tracks);
            tracks.forEach((track) => {
                const card = createCard(track); //creates a new card based on the track data
                cardContainer.appendChild(card); //appends card to the carsContainer
            });
        } catch (error) {
            console.error('Error fetching genres:', error.message)
        }
    };

    const createCard = (track) => {
        const card = document.createElement("div");
        //cheks if the track's url is valid or not
        if (track.preview_url !== null) {
            const image = document.createElement("img");
            const textContainer = document.createElement("div");
            const artistName = document.createElement("h3");
            const trackName = document.createElement("p");
            const releaseDate = document.createElement("span");
            const audio = document.createElement('div');
            const audioTrack = document.createElement("audio");
            const likeButton = document.createElement("button");

            cardContainer.className = "card_container";
            card.className = "card";
            image.src = track.album.images[2].url;
            artistName.innerText = track.album.artists[0].name;
            trackName.innerText = track.name;
            releaseDate.innerText = `Release Date: ${track.album.release_date} `;

            audioTrack.src = track.preview_url;
            audioTrack.controls = true;

            likeButton.innerHTML = `Like <i class="fa-solid fa-heart fa-beat-fade"></i>`;
            likeButton.addEventListener("click", () => handleLike(track));

            card.append(image, textContainer, audio);
            textContainer.append(artistName);
            textContainer.append(trackName);
            textContainer.append(releaseDate)
            audio.append(audioTrack, likeButton);
        } else {
            card.style.display = "none";
        }
        return card;
    };
    fetchDataRender();

    return cardContainer;
}
