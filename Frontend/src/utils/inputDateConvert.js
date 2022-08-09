export default function (date){
    
    let splitDate = (date.split('-')).reverse()
    splitDate[1] = numberToMonth(parseInt(splitDate[1]))
    let converted = splitDate.join('/')

    return converted
}

const numberToMonth = (month) => {
    switch (month) {
        case 0:
            return 'Jan'
        case 1:
            return 'Fev'
        case 2:
            return 'Mar'
        case 3:
            return 'Abr'
        case 4:
            return 'Mai'
        case 5:
            return 'Jun'
        case 6:
            return 'Jul'
        case 7:
            return 'Ago'
        case 8:
            return 'Set'
        case 9:
            return 'Out'
        case 10:
            return 'Nov'
        case 11:
            return 'Dez'
    
        default:
            return 'Err'
            break;
    }
}