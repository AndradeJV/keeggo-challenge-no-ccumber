export default new class SearchRequest {
  postUpdateImage(userId, source, color, productId){
    return cy.request({
      method: 'GET',
      failOnStatusCode: false,
      url: `${Cypress.env('api')}catalog/api/v1/product/image/${userId}/${source}/${color}?product_id=${productId}`
    })
  }
}