import { request } from '@/utils'

export default {
  create: data => request.post('/roles/', data),
  read: (params = {}) => request.get('/roles/', { params }),
  update: data => request.patch(`/roles/${data.id}/`, data),
  delete: id => request.delete(`/roles/${id}/`),

  getAllPermissionTree: () => request.get('/menus/tree'),
  getAllUsers: (params = {}) => request.get('/users', { params }),
  addRoleUsers: (roleId, data) => request.patch(`/roles/users/add/${roleId}`, data),
  removeRoleUsers: (roleId, data) => request.patch(`/roles/users/remove/${roleId}`, data),
}
