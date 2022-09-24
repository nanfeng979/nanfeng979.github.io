// 钩子伸出函数
function hook_extend_loop() {
    let hook_extend_loop_timer = window.requestAnimationFrame(hook_extend_loop, 1000 / fps)
    up_down_distance += 10
    max_deep = canvasHeight - hook_init_position_y - hookImg.height
    if(up_down_distance >= max_deep) {
        cancelAnimationFrame(hook_extend_loop_timer)
        hook_extend_loop_back() // 钩子伸回函数
        return
    }
    if(is_collide(all_obj['hook'])) {
        cancelAnimationFrame(hook_extend_loop_timer)
        hook_extend_loop_back()
        return
    }
}

// 钩子伸回函数
function hook_extend_loop_back() {
    hook_extend_loop_back_timer = window.requestAnimationFrame(hook_extend_loop_back, 1000 / fps)
    up_down_distance -= 5
    // up_distance -= 5
    if(up_down_distance <= 0) {
        cancelAnimationFrame(hook_extend_loop_back_timer)
    }
}


