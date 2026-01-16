const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./icon-button-A8NcbOWo.js","./tslib.es6-kHcLnhpD.js","./property-nuuqNUcm.js","./iframe-COkunwa9.js","./preload-helper-PPVm8Dsz.js","./md-focus-ring-BrDRz4hH.js","./animation-D6uxkkp3.js","./ripple-DcTYAG17.js","./state-CRD9jzTh.js","./query-x48B6FB_.js","./static-Vz6p4yrX.js","./delegate-C9amHCxT.js","./icon-ITA9BrOZ.js"])))=>i.map(i=>d[i]);
import{_ as c}from"./preload-helper-PPVm8Dsz.js";import{n as h,m as b,t as _}from"./property-nuuqNUcm.js";import{i as v,a as f,A as g,b as d}from"./iframe-COkunwa9.js";var w=Object.defineProperty,y=Object.getOwnPropertyDescriptor,p=t=>{throw TypeError(t)},m=(t,e,r,a)=>{for(var o=a>1?void 0:a?y(e,r):e,i=t.length-1,l;i>=0;i--)(l=t[i])&&(o=(a?l(e,r,o):l(o))||o);return a&&o&&w(e,r,o),o},x=(t,e,r)=>e.has(t)||p("Cannot "+r),D=(t,e,r)=>e.has(t)?p("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),E=(t,e,r)=>(x(t,e,"access private method"),r),n,u;globalThis.customElements.get("md-icon-button")||c(()=>import("./icon-button-A8NcbOWo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url);globalThis.customElements.get("md-icon")||c(()=>import("./icon-ITA9BrOZ.js"),__vite__mapDeps([12,1,2,3,4]),import.meta.url);let s=class extends f{constructor(){super(...arguments),D(this,n),this.closeDisabled=!1}render(){return d`
      ${this.closeDisabled?g:d`
            <div class="close-button-wrapper">
              <md-icon-button class="close-button" @click=${E(this,n,u)} aria-label=${b("close drawer",{id:"polyfea.close-drawer"})}>
                <md-icon>close_small</md-icon>
              </md-icon-button>
            </div>
          `}
      <div class="content">
        <slot></slot>
      </div>
    `}};n=new WeakSet;u=function(){this.dispatchEvent(new Event("drawer-closed",{bubbles:!0,composed:!0}))};s.styles=v`
  :host {
    color: var(--md-sys-color-on-surface);
    position: relative;
    display: block;
    height: 100%;
    width: 100%;
    padding: 1rem;
    overflow-y: auto;
    box-sizing: border-box;
    }

    ::-webkit-scrollbar {
    height: 4px;
    width: 4px;
    background-color: var(--highlight-10, rgba(0, 0, 0, 0.1));
    border-radius: 2px;
    }

    ::-webkit-scrollbar-thumb {
    background: var(--highlight-20, rgba(0, 0, 0, 0.2));
    border-radius: 2px;
    }

    .content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-content: start;
    justify-items: end;
    }

    .close-button-wrapper {
    display: flex;
    justify-content: flex-end;
  }`;m([h({type:Boolean,attribute:"close-disabled"})],s.prototype,"closeDisabled",2);s=m([_("polyfea-md-drawer")],s);
