import './css/style.css';
import { MainComponent } from "./js/components/MainComponent.js";
import { LoginService } from './js/services/LoginService.js';
import { initDB } from "./js/store/DB.js";


if (module.hot) {
    module.hot.accept();
}

console.log('init');


const application = new MainComponent({
    anchor : document.body
});
