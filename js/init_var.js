// 图片对象
backgroundImg = new Image() // 创建一个背景图片对象
backgroundImg.src = "./images/level-background-0.jpg"

gouziImg = new Image() // 创建一个钩子图片对象
gouziImg.src = "./images/gouzi.png"

personImg = new Image() // 创建一个人物图片对象
personImg.src = "./images/miner-sheet-1.png"


// 状态
Angle_between_man_and_hook = 0 // 钩子与一开始时与人物之间的角度
hook_direction = "" // 保存钩子的运动方向 [1:顺时针, 2:逆时针方向, 3:暂停]
hook_status = 0 // 暂停时保存钩子的状态