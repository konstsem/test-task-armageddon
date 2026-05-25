export interface apiNasaAsteroidDto {
    id: string;
    name: string;
    close_approach_data: {
        close_approach_date: string;
        miss_distance: { kilometers: string; lunar: string };
        estimated_diameter: {
            meters: { estimated_diameter_max: number; estimated_diameter_min: number };
        };
        is_potentially_hazardous_asteroid: boolean;
    }[];
}

export type AsteroidItem = {
    id: string;
    name: string;
    close_approach_date: string;
    close_approach_distance: {
        kilometers: string;
        lunar: string;
    };
    diameter: number;
    is_potentially_hazardous_asteroid: boolean;
};
