import GlobalActions from "../../support/scripts/GlobalActions"
import HomePage from "../../support/pages/HomePage"

import payload from "../../fixtures/busca_de_produto.json"


describe('Inclusão de produto no carrinho', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Incluir produto no carrinho', () => {
    GlobalActions.searchAProduct(payload.products[0])
    HomePage.accessProduct()

    cy.get('.noPromotedProductDiv >div >div >div:nth-child(2) ul li:nth-child(1)').should('be.visible')
  })
})