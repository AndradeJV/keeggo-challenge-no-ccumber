import SearchRequest from "../../support/requests/Catalog/v1/products/SearchRequest"


describe('Buscar produto - API', () => {
  it('Procurar por um produto com sucesso', () => {
    SearchRequest.getAProduct('laptop', '10').then(res => {
      expect(res.status).to.equal(200)
      expect(res.body[0].categoryId).to.equal(1)
      expect(res.body[0].categoryName).to.equal('LAPTOPS')
      expect(res.body[0].categoryImageId).to.equal('laptops')
      expect(res.body[0].categoryImageId).to.not.equal(2)
    })
  })
})