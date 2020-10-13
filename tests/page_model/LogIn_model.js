import {Selector, t} from 'testcafe';

export default class LoginPage{
    constructor(){
        //Input Elements
        this.inputEmail = Selector('input').withAttribute('type','email');
        this.inputPasswort = Selector('input').withAttribute('type','password');
        this.inputEmFace = Selector('input').withAttribute('type','text');
        this.inputPassFace = Selector('input').withAttribute('type','password');
        this.inputEmGm = Selector('input').withAttribute('id','identifierId');
        this.inputEmUp = Selector('input').withAttribute('name','username');
        this.inputPassUp = Selector('input').withAttribute('id','Passwd');
        this.buttonAnmeldungUp = Selector('input').withAttribute('name','signIn');
        //Button Elements
        this.buttonTaste = Selector('button').withAttribute('type','submit');
        this.buttonAnmeldung = Selector('button').withAttribute('id','loginbutton');
        this.buttonVerTaste = Selector('button').withAttribute('type','submit');
        //Span Elements
        this.spanFace = Selector('span').withText("Entrar con Facebook");
        this.spanGm = Selector('span').withText("Entrar con Google");
        this.buttonAnmeldungGm = Selector('span').withText("Siguiente");
        //A elements
        this.inputVergessen = Selector('a').withText("¿Olvidaste tu contraseña? Haz clic aquí para cambiarla.");
    }
}
