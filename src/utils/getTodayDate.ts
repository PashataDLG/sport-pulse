export const getTodayDate= () : {apiDate: string, displayDate: string} => {
    const today = new Date();

    const year: number = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const apiDate = `${year}-${month}-${day}`;
    const displayDate = `${day}.${month}.${String(year).slice(-2)}`;

    return { apiDate, displayDate };
};