import GlobalActions from "../../support/scripts/GlobalActions"
import HomePage from "../../support/pages/HomePage"
import ProductPage from "../../support/pages/ProductPage"

import payload from "../../fixtures/busca_de_produto.json"


describe('Inclusão de produto no carrinho', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Incluir produto no carrinho', () => {
    GlobalActions.searchAProduct(payload.products[0])
    HomePage.accessProduct()
    ProductPage.addToCart()

    cy.get('#product').should('be.visible')
  })

  it('Validar produto inserido no carrinho', () => {
    GlobalActions.searchAProduct(payload.products[0])
    HomePage.accessProduct()
    ProductPage.addToCart()

    cy.get('#product').should('be.visible')

    GlobalActions.accessPaymentScreen()

    cy.get('td:nth-child(2) > label').should('be.visible')
  })
})