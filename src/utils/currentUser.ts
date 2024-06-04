export async function saveCurrentUser(data: any) {
  localStorage.setItem('userData', JSON.stringify(data))
}

export async function getCurrentUser() {
  const userData = localStorage.getItem('userData')
  
  if (userData) {
    const user = JSON.parse(userData)
    return {
      id: user.id,
      username: user.username,
      email: user.email,
    }
  }
  return null
}
