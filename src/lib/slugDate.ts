import { default as moment } from 'moment'

export default function (pubDate: string) {
    const m = moment(pubDate);
    pubDate = `${m.format('YYYY')}/${m.format('MM')}/${m.format('DD')}/`
    return pubDate
}