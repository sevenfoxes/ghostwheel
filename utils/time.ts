import * as dateFns from 'date-fns/fp';

export const time = {
  ...dateFns,
  formatUs: dateFns.format('MMMM do, yyyy')
};
