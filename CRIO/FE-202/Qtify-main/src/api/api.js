export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

const fetchData = async (url, log = false) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (log) {
            console.log(data);
        }
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};

// Function to get the Top-albums data from backend API
export const fetchTopAlbums = () => fetchData(`${BACKEND_ENDPOINT}/albums/top`);

// Function to get the New-albums data from backend API
export const fetchNewAlbums = () => fetchData(`${BACKEND_ENDPOINT}/albums/new`, true);

// Function to get the Songs data from backend API
export const fetchSongs = () => fetchData(`${BACKEND_ENDPOINT}/songs`);
