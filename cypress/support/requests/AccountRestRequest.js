export default new class AccountRestRequest {
  postRegister(payload){
    return cy.request({
      method: 'POST',
      failOnStatusCode: false,
      url: `${Cypress.env('api')}accountservice/accountrest/api/v1/register`,
      headers: {
        'Content-Type': 'text/xml; charset=UTF-8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'x-requested-with': 'XMLHttpRequest'
      },
      body: payload
    })
  }

  postLogin(payload){
    return cy.request({
      method: 'POST',
      failOnStatusCode: false,
      url: `${Cypress.env('api')}accountservice/accountrest/api/v1/login`,
      body: payload
    })
  }
}