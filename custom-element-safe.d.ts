import { LitElement } from 'lit';
export declare const customElementSafe: (tagName: string) => (classConstructor: typeof LitElement) => any;
export declare const importElementModuleSafely: (tagName: string, importFn: () => Promise<any>) => Promise<void>;
export declare const importMdMenuSafely: () => Promise<void>;
export declare const importMdMenuItemSafely: () => Promise<void>;
export declare const importMdIconSafely: () => Promise<void>;
export declare const importMdIconButtonSafely: () => Promise<void>;
export declare const importMdRippleSafely: () => Promise<void>;
export declare const importMdElevationSafely: () => Promise<void>;
