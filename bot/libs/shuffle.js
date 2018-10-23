module.exports = (list) => {
    if (!(list instanceof Array)) throw new Error('Invalid list')
    let listLength = list.length;
    for (let i = 0; i < listLength*2; i++) {
        let random = Math.floor(Math.random()*listLength)
        let val = list[random]
        list[random] = list[0]
        list[0] = val
    }
    return list
}