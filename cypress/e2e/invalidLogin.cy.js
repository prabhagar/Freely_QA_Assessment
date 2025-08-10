describe("Invalid Login", () => {
  beforeEach(() => {
    cy.fixture("testData").as("data");
  });

  it("should show error for invalid credentials", function () {
    cy.login(this.data.invalidUser.email, this.data.invalidUser.password);
    cy.contains("Invalid email or password").should("be.visible");
  });
});
