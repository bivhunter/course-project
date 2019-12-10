const defaultTemplate = document.createElement('template');



export class Component extends HTMLElement {
    constructor(props){
        super();
        this.attachShadow({mode: 'open'});
        this._template = defaultTemplate;

        this.actionService = props.actionService;
        this.eventService = props.eventService;

        this._props = props;
        this.onInit();
        this.props.anchor.appendChild(this);

        // this.render();
    }

    connectedCallback() {
        this.render();
       // this.addListeners();
    }


    onInit() {

    }

    set props(value) {
        this._props = {
            ...this.props,
            ...value
        };
        console.log(this, this._props);
        this.render();
    }

    get props() {
        return this._props;
    }


    set template(template) {
        this._template = template.content.cloneNode( true );
        console.log(this._template, template, 'template')
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