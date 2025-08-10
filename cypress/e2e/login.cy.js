describe("Login Functionality", () => {
  beforeEach(() => {
    cy.fixture("testData").as("data");
  });

  it("should login successfully with valid credentials", function () {
    cy.login(this.data.validUser.email, this.data.validUser.password);
    cy.url().should("not.include", "/login");
    cy.contains("Welcome").should("be.visible");
  });
});
