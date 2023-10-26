import 'cypress-file-upload';

describe("Register test", () => {
  it("Register successfully", () => {
    cy.visit("/"); // visit home page
    cy.get('[data-test="home-register-button"]').click(); // click the login button
    cy.url().should("include", "auth/register");

    cy.get('input[name="firstName"]').type("myUserFirstName"); // type in the first name
    cy.get('input[name="lastName"]').type("myUserLastName"); // type in the last name
    cy.get('input[name="email"]').type("myusername@test.pl"); // type in the username
    cy.get('input[name="password"]').type("mypassword"); // type in the password
   

   
    cy.fixture('testAvatar.jpeg').then(fileContent => {
        cy.get('input[type="file"]').attachFile({
          fileContent: fileContent,
          fileName: 'testAvatar.jpeg',
          mimeType: 'image/jpeg'
        });
      });

    //   cy.get('input[name="avatar"]').attachFile('testAvatar.jpeg');

    // cy.fixture("testAvatar.jpeg").then((fileContent) => {
    //   cy.get('input[name="avatar"]').trigger("change", {
    //     fileContent,
    //     fileName: "testAvatar.jpeg",
    //     mimeType: "image/jpeg",
    //   });
    // });



    cy.get('button[type="submit"]').click(); // click the submit button
    cy.get('[data-test="register-page-avatar"]').should("be.visible");

    // cy.url().should("include", "/"); // assert that the URL includes '/'

    //   cy.viewport("macbook-15"); // set the screen resolution to macbook-15 size

    //   cy.viewport("iphone-6"); // set the screen resolution to iPhone 6 size
  });
});
