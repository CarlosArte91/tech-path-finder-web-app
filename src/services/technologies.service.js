import techJobOffers from '.'

export function findAll() {
  return techJobOffers.get('/technologies')
}
