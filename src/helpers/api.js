//function fetches music data from the Spotify API based on a keyword search,
// result offset, and authentication token.
export const fetchMusicData = async (keyword, resultOffset, token) => {
    try {
        //GET request to Spotify API endpoint
        const response = await fetch(
            `https://api.spotify.com/v1/search?q=${keyword}&type=track&offset=${resultOffset}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        //checks if the response is succsecfull
        if (!response.ok) {
            throw new Error("Failed to fetch music data");
        }
        //parse the response data to json format
        const jsonData = await response.json();
        console.log(jsonData.tracks.items);
        // return the fetched tracks
        return jsonData.tracks.items; 
    } catch (error) {
        //if there is an error during the fetch or parsing, throw an error
        throw new Error(error.message);
    }
};
//fetches an access token from the Spotify API using client credentials flow.
export const fetchToken = async () => {
    try {
        //POST request to the Spotify API token endpoint
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            //include client credentials in the request body
            body: "grant_type=client_credentials&client_id=a77073181b7d48eb90003e3bb94ff88a&client_secret=68790982a0554d1a83427e061e371507",
        });

        if (!response.ok) {
            throw new Error("Failed to fetch token");
        }
        const data = await response.json();
        //return the access token from the response
        return data.access_token; 
    } catch (error) {
        throw new Error(error.message);
    }
};


