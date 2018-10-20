module.exports = (list) => {
    if (!(list instanceof Array)) throw new Error('Invalid list')
    return list[
        Math.round(Math.random()*list.length)-1
    ]
}