export const getTodayDate = (): string => {
    const today = new Date();

    const year: number = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDay()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};