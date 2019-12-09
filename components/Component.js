const defaultTemplate = document.createElement('template');



export class Component extends HTMLElement {
    constructor(props){
        super();
        this.attachShadow({mode: 'open'});
        this.props = props;
        this.template = defaultTemplate;
        this.onInit();
    }

    connectedCallback() {


        this.addListeners();
        this.render();
    }


    onInit() {

    }

    set props(value) {
        this._props = value;
    }

    get props() {
        return this._props;
    }


    set template(template) {
        this._template = template.content.cloneNode( true );
        this.shadowRoot.appendChild(this._template);
    }

    get template() {
        return this._template;
    }

    /*set styleUrl(url) {
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('type', 'text/css');
        linkElem.setAttribute('href', url);
        this.shadowRoot.append(linkElem);
        this._style = linkElem;
    }

    get style() {
        return this._style;
    }
*/




}

//ustomElements.define('my-component-task-list', Component);