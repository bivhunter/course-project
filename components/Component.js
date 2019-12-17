const template = document.createElement('template');
template.innerHTML ="default template";


export class Component extends HTMLElement {
    constructor(props){
        super();
        this.attachShadow({mode: 'open'});
        //this.template = template;

        this.actionService = props.actionService;
        this.eventService = props.eventService;
        this.anchor = props.anchor;

        this.props = props;
        this.onInit();
        //this.state = props.state;



        //this.props.anchor.appendChild(this);

        // this.render();
    }

    connectedCallback() {
        // this.render();
       //this.addListeners();
    }


    onInit() {
        console.log('init ', this);
    }

    set state(value) {
        this._state = {...value};
        this.props.state = this._state;
        this.render();
    }

    get state() {
        return this._state;
    }


    set props(value) {
        this._props = {
            ...this.props,
            ...value
        };
       // console.log(this, this._props);

    }

    get props() {
        return this._props;
    }


    set template(template) {
        this._template = template.content.cloneNode( true );
       // console.log('template', this._template, template )
        this.shadowRoot.appendChild(this._template);
    }

    get template() {
        return this._template;
    }

    sendState(componentList, state) {
        componentList.forEach((component) => component.state = state);
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

//customElements.define('my-component-task-list', Component);