export const GetItemCookie = () => localStorage.getItem('profile')

export const RemoveItemCookie = () => {
  localStorage.removeItem('profile')
}
