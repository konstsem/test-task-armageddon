import { apiNasaAsteroidDto, AsteroidItem } from "../types";

export const normalizeItems = (items: apiNasaAsteroidDto[]): AsteroidItem[] => {
    try {
        const normalized = items.map((item) => {
            const close_approach_data = item.close_approach_data[0];
            const {
                close_approach_date,
                miss_distance: { kilometers: distanceInKilometers, lunar: distanceInLunar },
                estimated_diameter: {
                    meters: { estimated_diameter_max, estimated_diameter_min },
                },
                is_potentially_hazardous_asteroid,
            } = close_approach_data;

            return {
                id: item.id,
                name: item.name,
                close_approach_date,
                close_approach_distance: {
                    kilometers: distanceInKilometers,
                    lunar: distanceInLunar,
                },
                diameter: (estimated_diameter_max + estimated_diameter_min) / 2,
                is_potentially_hazardous_asteroid,
            };
        });
        return normalized;
    } catch {
        console.log("Data normalizated error.");
        return [];
    }
};
