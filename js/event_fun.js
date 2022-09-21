//// ---- 键盘事件 ---- ////

// 监听全局键盘事件
function keydownFun(e) {
    // 监听空格事件
    if(e.key == " ") {
        keydown_by_space(e)
    } else if(e.key == "ArrowLeft") {
        e.preventDefault()
        left_right_distance -= 15
    } else if(e.key == "ArrowRight") {
        e.preventDefault()
        left_right_distance += 15
    } else if(e.key == "ArrowUp") {
        e.preventDefault()
    } else if(e.key == "ArrowDown") {
        e.preventDefault()
    }
    
}


// 空格监听函数
function keydown_by_space(e) {
    e.preventDefault()
    if(hook_is_extend) {
        return
    }

    hook_is_extend = true
    function hook_extend_loop() {
        hook_extend_loop_timer = window.requestAnimationFrame(hook_extend_loop, 1000 / fps)
        up_down_distance += 5
        if(is_collide(hook_position_y, stone_positon_y)) {
            cancelAnimationFrame(hook_extend_loop_timer)
            hook_extend_loop_back()
        }
    }
    hook_extend_loop(hook_distance)
}

function hook_extend_loop_back() {
    hook_extend_loop_back_timer = window.requestAnimationFrame(hook_extend_loop_back, 1000 / fps)
    up_down_distance -= 2
    up_distance -= 2
    if(up_down_distance == 0) {
        cancelAnimationFrame(hook_extend_loop_back_timer)
    }
}



