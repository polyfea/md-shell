import{i as f,a as v,n as p,m as u,c as w}from"./custom-element-safe-BOSCndex.js";import{i as y,a as b,b as a}from"./iframe-D8eooYpM.js";var g=Object.defineProperty,_=Object.getOwnPropertyDescriptor,m=t=>{throw TypeError(t)},c=(t,e,o,n)=>{for(var r=n>1?void 0:n?_(e,o):e,s=t.length-1,l;s>=0;s--)(l=t[s])&&(r=(n?l(e,o,r):l(r))||r);return n&&r&&g(e,o,r),r},P=(t,e,o)=>e.has(t)||m("Cannot "+o),x=(t,e,o)=>e.has(t)?m("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),D=(t,e,o)=>(P(t,e,"access private method"),o),d,h;f();v();let i=class extends b{constructor(){super(...arguments),x(this,d),this.drawerDisabled=!1,this.contentPosition="top"}render(){return a`
      <div class="primary-action">
        ${this.drawerDisabled?"":a`
              <md-icon-button class="drawer-button" @click=${D(this,d,h)} aria-label=${u("open drawer",{id:"polyfea.open-drawer"})}>
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
    `}};d=new WeakSet;h=function(){this.dispatchEvent(new Event("drawer-opened",{bubbles:!0,composed:!0}))};i.styles=y`
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
  `;c([p({type:Boolean,attribute:"drawer-disabled"})],i.prototype,"drawerDisabled",2);c([p({attribute:"content-position"})],i.prototype,"contentPosition",2);i=c([w("polyfea-md-rail")],i);
