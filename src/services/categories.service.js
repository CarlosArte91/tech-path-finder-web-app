import techJobOffers from '.'

export function findCategories() {
  return techJobOffers.get('/categories')
}
