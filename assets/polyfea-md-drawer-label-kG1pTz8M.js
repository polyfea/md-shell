import{i as p,a as m,b as c}from"./iframe-COkunwa9.js";import{n,t as f}from"./property-nuuqNUcm.js";import{l as h}from"./localization-CQ6Qfdx9.js";var u=Object.defineProperty,y=Object.getOwnPropertyDescriptor,i=(d,t,a,l)=>{for(var e=l>1?void 0:l?y(t,a):t,o=d.length-1,s;o>=0;o--)(s=d[o])&&(e=(l?s(t,a,e):s(e))||e);return l&&e&&u(t,a,e),e};let r=class extends m{constructor(){super(...arguments),this.headline="",this.headlineLocalizedId=""}render(){return c`
      ${h(this.headline,this.headlineLocalizedId)}
      <slot></slot>
    `}};r.styles=p`
      :host {
        display: block;
        font: var(--md-sys-typescale-title-medium, 800 0.85rem / 1.25rem 'Roboto Flex', Roboto, sans-serif);
        letter-spacing: var(--md-sys-typescale-title-medium-letter-spacing, 0.00625rem);
        padding-left: 1.25rem;
        color: var(--md-sys-color-on-surface-variant);
      }
  `;i([n({attribute:"headline"})],r.prototype,"headline",2);i([n({attribute:"headline-localized-id"})],r.prototype,"headlineLocalizedId",2);r=i([f("polyfea-md-drawer-label")],r);
