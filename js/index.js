// 加载页面后执行
window.addEventListener("load", eventWindowLoaded, false)
// 监听键盘按下事件
window.addEventListener("keydown", keydownFun, false)

function eventWindowLoaded() {
    theCanvas = document.getElementById("canvas")
    context = theCanvas.getContext("2d")
    init_var()
    timer()
}

function timer() {
    window.setTimeout(timer, 1000 / fps) // 1秒60帧执行
    canvasApp() // 绘图
}

// 绘图相关函数
function canvasApp() {
    // control_gouzi_angle() // 控制钩子角度
    drawScreen()
}


function drawScreen() {
    render_background() // 渲染背景
    render_man(left_right_distance) // 渲染人物

    stone_positon_y = render_stone(up_distance) // 渲染石头
    hook_position_y = render_hook(left_right_distance, up_down_distance) // 渲染钩子
    //
}