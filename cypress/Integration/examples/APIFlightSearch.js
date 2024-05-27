describe('Flight Search Request', function () {
  const NumberOfSegment =2
  before(() => {
    cy.fixture('flightSearch').then(function (data) {
      this.data = data
      cy.log(JSON.stringify(this.data))

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
    expect(resp.status).to.eq(200)
    var data = JSON.stringify(resp.body)
    expect(resp.body.combinabilityStrictMode).eq(true)
    expect(resp.body.segments[0].route).eq('DXB_PRG')
    expect(resp.body.segments[0].origin).eq(this.data.searchCriteria[0].origin)
    expect(resp.body.segments[0].dest).eq(this.data.searchCriteria[0].dest)
    expect(resp.body.segments[0]).have.property('lowestAdultFarePerPax')
    expect(resp.body.segments).to.be.an('Array')
    expect(resp.body.lowestTotalFare).to.be.an('Array')
    expect(resp.body.messages).to.be.an('Array')
    expect(resp.body.validationRules).to.be.an('Object')
    expect(resp.body.segments[0].lowestFareByCabin).to.be.an('Array')
    expect(resp.body.segments[0].flights).to.be.an('Array')
    expect(resp.body.segments[0].brands).to.be.an('Array')
    expect(resp.body.segments[0].flights[0].fareTypes[0].fareInformation.adultFares[0].paxCount).eq(this.data.paxInfo.adultCount)

  })

})

})