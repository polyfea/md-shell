const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./elevation-C-Fy3i-6.js","./tslib.es6-kHcLnhpD.js","./property-nuuqNUcm.js","./iframe-COkunwa9.js","./preload-helper-PPVm8Dsz.js"])))=>i.map(i=>d[i]);
import{_ as s}from"./preload-helper-PPVm8Dsz.js";import{i as m,a as d,b as c}from"./iframe-COkunwa9.js";import{t as v}from"./property-nuuqNUcm.js";var g=Object.getOwnPropertyDescriptor,p=(t,a,n,i)=>{for(var e=i>1?void 0:i?g(a,n):a,r=t.length-1,l;r>=0;r--)(l=t[r])&&(e=l(e)||e);return e};globalThis.customElements.get("md-elevation")||s(()=>import("./elevation-C-Fy3i-6.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);let o=class extends d{render(){return c`
      <md-elevation></md-elevation>
      <slot></slot>
    `}};o.styles=m`
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
  `;o=p([v("polyfea-md-navigation-bar")],o);
