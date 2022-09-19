// 将弧度转化为角度
function angle(radian) {
    return radian * Math.PI / 180
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


// ---- 键盘事件 ----
// 监听全局键盘事件
function keydownFun(e) {
    // 监听空格事件
    if(e.key == " ") {
        keydown_by_space(e)
    }
}

// 监听空格事件函数
function keydown_by_space(e) {
    e.preventDefault()
    // 暂停钩子的运动
    if(hook_direction != "暂停"){
        hook_status = hook_direction
        hook_direction = "暂停"
        return
    }
    // 恢复钩子原来的运动方向
    hook_direction = hook_status
}


