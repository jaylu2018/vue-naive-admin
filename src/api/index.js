import { request } from '@/utils'

export default {
  // 获取用户信息
  getUser: () => request.get('/users/detail'),
  // 登出
  logout: () => request.post('/auth/logout', {}, { needTip: false }),
  // 切换当前角色
  switchCurrentRole: role => request.post(`/auth/current-role/switch/${role}`),
  // 获取角色权限
  // getRolePermissions: () => request.get('/role/permissions/tree'),
  getRolePermissions: () => request.get('/menus/tree'),
  // 验证菜单路径
  validateMenuPath: path => request.get(`/permission/menu/validate?path=${path}`),
}
