import techJobOffers from '.'

export function create(newUser) {
  return techJobOffers.post('/user', newUser)
}

export function byId(id) {
  return techJobOffers.get(`/user/${id}`)
}

export function login(email, password) {
  return techJobOffers.post(`/login?email=${email}&password=${password}`)
}
