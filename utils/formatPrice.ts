export const formatAsDollars = n => (n / 100).toFixed(2);
export const formatPrice = n => `$${formatAsDollars(n).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
