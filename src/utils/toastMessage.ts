import { toast } from 'react-toastify'
export const toastServices = {
  success: (message?: string) => {
    toast.success(message || 'Thành Công')
  },
  error: (message?: string) => {
    toast.error(message || 'Thất Bại')
  },
  warning: (message?: string) => {
    toast.warning(message || 'Có Lỗi Xảy ra')
  }
}
