import ExamplePage from '../page_model/ShoppingCart_model';

const page = new ExamplePage();

fixture `Tests for Shopping Cart`
    .page `http://flovers.mx/`;
    const nummer='000000';
    const nummer2='0';

    //Add flowers and check Disponibility of Flowers.
    test('Shopping Cart Test 1', async t => {
        await t
            .click(page.inputCar)
            .click(page.inputStart)
            .click(page.inputOrch)
            .click(page.inputPlus)
            .wait(100)
            .click(page.inputPlus)
            .wait(100)
            .click(page.inputPlus)
            .wait(100)
            .click(page.inputPlus)
            .click(page.inputAdd)
            .wait(500);
    });

    //Add to Cart more than One Type of FLowers.
    test('Shopping Cart Test 2', async t => {
        await t
            .click(page.inputCar)
            .click(page.inputStart)
            .click(page.inputOrch)
            .click(page.inputPlus)
            .wait(100)
            .click(page.inputPlus)
            .wait(100)
            .click(page.inputAdd)
            .wait(100)
            .click(page.inputGer)
            .click(page.inputPlus)
            .wait(100)
            .click(page.inputPlus)
            .wait(100)
            .click(page.inputAdd)
            .wait(500);
    });

    //Check if the web page has a Limit of Orders.
    test('Shopping Cart Test 3', async t => {
        await t
            .click(page.inputCar)
            .click(page.inputStart)
            .click(page.inputRos)
            .typeText(page.inputNummer,nummer)
            .click(page.inputAdd)
            .wait(500);
    });

    //Modify the Amount of Flowers in the cart. 
    test('Shopping Cart 4', async t => {
        await t
            .click(page.inputCar)
            .click(page.inputStart)
            .click(page.inputGir)
            .typeText(page.inputNummer,nummer2)
            .click(page.inputAdd)
            .click(page.inputCar)
            .click(page.inputMinus)
            .wait(100)
            .click(page.inputMinus)
            .wait(100)
            .click(page.inputMinus)
            .wait(100)
            .click(page.inputMinus)
            .wait(100)
            .click(page.inputMinus)
            .wait(500);
    });
