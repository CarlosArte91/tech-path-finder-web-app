export function offersAdapter(offers: any, categories: any) {
  const response: any = []

  offers.forEach((offer: any) => {
    const category = categories.find((category: any) => category.id === offer.categoryId)

    response.push({
      id: offer.id,
      type: category?.name,
      tech: offer.name,
      total: offer.totalOffers,
      average: offer.averageSalary,
      highest: offer.highestSalary,
      lowest: offer.lowestSalary,
    })
  })

  return response
}

export function offersByKeywordAdapter(offers: any) {
  const response: any = []

  offers.forEach((offer: any) => {
    response.push({
      id: offer.id,
      companyName: offer.companyName,
      industry: offer.industry,
      title: offer.title,
      contractType: offer.contractType,
      workSchedule: offer.workSchedule,
      salary: offer.salary,
    })
  })

  return response
}
