const dateFormatter = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate: string = new Date(date).toLocaleDateString('en-US', options);
    const [year, month, day] = formattedDate.split('/');
    return `${year}.${month}.${day}`;
};

export default dateFormatter;