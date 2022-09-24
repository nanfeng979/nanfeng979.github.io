// 钩子伸出函数
function hook_extend_loop() {
    let hook_extend_loop_timer = window.requestAnimationFrame(hook_extend_loop, 1000 / fps)
    up_down_distance += 10
    max_deep = canvasHeight - hook_init_position_y - hookImg.height
    if(up_down_distance >= max_deep) {
        cancelAnimationFrame(hook_extend_loop_timer)
        hook_extend_return_loop() // 钩子伸回函数
        return
    }
    let collided_obj
    if(collided_obj = is_collide(all_obj['hook'])) {
        cancelAnimationFrame(hook_extend_loop_timer)
        hook_extend_return_loop() // 钩子伸回函数
        stone_return_loop.obj = collided_obj
        stone_return_loop.Func() // 石头返回函数
        // testFunc.mainFunc()
        return
    }
}

// 钩子伸回函数
function hook_extend_return_loop() {
    hook_extend_return_loop_timer = window.requestAnimationFrame(hook_extend_return_loop, 1000 / fps)
    up_down_distance -= 5
    // up_distance -= 5
    if(up_down_distance <= 0) {
        cancelAnimationFrame(hook_extend_return_loop_timer)
    }
}

// function stone_return_loop(collided_obj) {
//     stone_return_loop_timer = window.requestAnimationFrame(stone_return_loop, 1000 / fps)
//     if(!collided_obj.d) {
//         collided_obj.d = 5
//     }
//     collided_obj.d += 5
// }

// 石头返回函数
var stone_return_loop = {
    obj:"",
    Func: function () {
        let stone_return_loop_timer = window.requestAnimationFrame(this.Func.bind(this), 1000 / fps)
        if(up_down_distance <= 0) { // 当钩子延伸长度回到0时，石头的延伸也停止
            for(let i = 0; i < stone_obj_max_number; i++) {
                if(all_obj.stone_position[i].id == this.obj.id) {
                    all_obj.stone_position[i].x = 0
                    all_obj.stone_position[i].y = 0
                    all_obj.stone_position[i].w = 0
                    all_obj.stone_position[i].h = 0
                }
            }
            cancelAnimationFrame(stone_return_loop_timer)
            return
        }
        if(!this.obj.d) {
            this.obj.d = 0
        }
        this.obj.d -= 5
    }
}

var testFunc = {
    a:1,
    mainFunc: function () {
        window.requestAnimationFrame(this.mainFunc.bind(this), 1000 / fps)
        console.log(this.a)
    }
}

