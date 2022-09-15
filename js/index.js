let backgroundImg = new Image() // 创建一个背景图片对象
backgroundImg.src = "./images/level-background-0.jpg"

let gouziImg = new Image() // 创建一个钩子图片对象
gouziImg.src = "./images/gouzi.png"

let personImg = new Image() // 创建一个人物图片对象
personImg.src = "./images/miner-sheet-1.png"

let n = 0
let flag = 1 // 保存钩子的摇摆状态
let flag_blackups // 暂停时保存钩子的状态
function angle(n) {
    return n * Math.PI / 180 // 初始化角度
}


window.addEventListener("load", eventWindowLoaded, false)



function eventWindowLoaded() {
    theCanvas = document.getElementById("canvas")
    context = theCanvas.getContext("2d")
    dingshiqi()
}

function dingshiqi() {
    window.setTimeout(dingshiqi, 1000 / 60)
    if(n >= 150 ) {
        flag = 1
    }else if(n <= 0) {
        flag = 2
    }
    if(flag == 1) {
        n--
    } else if(flag == 2){
        n++
    } else if(flag == 3) {
        
    }
    canvasApp()
}

function canvasApp() {
    drawScreen()
}


function drawScreen() {
    context.drawImage(backgroundImg, 0, 0, backgroundImg.width, backgroundImg.height, 
                                     0, 0, theCanvas.width, theCanvas.height) // 渲染背景

    let personWidth = 140 // 特指人物图片的宽度
    let personHeight = 220 // 特指人物图片的长度
    context.drawImage(personImg, 0, 0, personWidth, personHeight,
        (theCanvas.width - personWidth) / 2, 0, personWidth, personHeight) // 渲染人物

    // context.setTransform(1, 0, 0, 1, 0, 0)
    // context.rotate(45 * Math.PI / 180)
    // context.drawImage(gouziImg, 0, 0, gouziImg.width, gouziImg.height,
    //     0, 0, gouziImg.width, gouziImg.height)


    context.save() // 保存初始状态
    context.translate(theCanvas.width / 2, 180)
    context.rotate(angle(n))
    context.drawImage(gouziImg, 0, 0, gouziImg.width, gouziImg.height,
        50, 0, gouziImg.width, gouziImg.height) // 渲染钩子
    context.restore() // 恢复初始状态

}

window.addEventListener("keydown", keydownFun, false)

function keydownFun(e) {
    if(e.key == " ") {
        if(flag != 3){
            flag_blackups = flag
            flag = 3
            e.preventDefault()
            return
        }
        flag = flag_blackups
        e.preventDefault()
    }
}