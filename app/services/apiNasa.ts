import axios from "axios";

const API_URL = "https://api.nasa.gov/neo/rest/v1/feed";
const API_KEY = "DEMO_KEY";

export const loadItems = async (start_date?: string) => {
    const params = new URLSearchParams({ ...(start_date ? { start_date } : {}), api_key: API_KEY });
    const response = await axios.get(API_URL, { params });
    return response.data.near_earth_objects;
};
