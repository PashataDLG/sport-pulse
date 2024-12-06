export const getDates = (): { todayDate: string, next7DaysDate: string } => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const todayDate = `${year}-${month}-${day}`;

    const next7Days = new Date(today);
    next7Days.setDate(today.getDate() + 7);

    const nextYear = next7Days.getFullYear();
    const nextMonth = String(next7Days.getMonth() + 1).padStart(2, '0');
    const nextDay = String(next7Days.getDate()).padStart(2, '0');

    const next7DaysDate = `${nextYear}-${nextMonth}-${nextDay}`;

    return {todayDate, next7DaysDate};
};