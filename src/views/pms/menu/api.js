import { request } from '@/utils'

export default {
  getMenuTree: () => request.get('/menus/tree'),
  addMenu: data => request.post('/menus/', data),
  editMenu: (id, data) => request.patch(`/menus/${id}/`, data),
  deleteMenu: id => request.delete(`menus/${id}/`),
  getButtons: ({ parentId }) => request.get(`/buttons/${parentId}`),
}
