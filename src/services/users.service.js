import techJobOffers from "."

export function create(newUser) {
  return techJobOffers.get("/user", newUser)
}

export function byId(id) {
  return techJobOffers.get(`/user/${id}`)
}
