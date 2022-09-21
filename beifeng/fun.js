// // 渲染钩子函数
// function render_hook(hook_distance) {
//     context.save() // 保存初始状态
//     context.translate(canvasWidth / 2, 180)
//     // context.rotate(angle(Angle_between_man_and_hook))
//     context.rotate(angle(90))
//     context.drawImage(gouziImg, 0, 0, gouziImg.width, gouziImg.height,
//         hook_distance, 0, gouziImg.width, gouziImg.height) // 渲染钩子
//     context.restore() // 恢复初始状态
// }

// // 监听空格事件函数
// function keydown_by_space(e) {
//     e.preventDefault()
//     // 如果钩子在延伸时，则停止空格事件
//     if(hook_is_extend) {
//         return
//     }
//     // 暂停钩子的运动
//     if(hook_direction != "暂停"){
//         hook_status = hook_direction
//         hook_direction = "暂停"
        
//         hook_is_extend = true // 钩子在延伸，停止空格事件
//         function hook_extend_loop() {
//             hook_extend_loop_timer = window.requestAnimationFrame(hook_extend_loop, 1000 / fps)
//             if(1) {
//                 hook_distance += hook_extend_speed
//             } else {
//                 hook_distance -= hook_extend_speed
//             }
//             is_collide(hook_distance)
//         }
//         hook_extend_loop(hook_distance)
//         return
//     }
//     // 恢复钩子原来的运动方向
//     hook_direction = hook_status
//     cancelAnimationFrame(hook_extend_loop_timer) // 终止无限循环
// }

// // 控制钩子角度的函数
// function control_gouzi_angle() {
//     // 钩子角度小于等于0度时
//     if(Angle_between_man_and_hook <= 0 ) {
//         // 设置钩子的运动方向状态为"顺时针", 向着顺时针方向摆动
//         hook_direction = "顺时针"
//     }
//     // 钩子角度大于等于150度时
//     else if(Angle_between_man_and_hook >= 150) {
//         // 设置钩子的运动方向状态为"逆时针", 向着逆时针方向摆动
//         hook_direction = "逆时针"
//     }

//     // 判断钩子的运动方向，并持续运动
//     if(hook_direction == "顺时针") {
//         Angle_between_man_and_hook++
//     }
//     else if(hook_direction == "逆时针") {
//         Angle_between_man_and_hook--
//     }
//     else if(hook_direction == "暂停") {
//     }
// }

// // 钩子伸出缩回函数
// function hook_extend() {
//     context.save() // 保存初始状态
//     context.translate(canvasWidth / 2, 180)
//     context.rotate(angle(Angle_between_man_and_hook))
//     context.drawImage(gouziImg, 0, 0, gouziImg.width, gouziImg.height,
//         hook_distance, 0, gouziImg.width, gouziImg.height) // 渲染钩子
//     hook_distance += hook_extend_speed
//     context.restore() // 恢复初始状态
// }