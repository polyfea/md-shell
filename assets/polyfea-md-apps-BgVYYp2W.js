import{i as l,a as c,b as f}from"./iframe-B2ViYexA.js";import{n as d,c as g}from"./custom-element-safe-Bg5r26EH.js";import{r as h}from"./state-DD2bYZYH.js";var m=Object.defineProperty,b=Object.getOwnPropertyDescriptor,r=(p,e,o,n)=>{for(var t=n>1?void 0:n?b(e,o):e,s=p.length-1,a;s>=0;s--)(a=p[s])&&(t=(n?a(e,o,t):a(t))||t);return n&&t&&m(e,o,t),t};let i=class extends c{constructor(){super(...arguments),this.applicationsContext="applications",this._transitioning=!0}connectedCallback(){super.connectedCallback(),this._transitioning=!0}render(){return this._transitioning&&setTimeout(()=>this._transitioning=!1,10),f`
      <div class=${"wrapper"+(this._transitioning?" begin-transition":"")}>
        <polyfea-context name=${this.applicationsContext} style="display: contents;">
          <slot></slot>
        </polyfea-context>
      </div>
    `}};i.styles=l`
    :host {
      box-sizing: border-box;
      width: 100%;
      height: fit-content;
      display: flex;
      padding: 1rem;
    }

    .wrapper {
      box-sizing: border-box;
      height: fit-content;
      padding: 1rem;
      width: 100%;
      margin: 0 auto;
      justify-content: space-evenly;
      display: flex;
      flex-flow: row wrap;
      gap: 1rem;
      align-content: start;
      transition: all 0.3s ease-in-out;
      opacity: 1;
    }

    .wrapper.begin-transition {
      opacity: 0;
    }

    * {
      box-sizing: border-box;
      width: 12rem;
      height: 12rem;
    }

    polyfea-context {
      display: contents;
    }
  `;r([d({attribute:"applications-context"})],i.prototype,"applicationsContext",2);r([h()],i.prototype,"_transitioning",2);i=r([g("polyfea-md-apps")],i);
