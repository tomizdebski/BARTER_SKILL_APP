describe("Home Page test", () => {
  beforeEach(() => {
    cy.visit("/");
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

  it("should not display the login button on low resolution", () => {
    cy.viewport("iphone-6"); // set the screen resolution to iPhone 6 size
    cy.get('[data-test="home-login-button"]').should("not.be.visible"); // check if the hamburger menu appears
  });

  it("should not display the register button on low resolution", () => {
    cy.viewport("iphone-6"); // set the screen resolution to iPhone 6 size
    cy.get('[data-test="home-register-button"]').should("not.be.visible"); // check if the hamburger menu appears
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

  it("should display the category list", () => {
    cy.get('[data-test="category-list"]').should("be.visible");
  });

  it("should display the 15 categories", () => {
    cy.get('[data-test="category-list"]').within(() => {
        cy.get('[data-test="category-list-item"]').should('have.length', 15)
      })
  });

  it("should display the hamburger menu on low resolution", () => {
    cy.viewport("iphone-6"); // set the screen resolution to iPhone 6 size
    cy.get('[data-test="home-hamburger-menu"]').should("be.visible"); // check if the hamburger menu appears
  });

  it("should not display the hamburger menu on high resolution", () => {
    cy.viewport("macbook-15"); // set the screen resolution to iPhone 6 size
    cy.get('[data-test="home-hamburger-menu"]').should("not.be.visible"); // check if the hamburger menu appears
  });

  it("should display lesson list", () => {  
    cy.get('[data-test="lesson-list"]').should('not.be.empty' );
  })

  it.only("should display footer", () => {
    cy.get('[data-test="footer"]').should("be.visible").contains(/©2023 izdebski.dev. All rights reserved./i);
  });

  



  



  

  //   it('should display the subtitle', () => {
  //     cy.get('h2').contains('This is the home page.')
  //   })

  //   it('should display the link to the about page', () => {
  //     cy.get('a').contains('About').should('have.attr', 'href', '/about')
  //   })
});
