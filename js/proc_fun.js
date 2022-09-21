// 渲染背景函数
function render_background() {
    context.drawImage(backgroundImg, 0, 0, backgroundImg.width, backgroundImg.height, 
        0, 0, canvasWidth, canvasHeight) // 渲染背景
}

// 渲染人物函数
function render_man(x_distance) {
    let personWidth = 140 // 特指人物图片的宽度
    let personHeight = 220 // 特指人物图片的长度
    context.drawImage(personImg, 0, 0, personWidth, personHeight,
        (canvasWidth - personWidth) / 2 + x_distance, 0, personWidth, personHeight) // 渲染人物
}

// 渲染石头函数
function render_stone(y_distance) {
    let stoneWidth = 100 // 特指人物图片的宽度
    let stoneHeight = 90 // 特指人物图片的长度
    let stone_y = 600
    let stone_shape = [(canvasWidth - stoneWidth) / 2, stone_y + y_distance, stoneWidth, stoneHeight]
    context.drawImage(stoneImg, 0, 860, stoneWidth, stoneHeight,
        ...stone_shape) // 渲染石头
    // context.strokeStyle = "red"
    // context.strokeRect(...stone_shape)
    return stone_y
}

// 渲染钩子函数
function render_hook(x_distance, y_distance) {
    let hook_x = (canvasWidth - gouziImg.width / 6) / 2 + x_distance
    let hook_y_init = 200
    let hook_y = hook_y_init + y_distance
    let hook_shape = [hook_x, hook_y, gouziImg.width / 6, gouziImg.height / 6]
    context.drawImage(gouziImg, 0, 0, gouziImg.width, gouziImg.height,
        ...hook_shape) // 渲染钩子
    // context.strokeStyle = "red"
    // context.strokeRect(...hook_shape)
    return hook_y + gouziImg.height / 6
}
