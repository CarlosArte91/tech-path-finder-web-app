import { formatCurrency } from "@/utils/formatCurrency"

export function offersAdapter(offers: any, categories: any) {
  const response: any = []

  offers.forEach((offer: any) => {
    const category = categories.find((category: any) => category.id === offer.categoryId)

    response.push({
      id: offer.id,
      type: category?.name,
      tech: offer.name,
      total: offer.totalOffers,
      average: formatCurrency(offer.averageSalary),
      highest: formatCurrency(offer.highestSalary),
      lowest: formatCurrency(offer.lowestSalary),
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
      description: offer.description,
    })
  })

  return response
}
