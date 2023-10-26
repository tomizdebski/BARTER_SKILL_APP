describe("Login test", () => {
  it("Login successfully", () => {
    cy.visit("/"); // visit home page
    cy.get('[data-test="home-login-button"]').click(); // click the login button
    cy.url().should("include", "auth/login");
    cy.get('input[name="email"]').type("myusername@test.pl"); // type in the username
    cy.get('input[name="password"]').type("mypassword"); // type in the password
    cy.get('button[type="submit"]').click(); // click the submit button
    cy.url().should("include", "/"); // assert that the URL includes '/'

    cy.viewport("macbook-15"); // set the screen resolution to macbook-15 size
    cy.get('[data-test="nav-link-create-lesson"]').should("be.visible");
    cy.get('[data-test="nav-link-skill"]').should("be.visible");
    cy.get('[data-test="nav-link-barter"]').should("be.visible");
    cy.get('[data-test="nav-link-basket"]').should("be.visible");
    cy.get('[data-test="nav-link-search"]').should("be.visible");
    cy.get('[data-test="nav-link-avatar"]').should("be.visible");
    cy.get('[data-test="category-list"]').should("be.visible");
    cy.get('[data-test="category-list"]').within(() => {
      cy.get('[data-test="category-list-item"]').should("have.length", 15);
    });
    cy.get('[data-test="lesson-list"]').should('not.be.empty' );
    cy.get('[data-test="footer"]').should("be.visible").contains(/©2023 izdebski.dev. All rights reserved./i);

    cy.viewport("iphone-6"); // set the screen resolution to iPhone 6 size
    cy.get('[data-test="nav-link-create-lesson"]').should("not.be.visible");
    cy.get('[data-test="nav-link-skill"]').should("not.be.visible");
    cy.get('[data-test="nav-link-barter"]').should("not.be.visible");
    cy.get('[data-test="nav-link-basket"]').should("not.be.visible");
    cy.get('[data-test="nav-link-search"]').should("not.be.visible");
    cy.get('[data-test="nav-link-avatar"]').should("be.visible");
    cy.get('[data-test="category-list"]').should("be.visible");
    cy.get('[data-test="category-list"]').within(() => {
      cy.get('[data-test="category-list-item"]').should("have.length", 15);
    });
    cy.get('[data-test="lesson-list"]').should('not.be.empty' );
    cy.get('[data-test="footer"]').should("be.visible").contains(/©2023 izdebski.dev. All rights reserved./i);
  });

  /// ////////////////////////////////////////////////////////////////////////////////
  it('login incorrect', () => {
    cy.visit("/"); // visit home page
    cy.get('[data-test="home-login-button"]').click(); // click the login button
    cy.url().should("include", "auth/login");
    cy.get('input[name="email"]').type('myusername') // type in the username
    cy.get('input[name="password"]').type('wrongpassword') // type in the wrong password
    cy.get('button[type="submit"]').click() // click the submit button
    cy.contains(/To nie jest email/i) // assert that the error message is displayed
    cy.get('input[name="email"]').type('myusername@pl.pl') // type in the username
    cy.get('input[name="password"]').type('wrongpassword') // type in the wrong password
    cy.get('button[type="submit"]').click() // click the submit button
    cy.url().should("include", "/"); // assert that the URL includes '/'
  })
});
