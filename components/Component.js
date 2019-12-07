export class Component extends HTMLElement {
    constructor(props){
        super();
        this.props = props;
    }

    connectedCallback() {
        this.onInit();
        this.attachShadow({mode: 'open'});
        this.addListeners();
        this.render();
        this.renderTemplate();


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
        if(!this._template) {
            this._template = template.content.cloneNode( true );
        }
    }

    get template() {
        return this._template;
    }

    set style(url) {
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('type', 'text/css');
        linkElem.setAttribute('href', url);
        this._style = linkElem;
    }

    get style() {
        return this._style;
    }

    renderTemplate() {
        this.template.append(this.style);
        this.shadowRoot.appendChild(this.template);
    }



}

//ustomElements.define('my-component-task-list', Component);