import{i as y,a as _,e as x,n as m,m as h,c as $}from"./custom-element-safe-BOSCndex.js";import{u as k}from"./localized-controller-DJm-aJjz.js";import{i as E,a as M,b as o,A as P}from"./iframe-D8eooYpM.js";import{e as A}from"./query-x48B6FB_.js";var D=Object.defineProperty,I=Object.getOwnPropertyDescriptor,g=a=>{throw TypeError(a)},s=(a,e,t,d)=>{for(var n=d>1?void 0:d?I(e,t):e,c=a.length-1,p;c>=0;c--)(p=a[c])&&(n=(d?p(e,t,n):p(n))||n);return d&&n&&D(e,t,n),n},S=(a,e,t)=>e.has(a)||g("Cannot "+t),C=(a,e,t)=>e.has(a)?g("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,t),l=(a,e,t)=>(S(a,e,"access private method"),t),i,f,u,v,b,w;y();_();x();let r=class extends M{constructor(){super(),C(this,i),this.headline="Polyfea",this.leadingIcon="drawer",this.variant="centered",this.moreActionsDisabled=!1,k(this)}render(){return o`
      <div class="${this.variant}-wrapper">
        <slot name="leading" class="leading">
            ${l(this,i,f).call(this)}
        </slot>
        
        <div class="headline">
          <slot name="headline"><h1>${this.headline}</h1></slot>
        </div>

        ${this.variant==="centered"?l(this,i,u).call(this):o`
            <div class="trailing">
              <slot name="trailing"></slot>
            </div>
            ${l(this,i,u).call(this)}
          `}
      </div>
    `}};i=new WeakSet;f=function(){return this.leadingIcon==="back"?o`
        <md-icon-button class="back-button" @click=${l(this,i,w)} aria-label=${h("back",{id:"polyfea.navigate-back"})}>
          <md-icon>arrow_back</md-icon>
        </md-icon-button>
      `:this.leadingIcon==="drawer"?o`
        <md-icon-button class="drawer-button" @click=${l(this,i,b)} aria-label=${h("open drawer",{id:"polyfea.open-drawer"})}>
          <md-icon>menu</md-icon>
        </md-icon-button>
      `:o`<div></div>`};u=function(){return o`
      <div class="menu">
        ${this.moreActionsDisabled?P:o`
              <md-icon-button id="topbar-menu-anchor" @click=${l(this,i,v)} aria-label=${h("more actions",{id:"polyfea.more-actions"})}>
                <md-icon>more_vert</md-icon>
              </md-icon-button>
              <md-menu anchor="topbar-menu-anchor" anchor-corner="end-end" menu-corner="start-end" has-overflow>
                <slot name="menu"></slot>
              </md-menu>
            `}
      </div>
    `};v=function(){this.menuEl&&(this.menuEl.open=!this.menuEl.open)};b=function(){this.dispatchEvent(new Event("drawer-opened",{bubbles:!0,composed:!0}))};w=function(){this.dispatchEvent(new Event("back",{bubbles:!0,composed:!0}))};r.styles=E`
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
  `;s([m()],r.prototype,"headline",2);s([m({attribute:"leading-icon"})],r.prototype,"leadingIcon",2);s([m()],r.prototype,"variant",2);s([m({type:Boolean,attribute:"more-actions-disabled"})],r.prototype,"moreActionsDisabled",2);s([A("md-menu")],r.prototype,"menuEl",2);r=s([$("polyfea-md-topbar")],r);
