import techJobOffers from '.'

export function getByKeyword(keyword) {
  return techJobOffers.get(`/search-offers?keyword=${keyword}`)
}
