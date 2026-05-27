import { apiNasaAsteroidDto, AsteroidItem, apiNasaAsteroidsByDateDto } from "../types";

export const getNormalizedList = (elementsByDate: apiNasaAsteroidsByDateDto): AsteroidItem[] => {
    if (!elementsByDate) {
        return [];
    }

    try {
        const items: (apiNasaAsteroidDto & { data: string })[] = Object.entries(elementsByDate)
            .sort(([aDate], [bDate]) => aDate.localeCompare(bDate))
            .map(([data, items]) => items.map((item) => ({ ...item, data })))
            .flat();

        const normalizedList = items.map((item) => {
            const {
                estimated_diameter: {
                    meters: { estimated_diameter_max, estimated_diameter_min },
                },
                is_potentially_hazardous_asteroid,
            } = item;
            const close_approach_data =
                item.close_approach_data.find((data) => data.close_approach_date === item.data) ??
                item.close_approach_data[0];
            const {
                close_approach_date,
                miss_distance: { kilometers: distanceInKilometers, lunar: distanceInLunar },
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
        return normalizedList;
    } catch {
        throw new Error("Data normalizated error.");
    }
};
