// 将弧度转化为角度
// param: {radian:number}, return:number
function angle(radian) {
    return radian * Math.PI / 180
}

// 两个物体之间是否碰撞 // todo: x轴也要考虑
function is_collide(obj) {
    for(let i = 0; i < stone_obj_max_number; i++) {
        //  
        if((obj.x + obj.w) >= all_obj['stone_obj'][i].x && 
            obj.x - obj.w <= all_obj['stone_obj'][i].x + all_obj['stone_obj'][i].w &&
            (obj.y + obj.h) >= all_obj['stone_obj'][i].y) {
            return all_obj["stone_position"][i]
        }
    }
}

// 渲染物体
// param: {obj:img_obj; obj_self_data:[obj_self_x:number, obj_self_y:number, obj_self_width:number, obj_self_height:number];
// obj_render_data:[obj_render_x:number, obj_render_y:number, obj_render_width:number, obj_render_height:number]}
function render_obj(obj, obj_self_data, obj_render_data) {
    context.drawImage(obj, ...obj_self_data, ...obj_render_data)
    return {x:obj_render_data[0], y:[obj_render_data][1],
            width:obj_render_data[2], height:obj_render_data[3]}
}

// 渲染物体的边框
// param: {color:string; shape:[obj_option_x:number, obj_option_y:number, obj_width:number, obj_height:number]}
function render_obj_border(color, shape) {
    context.strokeStyle = color
    context.strokeRect(...shape)
}

