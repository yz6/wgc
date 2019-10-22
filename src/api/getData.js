import fetch from '@/config/fetch'
export const getCode = data => fetch('api/user/validateCode', data, 'POST');//获取验证码
export const login = data => fetch('api/user/login', data, 'POST');//登录
export const getOpenCity = data => fetch('api/city/openList', data, 'GET');//获取开放城市
export const seatAssign = data => fetch('api/seat/assign', data, 'POST');//分配工位
export const getBuildList = data => fetch('api/building/list', data, 'GET');//获取楼栋楼层
export const getRoomList = data => fetch('api/room/list', data, 'GET');//获取会议室列表
export const updateRoom = data => fetch('api/room/', data, 'PUT');//编辑房间
export const getChartData = data => fetch('api/analysis/serviceChart', data, 'GET');














