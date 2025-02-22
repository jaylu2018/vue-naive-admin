import { request } from '@/utils'

export default {
  create: data => request.post('/users', data),
  read: (params = {}) => request.get('/users', { params }),
  update: data => request.patch(`/users/${data.id}`, data),
  delete: id => request.delete(`/users/${id}`),
  resetPwd: (id, data) => request.patch(`/users/password/reset/${id}`, data),

  getAllRoles: () => request.get('/roles?enable=1'),
}
