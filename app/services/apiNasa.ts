import axios from "axios";

const API_URL = "https://api.nasa.gov/neo/rest/v1/feed";
const API_KEY = "DEMO_KEY";

export const loadItems = async (start_date?: string) => {
    return [
        {
            id: "2465633",
            name: "(2021 FQ)",
            close_approach_data: [
                {
                    close_approach_date: "2023-09-12",
                    miss_distance: {
                        kilometers: "5652475",
                        lunar: "14.7",
                    },
                    estimated_diameter: {
                        meters: {
                            estimated_diameter_min: 80,
                            estimated_diameter_max: 90,
                        },
                    },
                    is_potentially_hazardous_asteroid: true,
                },
            ],
        },
        {
            id: "3529871",
            name: "(2019 SC8)",
            close_approach_data: [
                {
                    close_approach_date: "2023-10-03",
                    miss_distance: {
                        kilometers: "12000000",
                        lunar: "31.2",
                    },
                    estimated_diameter: {
                        meters: {
                            estimated_diameter_min: 40,
                            estimated_diameter_max: 55,
                        },
                    },
                    is_potentially_hazardous_asteroid: false,
                },
            ],
        },
        {
            id: "4103295",
            name: "(2020 XY)",
            close_approach_data: [
                {
                    close_approach_date: "2023-11-20",
                    miss_distance: {
                        kilometers: "8900000",
                        lunar: "23.1",
                    },
                    estimated_diameter: {
                        meters: {
                            estimated_diameter_min: 120,
                            estimated_diameter_max: 150,
                        },
                    },
                    is_potentially_hazardous_asteroid: true,
                },
            ],
        },
    ];
    const params = new URLSearchParams({ ...(start_date ? { start_date } : {}), api_key: API_KEY });
    const response = await axios.get(API_URL, { params });
    return response.data.near_earth_objects;
};
