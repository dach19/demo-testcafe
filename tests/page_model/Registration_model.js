import {Selector, t} from 'testcafe';

export default class ExamplePage{
    constructor(){
        //A elements
        this.inputReg = Selector('a').withText("REGISTRARSE");
        //Input Elements
        this.inputName = Selector('input').withAttribute('type','text');
        this.inputEm = Selector('input').withAttribute('type','email');
        this.inputPas = Selector('input').withAttribute('type','password');
        this.inputConPas = Selector('input').withAttribute('name','contrasenia_confirmar');
        //Button Elements
        this.buttonCrear = Selector('button').withAttribute('id','enviar')
        
    }
}
