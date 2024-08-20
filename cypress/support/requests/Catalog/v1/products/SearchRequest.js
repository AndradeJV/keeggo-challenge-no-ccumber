export default new class SearchRequest {
  getAProduct(nameOfTheProduct, quantityPerEachCategory){
    return cy.request({
      method: 'GET',
      failOnStatusCode: false,
      url: `${Cypress.env('api')}catalog/api/v1/products/search?name=${nameOfTheProduct}&quantityPerEachCategory=${quantityPerEachCategory}`
    })
  }
}