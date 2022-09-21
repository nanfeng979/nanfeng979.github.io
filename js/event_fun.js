//// ---- 键盘事件 ---- ////

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
    // 如果钩子在延伸时，则停止空格事件
    if(hook_is_extend) {
        return
    }
    // 暂停钩子的运动
    if(hook_direction != "暂停"){
        hook_status = hook_direction
        hook_direction = "暂停"
        
        hook_is_extend = true // 钩子在延伸，停止空格事件
        function hook_extend_loop() {
            hook_extend_loop_timer = window.requestAnimationFrame(hook_extend_loop, 1000 / fps)
            if(1) {
                hook_distance += hook_extend_speed
            } else {
                hook_distance -= hook_extend_speed
            }
            is_collide(hook_distance)
        }
        hook_extend_loop(hook_distance)
        return
    }
    // 恢复钩子原来的运动方向
    hook_direction = hook_status
    cancelAnimationFrame(hook_extend_loop_timer) // 终止无限循环
}