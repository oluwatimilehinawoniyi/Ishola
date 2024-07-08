type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	const formater = new Intl.DateTimeFormat(locales, { dateStyle });

	return formater.format(new Date(date));
}
