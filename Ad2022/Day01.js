
// 131 points

function wrapping(gifts) {
  return gifts.map(gift => {
    let giftWrap = `\n*${gift}*\n`
    let wrap = "*".repeat(gift.length + 2)
    return `${wrap}\n*${giftWrap}*\n${wrap}`
  })
}

/*
  wrapping = (gifts) => gifts.map(gift => {
    let giftWrap = `\n*${gift}*\n`
    let wrap = "*".repeat(gift.length + 2)
    return `${wrap}\n*${giftWrap}*\n${wrap}`
  })
*/

const gifts = ['book', 'game', 'socks', "midu"]
const wrapped = wrapping(gifts)