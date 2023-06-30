import { isDate } from "util/types";

export const generateSnowFlakes = () => {
    const epoch = 1420070400000 //Discord Epoch Thursday 1 January 2015 00:00:00
    const snowflakes = Number((BigInt(Date.now() - epoch) << 22n) + 1n);
    return snowflakes;
}

export const snowFlakesToDate = (snowflakes: number) => {
    const epoch = 1420070400000 //Discord Epoch Thursday 1 January 2015 00:00:00
    const milliseconds = BigInt(snowflakes) >> 22n;
    const date = new Date(Number(milliseconds) + epoch)
    return date;
}

export const dateToSnowFlakes = (date: number | Date) => {
    const epoch = 1420070400000 //Discord Epoch Thursday 1 January 2015 00:00:00

    if (isDate(date)) {
        const milliseconds = BigInt(date.getTime() - epoch);
        const snowflakes = Number(milliseconds << 22n);
        return snowflakes;
    } else if (typeof date === "number") {
        const milliseconds = BigInt(date - epoch);
        const snowflakes = Number(milliseconds << 22n);
        return snowflakes;
    }
}