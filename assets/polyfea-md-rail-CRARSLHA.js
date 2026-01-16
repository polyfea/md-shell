const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./icon-button-A8NcbOWo.js","./tslib.es6-kHcLnhpD.js","./property-nuuqNUcm.js","./iframe-COkunwa9.js","./preload-helper-PPVm8Dsz.js","./md-focus-ring-BrDRz4hH.js","./animation-D6uxkkp3.js","./ripple-DcTYAG17.js","./state-CRD9jzTh.js","./query-x48B6FB_.js","./static-Vz6p4yrX.js","./delegate-C9amHCxT.js","./icon-ITA9BrOZ.js"])))=>i.map(i=>d[i]);
import{_ as m}from"./preload-helper-PPVm8Dsz.js";import{n as p,m as v,t as f}from"./property-nuuqNUcm.js";import{i as _,a as b,b as a}from"./iframe-COkunwa9.js";var w=Object.defineProperty,g=Object.getOwnPropertyDescriptor,h=e=>{throw TypeError(e)},c=(e,t,o,n)=>{for(var i=n>1?void 0:n?g(t,o):t,s=e.length-1,l;s>=0;s--)(l=e[s])&&(i=(n?l(t,o,i):l(i))||i);return n&&i&&w(t,o,i),i},y=(e,t,o)=>t.has(e)||h("Cannot "+o),P=(e,t,o)=>t.has(e)?h("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),x=(e,t,o)=>(y(e,t,"access private method"),o),d,u;globalThis.customElements.get("md-icon-button")||m(()=>import("./icon-button-A8NcbOWo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url);globalThis.customElements.get("md-icon")||m(()=>import("./icon-ITA9BrOZ.js"),__vite__mapDeps([12,1,2,3,4]),import.meta.url);let r=class extends b{constructor(){super(...arguments),P(this,d),this.drawerDisabled=!1,this.contentPosition="top"}render(){return a`
      <div class="primary-action">
        ${this.drawerDisabled?"":a`
              <md-icon-button class="drawer-button" @click=${x(this,d,u)} aria-label=${v("open drawer",{id:"polyfea.open-drawer"})}>
                <md-icon>menu</md-icon>
              </md-icon-button>
            `}
        <slot name="primary-action"></slot>
      </div>

      <div class="content">
        ${this.contentPosition==="middle"||this.contentPosition==="bottom"?a`<div class="glue"></div>`:""}
        <slot></slot>
        ${this.contentPosition==="middle"||this.contentPosition==="top"?a`<div class="glue"></div>`:""}
      </div>
    `}};d=new WeakSet;u=function(){this.dispatchEvent(new Event("drawer-opened",{bubbles:!0,composed:!0}))};r.styles=_`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: 100%;
      min-width: 80px;
      box-sizing: border-box;
      padding: 1rem 0;
      background-color: var(--md-sys-color-surface);
      color: var(--md-sys-color-on-surface);
    }

    .primary-action {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
      width: 100%;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
      gap: 0.75rem;
      overflow-y: auto;
    }

    .glue {
      flex-grow: 1;
    }
    
    /* Hide scrollbar for cleaner look */
    .content::-webkit-scrollbar {
      display: none;
    }
    .content {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `;c([p({type:Boolean,attribute:"drawer-disabled"})],r.prototype,"drawerDisabled",2);c([p({attribute:"content-position"})],r.prototype,"contentPosition",2);r=c([f("polyfea-md-rail")],r);
