import { LitElement } from 'lit';

export const customElementSafe = (tagName: string) => {
  return (classConstructor: typeof LitElement) => {
    if (!customElements.get(tagName)) {
      customElements.define(tagName, classConstructor);
    }
    return classConstructor as any;
  };
};

export const importElementModuleSafely = async (tagName: string, importFn: () => Promise<any>) => {
  if (!globalThis.customElements.get(tagName)) {
    await importFn();
  }
}

export const importMdMenuSafely = () => importElementModuleSafely('md-menu',  () => import("@material/web/menu/menu.js"));
export const importMdMenuItemSafely = () => importElementModuleSafely('md-menu-item',  () => import("@material/web/menu/menu-item.js"));
export const importMdIconSafely = () => importElementModuleSafely('md-icon',  () => import("@material/web/icon/icon.js"));
export const importMdIconButtonSafely = () => importElementModuleSafely('md-icon-button',  () => import("@material/web/iconbutton/icon-button.js"));
export const importMdRippleSafely = () => importElementModuleSafely('md-ripple',  () => import("@material/web/ripple/ripple.js"));
export const importMdElevationSafely = () => importElementModuleSafely('md-elevation',  () => import("@material/web/elevation/elevation.js"));