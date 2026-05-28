import { AsteroidItem, apiNasaAsteroidDto, apiNasaAsteroidsByDateDto } from "../types";

export const getNormalizedList = (
    elementsByDate: apiNasaAsteroidsByDateDto
): { byId: Record<string, AsteroidItem>; allIds: string[] } => {
    if (!elementsByDate) {
        return { byId: {}, allIds: [] };
    }

    try {
        const byId: Record<string, AsteroidItem> = {};
        const allIds: string[] = [];

        const items: (apiNasaAsteroidDto & { data: string })[] = Object.entries(elementsByDate)
            .sort(([aDate], [bDate]) => aDate.localeCompare(bDate))
            .map(([data, items]) => items.map((item) => ({ ...item, data })))
            .flat();

        items.forEach((item) => {
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

            byId[item.id] = {
                id: item.id,
                name: item.name,
                link: item.nasa_jpl_url,
                close_approach_date,
                close_approach_distance: {
                    kilometers: distanceInKilometers,
                    lunar: distanceInLunar,
                },
                diameter: Math.round((estimated_diameter_max + estimated_diameter_min) / 2),
                is_potentially_hazardous_asteroid,
            };
            allIds.push(item.id);
        });
        return { byId, allIds };
    } catch {
        throw new Error("Data normalizated error.");
    }
};
