//// ---- 键盘事件 ---- ////

// 监听全局键盘事件
function keydownFun(e) {
    // 监听空格事件
    // 如果钩子在延伸中，则无法响应所有的键盘消息
    if(hook_is_extending) {
        return
    }
    if(e.key == " ") {
        e.preventDefault()
        keydown_by_space(e)
    } else if(e.key == "ArrowLeft") {
        e.preventDefault()
        if(all_obj.hook.x <= 0) {
            console.log("已超过边界")
            return
        }
        left_right_distance -= 15
    } else if(e.key == "ArrowRight") {
        e.preventDefault()
        if(all_obj.hook.x >= canvasWidth - hookImg.width) {
            console.log("已超过边界")
            return
        }
        left_right_distance += 15
    } else if(e.key == "ArrowUp") {
        e.preventDefault()
    } else if(e.key == "ArrowDown") {
        e.preventDefault()
    }
}


// 空格监听函数
function keydown_by_space(e) {
    if(hook_is_extending) {
        return
    }

    hook_is_extending = true // 钩子正在延伸中
    hook_extend_loop() // 钩子伸出函数
}




