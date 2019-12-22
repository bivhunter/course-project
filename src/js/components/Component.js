export class Component extends HTMLElement {
    constructor(props){
        super();
        this.attachShadow({mode: 'open'});
        this.anchor = props.anchor;
        this.props = props;
        this.onInit();
    }

    onInit() {  }

    set state(value) {
        this._state = { ...value };
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
}

