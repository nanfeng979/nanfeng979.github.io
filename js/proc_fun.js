// 渲染背景函数
function render_background() {
    context.drawImage(backgroundImg, 0, 0, backgroundImg.width, backgroundImg.height, 
        0, 0, canvasWidth, canvasHeight) // 渲染背景
}

// 渲染人物函数
function render_man() {
    let personWidth = 140 // 特指人物图片的宽度
    let personHeight = 220 // 特指人物图片的长度
    context.drawImage(personImg, 0, 0, personWidth, personHeight,
        (canvasWidth - personWidth) / 2, 0, personWidth, personHeight) // 渲染人物
}

// 渲染石头函数
function render_stone() {
    let stoneWidth = 100 // 特指人物图片的宽度
    let stoneHeight = 90 // 特指人物图片的长度
    context.drawImage(stoneImg, 0, 860, stoneWidth, stoneHeight,
        (canvasWidth - stoneWidth) / 2, 600, stoneWidth, stoneHeight) // 渲染石头
}

// 渲染钩子函数
function render_hook(hook_distance) {
    context.save() // 保存初始状态
    context.translate(canvasWidth / 2, 180)
    // context.rotate(angle(Angle_between_man_and_hook))
    context.rotate(angle(90))
    context.drawImage(gouziImg, 0, 0, gouziImg.width, gouziImg.height,
        hook_distance, 0, gouziImg.width, gouziImg.height) // 渲染钩子
    context.restore() // 恢复初始状态
}

// 控制钩子角度的函数
function control_gouzi_angle() {
    // 钩子角度小于等于0度时
    if(Angle_between_man_and_hook <= 0 ) {
        // 设置钩子的运动方向状态为"顺时针", 向着顺时针方向摆动
        hook_direction = "顺时针"
    }
    // 钩子角度大于等于150度时
    else if(Angle_between_man_and_hook >= 150) {
        // 设置钩子的运动方向状态为"逆时针", 向着逆时针方向摆动
        hook_direction = "逆时针"
    }

    // 判断钩子的运动方向，并持续运动
    if(hook_direction == "顺时针") {
        Angle_between_man_and_hook++
    }
    else if(hook_direction == "逆时针") {
        Angle_between_man_and_hook--
    }
    else if(hook_direction == "暂停") {
    }
}

// // 钩子伸出缩回函数
// function hook_extend() {
//     context.save() // 保存初始状态
//     context.translate(canvasWidth / 2, 180)
//     context.rotate(angle(Angle_between_man_and_hook))
//     context.drawImage(gouziImg, 0, 0, gouziImg.width, gouziImg.height,
//         hook_distance, 0, gouziImg.width, gouziImg.height) // 渲染钩子
//     hook_distance += hook_extend_speed
//     context.restore() // 恢复初始状态
// }