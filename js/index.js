// 加载页面后执行
window.addEventListener("load", eventWindowLoaded, false)
// 监听键盘按下事件
window.addEventListener("keydown", keydownFun, false)

function eventWindowLoaded() {
    theCanvas = document.getElementById("canvas")
    context = theCanvas.getContext("2d")
    // 进度条
    window.setTimeout(() => {
        document.getElementById("game_cover").style.display = "none";
        window.setTimeout(() => {
            document.getElementById("game_start_loading").style.display = "none";
        }, 3000)
    }, 1000)

    init_var() // 初始化变量
    canvasApp() // 绘图相关函数
}

// function timer() {
//     window.setTimeout(timer, 1000 / fps) // 控制每秒运行频率
//     canvasApp() // 绘图
// }

// 绘图相关函数
function canvasApp() {
    window.setTimeout(canvasApp, 1000 / fps) // 控制每秒运行频率
    drawScreen() // 渲染图面函数
}


function drawScreen() {
    render_obj_with_background() // 渲染背景
    render_man(g_left_right_distance) // 渲染人物
    // render_test()

    for(let i = 0; i < stone_obj_max_number; i++) {
        let stone_init_position_x = all_obj["stone_position"][i].x // 对象将要渲染的初始x位置
        let stone_init_position_y = all_obj["stone_position"][i].y // 对象将要渲染的初始y位置
        let stone_data = render_stone(stone_init_position_x, stone_init_position_y, 0, all_obj["stone_position"][i].d || 0) // 渲染石头
        all_obj["stone_obj"][i] = stone_data // 讲obj渲染位置与大小数据放到全局对象中
    }

    // 渲染钩子
    hook_init_position_x =  (canvasWidth - hookImg.width) / 2 // 对象将要渲染的初始x位置
    hook_init_position_y = 200 // 对象将要渲染的初始y位置
    render_obj_with_hook(hook_init_position_x, hook_init_position_y, g_left_right_distance, g_up_down_distance) // 渲染钩子

    // hook_position_y = render_hook(hook_init_position_x, hook_init_position_y, g_left_right_distance, g_up_down_distance) // 渲染钩子
    // all_obj["hook"] = hook_obj
    
}
