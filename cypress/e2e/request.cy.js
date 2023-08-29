describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})


it('Covid-19 API tests : General Stats', () => {
  cy.request('https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats')
      .then(response => {
        console.log(response)
          expect(response.body).to.have.property('status')
          expect(response.body).to.have.property('data')
          expect(response.body.data).to.have.property('total_cases')
      })
})

it.only('ReqRes API Create User test', () => {
  cy.request({
      url: 'https://reqres.in/api/users',
      method: 'POST',
      body: {
          "name": "Mohammed Ali",
          "job": "QA"
      }
  })
      .its('body.name')
      .should('eql', 'Mohammed Ali')
}) 