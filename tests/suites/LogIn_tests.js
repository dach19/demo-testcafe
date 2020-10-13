import LoginPage from '../page_model/LogIn_model';

const page = new LoginPage();

fixture `Tests for LogIn`
    .page `http://flovers.mx/login_cliente`;
    const email='0189863@up.edu.mx';
    const passwort='flovPassword';
    const email2='ivMed@gmail.com';
    const email3='0189863%!)·@up.edu.mx';
    const passwort2='flovPass';

    //Login to an existing Account. 
    test('Test Login 1', async t => {
        await t
            .typeText(page.inputEmail,email)
            .typeText(page.inputPasswort,passwort)
            .click(page.buttonTaste)
            .wait(500);

            // .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
    })

    //Login to a non-existing Account.
    test('Test Login 2', async t => {
        await t
            .typeText(page.inputEmail,email2)
            .typeText(page.inputPasswort,passwort)
            .click(page.buttonTaste)
            .wait(500);
    });

    //Login with a special character.
    test('Test Login 3', async t => {
        await t
            .typeText(page.inputEmail,email3)
            .typeText(page.inputPasswort,passwort)
            .click(page.buttonTaste)
            .wait(500);
    });

    //Login with a Facebook Account
    test('Test Login 4', async t => {
        await t
            .click(page.spanFace)
            .typeText(page.inputEmFace,email)
            .typeText(page.inputPassFace,passwort)
            .click(page.buttonAnmeldung)
            .wait(500);
    });

    //Login with a Google Account
    test('Test Login 5', async t => {
        await t
            .click(page.spanGm)
            .typeText(page.inputEmGm,email)
            .click(page.buttonAnmeldungGm)
            .typeText(page.inputEmUp,email)
            .typeText(page.inputPassUp,passwort)
            .click(page.buttonAnmeldungUp)
            .wait(500);
    });

    //Try to Login with an Incorrect password 3 Times.
    test('Test Login 6', async t => {
        await t
            .typeText(page.inputEmail,email)
            .typeText(page.inputPasswort,passwort2)
            .click(page.buttonTaste)
            .typeText(page.inputPasswort,passwort2)
            .click(page.buttonTaste)
            .typeText(page.inputPasswort,passwort2)
            .click(page.buttonTaste)
            .wait(500);
    });

    //Try to Login without an email.
    test('Test Login 7', async t => {
        await t
            .typeText(page.inputPasswort,passwort2)
            .click(page.buttonTaste)
            .wait(500);
    });

    //Try the Forgotten Account Option
    test('Test Login 8', async t => {
        await t
            .click(page.inputVergessen)
            .typeText(page.inputVerEm,email)
            .click(page.buttonVerTaste)
            .wait(500);
    });
