import {Selector, t} from 'testcafe';
export default class ExamplePage {
    constructor() {
        //A elements
        this.inputIs = Selector('a').withText('INICIAR SESIÓN');
        //Input Elements
        this.inputEm = Selector('input').withAttribute('type', 'email');
        this.inputCon = Selector('input').withAttribute('type', 'password');
        //Button Elements
        this.inputTaste = Selector('button').withAttribute('type', 'submit');
    }
}
