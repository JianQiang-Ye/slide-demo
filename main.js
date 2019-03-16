init()
var n = 1
setInterval(function () {
    makeLeave(getImage(n)).one('transitionend', (e) => {       
        // 这里的e.currentTarget指的是当前的图片1
        makeEnter($(e.currentTarget))
    })
    makeCurrent(getImage(n+1))
    n += 1
}, 3000)

// 获取第n张图片
function getImage(n){
    return $(`.images > img:nth-child(${x(n)})`)
}
// 获取1 2 3
function x(n) {
    n = n % 3
    if (n === 0) {
        n = 3
    }
    return n
}
// 初始化，给第一个加current，其余加enter
function init() {
    var n = 1
    $(`.images > img:nth-child(${n})`).addClass('current').siblings().addClass('enter')
}
function makeLeave(node){
    node.removeClass('current enter').addClass('leave')
    return node
}
function makeCurrent(node){
    node.removeClass('leave enter').addClass('current')
    return node
}
function makeEnter(node){
    node.removeClass('current leave').addClass('enter')
    return node
}