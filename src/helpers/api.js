export const fetchMusicData = async (keyword, resultOffset, token) => {
    try {
        const response = await fetch(
            `https://api.spotify.com/v1/search?q=${keyword}&type=track&offset=${resultOffset}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch music data");
        }
        const jsonData = await response.json();
        console.log(jsonData.tracks.items);
        return jsonData.tracks.items; // Return the fetched tracks
    } catch (error) {
        throw new Error(error.message);
    }
};

export const fetchToken = async () => {
    try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "grant_type=client_credentials&client_id=a77073181b7d48eb90003e3bb94ff88a&client_secret=68790982a0554d1a83427e061e371507",
        });

        if (!response.ok) {
            throw new Error("Failed to fetch token");
        }
        const data = await response.json();

        return data.access_token; // Return the access token
    } catch (error) {
        throw new Error(error.message);
    }
};


