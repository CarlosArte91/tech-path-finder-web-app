import techJobOffers from '.'

export function create(newUser) {
  return techJobOffers.post('/user', newUser)
}

export function update(updateUser) {
  return techJobOffers.put('/user', updateUser)
}

export function deleteById(id) {
  return techJobOffers.delete(`/user/${id}`)
}

export function byId(id) {
  return techJobOffers.get(`/user/${id}`)
}

export function login(email, password) {
  return techJobOffers.post(`/login?email=${email}&password=${password}`)
}
