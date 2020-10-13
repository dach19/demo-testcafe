import {Selector, t} from 'testcafe';

export default class ExamplePage{
    constructor(){
        //Input Elements
        this.inputEmail = Selector('input').withAttribute('type','email');
        this.inputPasswort = Selector('input').withAttribute('type','password');
        this.inputAdd = Selector('input').withAttribute('type','submit');
        this.inputNummer = Selector('input').withAttribute('name','cantidad');
        this.inputAdd = Selector('input').withAttribute('type','submit');
        this.inputNummer = Selector('input').withAttribute('name','cantidad');
        this.inputAdd = Selector('input').withAttribute('type','submit');
        //Button Elements
        this.buttonTaste = Selector('button').withAttribute('type','submit');
        //Span Elements
        this.inputPlus = Selector('span').withAttribute('class','plus');
        this.inputMinus = Selector('span').withAttribute('class','minus');
        //A elements
        this.inputCar = Selector('a').withText("CARRITO");
        this.inputStart = Selector('a').withText("Comienza a comprar aquí.");
        this.inputOrch = Selector('a').withText("Orquídeas");
        this.inputGer = Selector('a').withText("Geranios");
        this.inputRos = Selector('a').withText("Rosas");
        this.inputGir = Selector('a').withText("Girasoles");
    }
}
