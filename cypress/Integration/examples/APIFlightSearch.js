describe('Flight Search Request', function () {
  const NumberOfSegment =2
  before(() => {
    cy.fixture('flightSearch').then(function (data) {
      this.data = data
      //cy.log(JSON.stringify(this.data))
    })
  })

  it('Search Flight', function () {
  cy.request({
    method: 'POST',
    url: 'api/flights/${NumberOfSegment}',
    headers: {
      'Content-Type': 'application/json',
      'appID': "Desktop",
      'Accept': 'application/json',
      'test': 'test'
    },
    body: this.data

  }).then(function (resp) {
    cy.log(JSON.stringify(resp.body))
    var data = JSON.stringify(resp.body)
    cy.log("ddfdldldld",data)
    expect(resp.body.combinabilityStrictMode).eq(true)
    expect(resp.body.segments[0].route).eq('DXB_PRG')
    expect(resp.status).to.eq(200)

  })




})

})