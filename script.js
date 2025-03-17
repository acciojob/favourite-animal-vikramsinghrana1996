//your code here
cy.get('img').should('have.attr', 'alt').then(alt => {
    expect(alt).to.not.be.undefined;
    expect(alt.length).to.be.greaterThan(0);
});
