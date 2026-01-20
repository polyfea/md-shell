import{i as m,a as c,b as p}from"./iframe-YCl51QGZ.js";import{n,c as f}from"./custom-element-safe-BAAqKlB5.js";import{l as h}from"./localization-DXaVgzLv.js";var u=Object.defineProperty,y=Object.getOwnPropertyDescriptor,i=(d,r,l,a)=>{for(var e=a>1?void 0:a?y(r,l):r,o=d.length-1,s;o>=0;o--)(s=d[o])&&(e=(a?s(r,l,e):s(e))||e);return a&&e&&u(r,l,e),e};let t=class extends c{constructor(){super(...arguments),this.headline="",this.headlineLocalizedId=""}render(){return p`
      ${h(this.headline,this.headlineLocalizedId)}
      <slot></slot>
    `}};t.styles=m`
      :host {
        display: block;
        font: var(--md-sys-typescale-title-medium, 800 0.85rem / 1.25rem 'Roboto Flex', Roboto, sans-serif);
        letter-spacing: var(--md-sys-typescale-title-medium-letter-spacing, 0.00625rem);
        padding-left: 1.25rem;
        color: var(--md-sys-color-on-surface-variant);
      }
  `;i([n({attribute:"headline"})],t.prototype,"headline",2);i([n({attribute:"headline-localized-id"})],t.prototype,"headlineLocalizedId",2);t=i([f("polyfea-md-drawer-label")],t);
