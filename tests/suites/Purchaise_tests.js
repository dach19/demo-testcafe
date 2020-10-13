import ExamplePage from '../page_model/Purchase_model';

const page = new ExamplePage();

fixture `Tests for Purchases`
    .page `http://flovers.mx/`; 
    const eml='floverstest@gmail.com';
    const pass='Welcome123!';

    test('Test Purchases 1', async t => {
        await t
            .click(page.inputIs)
            .typeText(page.inputEm, eml)
            .typeText(page.inputCon, pass)
            .click(page.inputTaste)
            .wait(500);
    });
