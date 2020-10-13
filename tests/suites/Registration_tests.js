import ExamplePage from '../page_model/Registration_model';

const page = new ExamplePage();

fixture `Tests for Registration`
    .page `http://flovers.mx/`;
    const name="Ivan Medina D";
    const email="0189863@up.edu.mx";
    const pass="flovPassword";
    const passC="flovPassword1";
    const email2="0189863/&%@up.edu.mx";

    //Fill with Information the form of registration. 
    test('Registration Test 1', async t => {
        await t
            .click(page.inputReg)
            .typeText(page.inputName,name)
            .typeText(page.inputEm,email)
            .typeText(page.inputPas,pass)
            .typeText(page.inputConPas,pass)
            .click(page.buttonCrear)
            .wait(500);
    });

    //Create an Account assosiated to FLovers
    test('Registration Test 2', async t => {
        await t
            .click(page.inputReg)
            .typeText(page.inputName,name)
            .typeText(page.inputEm,email)
            .typeText(page.inputPas,pass)
            .typeText(page.inputConPas,pass)
            .click(page.buttonCrear)
            .wait(500);
    });

    //Create an Account assosiated with an error in one of the password options.
    test('Registration Test 3', async t => {
        await t
            .click(page.inputReg)
            .typeText(page.inputName,name)
            .typeText(page.inputEm,email)
            .typeText(page.inputPas,pass)
            .typeText(page.inputConPas,passC)
            .click(page.buttonCrear)
            .wait(500);
    });

    //Create an Account assosiated with a special character.
    test('Registration Test 4', async t => {
        await t
            .click(page.inputReg)
            .typeText(page.inputName,name)
            .typeText(page.inputEm,email2)
            .typeText(page.inputPas,pass)
            .typeText(page.inputConPas,pass)
            .click(page.buttonCrear)
            .wait(500);
    });

    //Create an Account with no information. 
    test('Registration Test 5', async t => {
        await t
            .click(page.inputReg)
            .click(page.buttonCrear)
            .wait(500);
    });
