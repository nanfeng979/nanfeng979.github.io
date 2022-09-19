// 渲染背景函数
function render_background() {
    context.drawImage(backgroundImg, 0, 0, backgroundImg.width, backgroundImg.height, 
        0, 0, theCanvas.width, theCanvas.height) // 渲染背景
}

// 渲染人物函数
function render_man() {
    personWidth = 140 // 特指人物图片的宽度
    personHeight = 220 // 特指人物图片的长度
    context.drawImage(personImg, 0, 0, personWidth, personHeight,
        (theCanvas.width - personWidth) / 2, 0, personWidth, personHeight) // 渲染人物
}

// 渲染钩子函数
function render_hook() {
    context.save() // 保存初始状态
    context.translate(theCanvas.width / 2, 180)
    context.rotate(angle(Angle_between_man_and_hook))
    context.drawImage(gouziImg, 0, 0, gouziImg.width, gouziImg.height,
        50, 0, gouziImg.width, gouziImg.height) // 渲染钩子
    context.restore() // 恢复初始状态
}