import{i as s,a as c,b as m}from"./iframe-D8eooYpM.js";import{b as d,c as v}from"./custom-element-safe-BOSCndex.js";var f=Object.getOwnPropertyDescriptor,g=(t,a,l,n)=>{for(var e=n>1?void 0:n?f(a,l):a,r=t.length-1,i;r>=0;r--)(i=t[r])&&(e=i(e)||e);return e};d();let o=class extends c{render(){return m`
      <md-elevation></md-elevation>
      <slot></slot>
    `}};o.styles=s`
    :host {
      position: relative;
      display: flex;
      flex-direction: row;
      gap: 0.75rem;
      width: 100%;
      height: 100%;
      max-height: 5rem;
      align-content: space-around;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 0.75rem;
      background-color: var(--md-sys-color-surface-container);
      color: var(--md-sys-color-on-surface);
      --md-elevation-level: 2;
    }
  `;o=g([v("polyfea-md-navigation-bar")],o);
