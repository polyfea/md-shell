import{i as b,a as u,n as f,m as v,c as m}from"./custom-element-safe-BOSCndex.js";import{i as w,a as y,A as _,b as c}from"./iframe-D8eooYpM.js";var g=Object.defineProperty,x=Object.getOwnPropertyDescriptor,d=t=>{throw TypeError(t)},p=(t,e,r,o)=>{for(var a=o>1?void 0:o?x(e,r):e,i=t.length-1,l;i>=0;i--)(l=t[i])&&(a=(o?l(e,r,a):l(a))||a);return o&&a&&g(e,r,a),a},D=(t,e,r)=>e.has(t)||d("Cannot "+r),P=(t,e,r)=>e.has(t)?d("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),C=(t,e,r)=>(D(t,e,"access private method"),r),n,h;b();u();let s=class extends y{constructor(){super(...arguments),P(this,n),this.closeDisabled=!1}render(){return c`
      ${this.closeDisabled?_:c`
            <div class="close-button-wrapper">
              <md-icon-button class="close-button" @click=${C(this,n,h)} aria-label=${v("close drawer",{id:"polyfea.close-drawer"})}>
                <md-icon>close_small</md-icon>
              </md-icon-button>
            </div>
          `}
      <div class="content">
        <slot></slot>
      </div>
    `}};n=new WeakSet;h=function(){this.dispatchEvent(new Event("drawer-closed",{bubbles:!0,composed:!0}))};s.styles=w`
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
  }`;p([f({type:Boolean,attribute:"close-disabled"})],s.prototype,"closeDisabled",2);s=p([m("polyfea-md-drawer")],s);
