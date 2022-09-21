// 图片对象
let backgroundImg = new Image() // 创建一个背景图片对象
backgroundImg.src = "./images/level-background-0.jpg"

let gouziImg = new Image() // 创建一个钩子图片对象
gouziImg.src = "./images/gouzi.png"

let personImg = new Image() // 创建一个人物图片对象
personImg.src = "./images/miner-sheet-1.png"

let stoneImg = new Image() // 创建一个石头图片对象
stoneImg.src = "./images/level-sheet.png"


// 状态
let fps = 60 // 帧率
let Angle_between_man_and_hook = 0 // 钩子与一开始时与人物之间的角度


// 钩子相关变量
let hook_direction // 保存钩子的运动方向 [1:顺时针, 2:逆时针方向, 3:暂停]
let hook_status // "暂停时"保存钩子之前的运动方向 [0:仅用于定义, 1:顺时针, 2:逆时针]
let hook_distance = 50 // 钩子与初始位置的距离
let hook_extend_speed = 2.5 // 钩子延伸的速率
let hook_extend_loop_timer // 保存钩子延伸时的循环函数的id，用来终止循环用的 [0:仅用于定义]
let hook_is_extend = false