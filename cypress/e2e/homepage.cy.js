describe('Freely Web App Testing Scenarios', () => {
  const baseUrl = 'https://app.freely.me/';

  beforeEach(() => {
    // Visit the homepage before each test for isolation
    cy.visit(baseUrl);
  });

  it('Scenario 1: Verifies homepage loads and displays country selection options', () => {
    cy.contains('Choose your country of residency').should('be.visible');
    cy.contains('Please note you will need to get a new quote when you switch regions').should('be.visible');
    cy.contains('Australia').should('be.visible');
    cy.contains('USA').should('be.visible');
  });

  it('Scenario 2: Verifies selecting Australia redirects to AU quote flow', () => {
    cy.contains('Australia').click();
    cy.url().should('include', '/au/');
    cy.contains('Freely is a brand of Cover-More Insurance').should('be.visible');
  });

  it('Scenario 3: Verifies selecting USA redirects to US state selection', () => {
    // Set mobile viewport to ensure md:hidden elements are visible
    cy.viewport(375, 667); // iPhone 6 size, <768px to bypass md:hidden

    // Click on USA button/link
    cy.contains('USA').click();

    // Wait for page to load (handle potential dynamic rendering)
    cy.url().should('include', '/us/state-of-residence', { timeout: 10000 });
    cy.contains('Your residency is set to USA').should('be.visible');

    // Check for "Traveling soon?" with increased timeout and fallback
    cy.contains('Traveling soon?', { timeout: 10000 })
      .should('be.visible');

    cy.get('[data-testid="dropdown-input"]').click().type('California', { delay: 100 });

    cy.contains('California', { timeout: 10000 })
          .scrollIntoView()
          .click({ force: true });

    cy.contains('button', 'Next', { timeout: 10000 })
          .should('be.visible')
          .click();
  });
});