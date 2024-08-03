describe('template spec', () => {
  it('passes', () => {

    cy.viewport(1920, 1080);
    //Tast_1
    cy.visit('https://www.fitpeo.com/');

    //Tast_2
    cy.get(':nth-child(6) > a > .satoshi').click();

    //Tast_3
    cy.get('span.MuiSlider-root').scrollIntoView().should('be.visible');

    //Tast_4
    cy.get('span.MuiSlider-root').then(($slider) => {
      cy.window().then((win) => {
        const slider = $slider.find('input[type="range"]').get(0);
        slider.value = 820;
        slider.dispatchEvent(new Event('input', { bubbles: true }));
        slider.dispatchEvent(new Event('change', { bubbles: true }));
      });

    cy.get('input[type="range"]').should('have.value', '820');
    });

    //Tast_5
    cy.get('.MuiInputBase-input').clear().type('560');

    //Tast_6
    cy.get('input[type="range"]').should('have.value', '560');

    //Tast_7
    cy.get('.MuiInputBase-input').clear().type('820');

    const arr = ['CPT-99091', 'CPT-99453', 'CPT-99454', 'CPT-99474'];

    cy.get('div.css-1p19z09').find('div.css-4o8pys').each(($el) => {
    cy.wrap($el).find('.MuiTypography-body1.inter').invoke('text').then((text) => {
      if (arr.includes(text.trim())) {
        cy.wrap($el).find('.css-1m9pwf3').click();
        }
      });
    });

    //Tast_8
    cy.scrollTo('bottom');
    cy.get('p.css-1xroguk').eq(3)
    .contains(`Total Recurring Reimbursement for all Patients Per Month:`)
    cy.get('p.css-1xroguk').eq(3).contains('110700')

  });
});
