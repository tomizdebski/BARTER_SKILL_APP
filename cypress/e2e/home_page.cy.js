describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should display the logo", () => {
    cy.get('[data-test="home-logo"]').should("be.visible");
  });

  it("should display the login button", () => {
    cy.get('[data-test="home-login-button"]').should("be.visible");
  });

  it("should display the register button", () => {
    cy.get('[data-test="home-register-button"]').should("be.visible");
  });

  it("should display the title", () => {
    cy.get('[data-test="home-banner-part1"]').contains(
      /Odkrywaj i wymieniaj się umiejętniościami/i
    );
  });

  it("should display the describe", () => {
    cy.get('[data-test="home-banner-describe"]').contains(
      /Czy umiesz coś czego nie umie ktoś inny?/i
    );
  });

  it("should not display the login button", () => {
    cy.viewport("iphone-6"); // set the screen resolution to iPhone 6 size
    cy.get('[data-test="home-login-button"]').should("not.be.visible"); // check if the hamburger menu appears
  });

  it("should not display the register button", () => {
    cy.viewport("iphone-6"); // set the screen resolution to iPhone 6 size
    cy.get('[data-test="home-register-button"]').should("not.be.visible"); // check if the hamburger menu appears
  });



  it("should display the hamburger menu on low resolution", () => {
    cy.viewport("iphone-6"); // set the screen resolution to iPhone 6 size
    cy.get('[data-test="home-hamburger-menu"]').should("be.visible"); // check if the hamburger menu appears
  });



  



  

  //   it('should display the subtitle', () => {
  //     cy.get('h2').contains('This is the home page.')
  //   })

  //   it('should display the link to the about page', () => {
  //     cy.get('a').contains('About').should('have.attr', 'href', '/about')
  //   })
});
