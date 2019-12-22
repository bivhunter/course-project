import './css/style.css';
import { MainComponent } from "./js/components/MainComponent.js";

if (module.hot) {
    module.hot.accept();
}

const application = new MainComponent({
    anchor : document.body
});
