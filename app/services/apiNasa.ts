const API_URL = "https://api.nasa.gov/neo/rest/v1/feed";
const API_KEY = "DEMO_KEY";

class apiNasa {
    async load(startDate: string, endDate: string) {
        const params = new URLSearchParams({
            api_key: API_KEY,
            start_date: startDate,
            end_date: endDate,
        });
        const url = API_URL + "?" + params.toString();
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();

        if (!data?.near_earth_objects) {
            throw new Error("Invalid API response");
        }

        return data.near_earth_objects;
    }
}

const serviceInstance = new apiNasa();

export default serviceInstance;
