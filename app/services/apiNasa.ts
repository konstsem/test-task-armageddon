const API_URL = "https://api.nasa.gov/neo/rest/v1/feed";
const API_KEY = "DEMO_KEY";

class apiNasa {
    async load(start_date?: string) {
        const params = new URLSearchParams({
            api_key: API_KEY,
            ...(start_date ? { start_date } : {}),
        });
        const url = API_URL + "?" + params.toString();
        const response = await fetch(url);
        const data = await response.json();
        return data.near_earth_objects;
    }
}

const serviceInstance = new apiNasa();

export default serviceInstance;
