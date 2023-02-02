import { default as moment } from 'moment'

export default function (date: string) {
    const m = moment(date);
    date = `${m.format('YYYY')}/${m.format('MM')}/${m.format('DD')}/`
    return date
}