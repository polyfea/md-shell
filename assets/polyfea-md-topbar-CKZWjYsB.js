const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./icon-button-A8NcbOWo.js","./tslib.es6-kHcLnhpD.js","./property-nuuqNUcm.js","./iframe-COkunwa9.js","./preload-helper-PPVm8Dsz.js","./md-focus-ring-BrDRz4hH.js","./animation-D6uxkkp3.js","./ripple-DcTYAG17.js","./state-CRD9jzTh.js","./query-x48B6FB_.js","./static-Vz6p4yrX.js","./delegate-C9amHCxT.js","./icon-ITA9BrOZ.js","./menu-B6P27oSE.js","./elevation-C-Fy3i-6.js","./shared-_oCurrS6.js"])))=>i.map(i=>d[i]);
import{_ as g}from"./preload-helper-PPVm8Dsz.js";import{n as m,m as h,t as y}from"./property-nuuqNUcm.js";import{u as E}from"./localized-controller-CwSega-m.js";import{i as x,a as $,b as o,A as k}from"./iframe-COkunwa9.js";import{e as P}from"./query-x48B6FB_.js";var A=Object.defineProperty,D=Object.getOwnPropertyDescriptor,f=e=>{throw TypeError(e)},s=(e,t,i,d)=>{for(var n=d>1?void 0:d?D(t,i):t,c=e.length-1,p;c>=0;c--)(p=e[c])&&(n=(d?p(t,i,n):p(n))||n);return d&&n&&A(t,i,n),n},T=(e,t,i)=>t.has(e)||f("Cannot "+i),O=(e,t,i)=>t.has(e)?f("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),l=(e,t,i)=>(T(e,t,"access private method"),i),r,v,u,b,_,w;globalThis.customElements.get("md-icon-button")||g(()=>import("./icon-button-A8NcbOWo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url);globalThis.customElements.get("md-icon")||g(()=>import("./icon-ITA9BrOZ.js"),__vite__mapDeps([12,1,2,3,4]),import.meta.url);globalThis.customElements.get("md-menu")||g(()=>import("./menu-B6P27oSE.js").then(e=>e.m),__vite__mapDeps([13,1,2,3,4,14,5,6,8,9,15]),import.meta.url);let a=class extends ${constructor(){super(),O(this,r),this.headline="Polyfea",this.leadingIcon="drawer",this.variant="centered",this.moreActionsDisabled=!1,E(this)}render(){return o`
      <div class="${this.variant}-wrapper">
        <slot name="leading" class="leading">
            ${l(this,r,v).call(this)}
        </slot>
        
        <div class="headline">
          <slot name="headline"><h1>${this.headline}</h1></slot>
        </div>

        ${this.variant==="centered"?l(this,r,u).call(this):o`
            <div class="trailing">
              <slot name="trailing"></slot>
            </div>
            ${l(this,r,u).call(this)}
          `}
      </div>
    `}};r=new WeakSet;v=function(){return this.leadingIcon==="back"?o`
        <md-icon-button class="back-button" @click=${l(this,r,w)} aria-label=${h("back",{id:"polyfea.navigate-back"})}>
          <md-icon>arrow_back</md-icon>
        </md-icon-button>
      `:this.leadingIcon==="drawer"?o`
        <md-icon-button class="drawer-button" @click=${l(this,r,_)} aria-label=${h("open drawer",{id:"polyfea.open-drawer"})}>
          <md-icon>menu</md-icon>
        </md-icon-button>
      `:o`<div></div>`};u=function(){return o`
      <div class="menu">
        ${this.moreActionsDisabled?k:o`
              <md-icon-button id="topbar-menu-anchor" @click=${l(this,r,b)} aria-label=${h("more actions",{id:"polyfea.more-actions"})}>
                <md-icon>more_vert</md-icon>
              </md-icon-button>
              <md-menu anchor="topbar-menu-anchor" anchor-corner="end-end" menu-corner="start-end" has-overflow>
                <slot name="menu"></slot>
              </md-menu>
            `}
      </div>
    `};b=function(){this.menuEl&&(this.menuEl.open=!this.menuEl.open)};_=function(){this.dispatchEvent(new Event("drawer-opened",{bubbles:!0,composed:!0}))};w=function(){this.dispatchEvent(new Event("back",{bubbles:!0,composed:!0}))};a.styles=x`
    :host {
      display: block;
      width: 100%;
      height: min-content;
      background-color: inherit;
      color: inherit;
      font: inherit;
      box-sizing: border-box;
    }

    * {
      box-sizing: border-box;
    }

    .centered-wrapper,
    .small-wrapper {
      display: grid;
      height: 4rem;
      grid-template-columns: min-content 1fr auto 3rem;
      grid-template-areas: "leading headline trailing menu";
      padding: 1.25rem 0 0.25rem 0;
      transition: ease-in-out 0.2s;
      align-items: center;
    }

    .centered-wrapper .headline {
      text-align: center;
    }

    .medium-wrapper {
      display: grid;
      height: 7rem;
      grid-template-columns: 3rem 1fr 3rem;
      grid-template-rows: auto 1fr;
      grid-template-areas:
        "leading trailing menu"
        "headline headline headline";
      padding: 1.25rem 0 1.75rem 0;
      transition: ease-in-out 0.2s;
    }

    .large-wrapper {
      display: grid;
      height: 9.5rem;
      grid-template-columns: 3rem 1fr 3rem;
      grid-template-rows: auto 1fr;
      grid-template-areas:
        "leading trailing menu"
        "headline headline headline";
      padding: 1.25rem 0 1.75rem 0;
      transition: ease-in-out 0.2s;
    }
    
    .leading { 
      grid-area: leading; 
    }
    
    .trailing { 
      grid-area: trailing; 
    }
    
    .menu { 
      grid-area: menu; 
      position: relative; 
      margin-right: 1rem; 
      position: relative;
    }
    
    .headline { 
      grid-area: headline; 
      padding: 0 0.5rem; 
    }

    .menu md-menu {
      min-width: 15rem;
    }

    .headline h1 {
      font: var(--md-sys-typescale-title-large,  800 1.375rem / 1.75rem 'Roboto Flex', Roboto, sans-serif);
      letter-spacing: var(--md-sys-typescale-title-large-font-letter-spacing, 0px);
      text-align: left;
      margin: 0 0;
      padding: 8px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: var(--md-sys-color-on-surface);
    }

    .centered-wrapper .headline h1 {
        text-align: center;
    }
    
    .large-wrapper .headline h1 {
      white-space: initial;
      overflow: auto;
      text-overflow: initial;
    }

    .trailing {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    
    @media (max-width: 53.5rem) {
      .centered-wrapper,
      .small-wrapper {
        grid-template-columns: 4rem 1fr 0 4rem;
      }

      .centered-wrapper .trailing,
      .small-wrapper .trailing {
        display: none;
      }
    }
  `;s([m()],a.prototype,"headline",2);s([m({attribute:"leading-icon"})],a.prototype,"leadingIcon",2);s([m()],a.prototype,"variant",2);s([m({type:Boolean,attribute:"more-actions-disabled"})],a.prototype,"moreActionsDisabled",2);s([P("md-menu")],a.prototype,"menuEl",2);a=s([y("polyfea-md-topbar")],a);
