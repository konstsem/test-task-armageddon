export const getFormattedKilometers = (value: string) => {
    // TODO fix locale
    return new Intl.NumberFormat("ru-RU").format(Number(value));
};
