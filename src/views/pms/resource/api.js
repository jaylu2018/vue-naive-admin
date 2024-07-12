import { request } from '@/utils'

export default {
  getMenuTree: () => request.get('/menus/tree'),
  getButtons: ({ parentId }) => request.get(`/buttons/${parentId}`),
  addPermission: data => request.post('/permission', data),
  savePermission: (id, data) => request.patch(`/${id}`, data),
  deletePermission: id => request.delete(`${id}`),
}
