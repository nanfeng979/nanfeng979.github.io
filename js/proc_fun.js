// 渲染背景函数 // 不可移动
function render_obj_with_background() {
    let obj_self_data = [0, 0, backgroundImg.width, backgroundImg.height]
    let obj_render_data = [0, 0, canvasWidth, canvasHeight]
    render_obj(backgroundImg, obj_self_data, obj_render_data) // 渲染背景
}

// 渲染人物函数 // 可以移动/可以主动左右移动
function render_man(x_distance) {
    let personWidth = 140 // 特指人物图片的宽度
    let personHeight = 220 // 特指人物图片的长度
    context.drawImage(personImg, 0, 0, personWidth, personHeight,
        (canvasWidth - personWidth) / 2 + x_distance, 0, personWidth, personHeight) // 渲染人物
}

// 渲染石头函数 // 可以移动/只能被动上下移动
function render_stone(init_position_x, init_position_y, distance_x, distance_y) {
    let position_x = init_position_x + distance_x // obj的最新x轴位置
    let position_y = init_position_y + distance_y // obj的最新y轴位置
    // if(y_distance <= -340) {
    //     console.log("已抵达")
    //     is_render_stone = false
    //     hook_is_extend = false // 恢复钩子可以运行的状态
    //     return stone_y
    // }
    let self_data = [0, 0, stoneImg.width, stoneImg.height] // obj自己的裁剪位置与大小
    let render_data = [position_x, position_y, stoneImg.width, stoneImg.height] // obj要渲染的位置与大小
    render_obj(stoneImg, self_data, render_data) // 渲染obj
    render_obj_border("red", render_data) // 渲染obj边框
    return {img: stoneImg, x: position_x, y: position_y,
            w: hookImg.width, h: hookImg.height}
}

// 渲染钩子函数 // 可以移动/可以自主左右上下移动
// param: {init_position_x:number, init_position_y:number, distance_x:number, distance_y:number}
// init_position_x: 对象将要渲染的初始x位置
// init_position_x: 对象将要渲染的初始y位置
// distance_x: 对象相对于初始位置的x轴移动距离
// distance_y: 对象相对于初始位置的y轴移动距离
// return: {}
function render_obj_with_hook(init_position_x, init_position_y, distance_x, distance_y) {
    if(distance_y == 0) { // 钩子延伸距离为0时，钩子可以延伸
        g_hook_is_extending = false
    }
    let position_x = init_position_x + distance_x // obj的最新x轴位置
    let position_y = init_position_y + distance_y // obj的最新y轴位置
    let self_data = [0, 0, hookImg.width, hookImg.height] // obj自己的裁剪位置与大小
    let render_data = [position_x, position_y,  hookImg.width, hookImg.height] // obj要渲染的位置与大小
    render_obj(hookImg, self_data, render_data) // 渲染obj
    render_obj_border("red", render_data) // 渲染obj边框
    all_obj["hook"] = {x:position_x, y:position_y, w:hookImg.width, h:hookImg.height} // 讲obj渲染位置与大小数据放到全局对象中
    return {x:position_x + distance_x, y:position_y + distance_y, w:hookImg.width, h:hookImg.height}
}
