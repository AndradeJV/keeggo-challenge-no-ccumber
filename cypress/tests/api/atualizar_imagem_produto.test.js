import AccountRestRequest from "../../support/requests/AccountRestRequest"
import ImageRequest from "../../support/requests/Catalog/v1/product/ImageRequest"

describe('Atulizar imagem de um produto', () => {
  beforeEach(() => {
    const payloadLogin = {
      "email": "myemail@testofatet.com",
      "loginPassword": "MyPass123",
      "loginUser": "Alust"
    }

    AccountRestRequest.postLogin(payloadLogin)
  })

  it('Atualizar imagem de um produto com sucesso', () => {
    ImageRequest.postUpdateImage('395562113', '2200', 'BLACK', 16).then(res => {
      // Aguardando resolução de bug no login via API
    })
  })
})