const a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen ']
const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

const regex = /^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/
const getToTwenty = (n) => a[Number(n)]
const get20Plus = (n) => b[n[0]] + ' ' + a[n[1]]
module.exports = function toReadable(number) {
    const num = number
    if (num === 0) return 'zero'
    const numStr = num.toString()
    const [, n1, n2, n3, n4, n5] = ('000000000' + numStr).substr(-9).match(regex)
    let str = ''
    str += n1 != 0 ? (getToTwenty(n1) || get20Plus(n1)) + 'crore ' : ''
    str += n2 != 0 ? (getToTwenty(n2) || get20Plus(n2)) + 'lakh ' : ''
    str += n3 != 0 ? (getToTwenty(n3) || get20Plus(n3)) + 'thousand ' : ''
    str += n4 != 0 ? getToTwenty(n4) + 'hundred ' : ''
    str += n5 != 0 && str != '' ? '' : ''
    str += n5 != 0 ? (getToTwenty(n5) || get20Plus(n5)) : ''
    return str.trim()
}





