// 返回一些初始化变量
function init_var() {
    canvasWidth = theCanvas.width
    canvasHeight = theCanvas.height

    // 存储所有对象信息
    all_obj = {}

    // obj对象初始化
    all_obj["stone_position"] = {}
    all_obj["stone_obj"] = {}

    // 资源初始化变量
    fps = 60 // 帧率
    stone_obj_max_number = 5 // 石块的最大个数

    // 地图环境全局变量
    down_obj_min_deep = 350 // 底下最小深度，最大深度是canvasHeight

    
    // 图片对象
    backgroundImg = new Image() // 创建一个背景图片对象
    backgroundImg.src = "./images/level-background-0.jpg"

    hookImg = new Image() // 创建一个钩子图片对象
    hookImg.src = "./images/gouzi1.png"

    personImg = new Image() // 创建一个人物图片对象
    personImg.src = "./images/miner-sheet-1.png"

    // stoneImg = new Image() // 创建一个石头图片对象
    // stoneImg.src = "./images/level-sheet.png"

    stoneImg = new Image() // 创建一个石头图片对象
    stoneImg.src = "./images/stone.png"

    // 创建多个石头的随机位置
    for(let i = 0; i < stone_obj_max_number; i++) {
        all_obj["stone_position"][i] = {id: Math.floor(Math.random() * 100000000),
                        x: Math.floor(Math.random() * (canvasWidth - stoneImg.width)),
                        y: Math.floor(Math.random() * (canvasHeight - down_obj_min_deep - stoneImg.height) + down_obj_min_deep)}
    }

    // 钩子相关变量
    hook_distance = 50 // 钩子与初始位置的距离
    left_right_distance = 0 // 控制人物和钩子的左右距离
    up_down_distance = 0 // 控制钩子的上下距离
    hook_is_extending = false // 钩子是否在延伸
    hook_extend_speed = 2.5 // 钩子延伸的速率
    // hook_extend_loop_timer = 0 // 保存钩子延伸时的循环函数的id，用来终止循环用的 [0:仅用于定义]

    hook_position_y = 0 // 钩子当前的y的位置
    up_distance = 0 // 石头向上移动的距离
    is_render_stone = true

    


    

    
    
}

