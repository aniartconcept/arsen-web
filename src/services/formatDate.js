import moment from 'moment';
import 'moment/locale/hy-am';
import 'moment/locale/ru';
import i18n from 'locale/i18n';

export const formatDate = (date, format = 'MMMM DD. YYYY') => {
  const formated = moment(date).locale(i18n.language === 'hy' ? 'hy-am' : i18n.language === 'ru' ? 'ru' : 'en');
  return formated.format(format);
};
