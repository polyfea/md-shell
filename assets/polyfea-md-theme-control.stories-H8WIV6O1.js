import{b as S,c as d}from"./iframe-YCl51QGZ.js";import{P as E}from"./polyfea-md-theme-control-CN-JaOJV.js";import"./preload-helper-BXAtxqEK.js";import"./custom-element-safe-BAAqKlB5.js";import"./state-QEA-qLZY.js";import"./localized-controller-DeZmdXlP.js";const{fn:v,expect:t,waitFor:T}=__STORYBOOK_MODULE_TEST__,o=E._THEME_STORAGE_KEY,B={title:"Custom Elements/polyfea-md-theme-control",component:"polyfea-md-theme-control",tags:["autodocs"],render:e=>S`
    <polyfea-md-theme-control
      variant=${e.variant}
      control=${e.control}
      default-text-size=${e.defaultTextSize}
      @polyfea-theme-changed=${e.onThemeChanged}
    ></polyfea-md-theme-control>
  `,argTypes:{variant:{control:{type:"select"},options:["button","menu-item","preset"]},control:{control:{type:"select"},options:["theme-toggle","text-increase","text-decrease","reset-font"]},onThemeChanged:{action:"polyfea-theme-changed"}},args:{variant:"button",control:"theme-toggle",onThemeChanged:v(),defaultTextSize:16.42},parameters:{}},h={parameters:{docs:{description:{story:"Button variant configured to toggle between light and dark themes."}}},args:{control:"theme-toggle"},play:async({canvasElement:e,args:r,step:l})=>{const n=e.querySelector("polyfea-md-theme-control"),i=d(n);localStorage.removeItem(o);const c=n._theme;await l("Click toggle button",async()=>{await(await i.findByShadowRole("button")).click(),await T(async()=>await t(r.onThemeChanged).toHaveBeenCalled());const a=r.onThemeChanged.mock.calls[0][0];await t(a.detail.isDark).not.toBe(c.isDark);const s=JSON.parse(localStorage.getItem(o)||"{}");await t(s).toHaveProperty("isDark",a.detail.isDark),await t(s).toHaveProperty("scale",a.detail.scale),localStorage.removeItem(o)})}},p={parameters:{docs:{description:{story:"Button variant configured to increase the root font size."}}},args:{control:"text-increase"},play:async({canvasElement:e,args:r,step:l})=>{const n=e.querySelector("polyfea-md-theme-control"),i=d(n);localStorage.removeItem(o);const c=n._theme;await l("Click toggle button",async()=>{await(await i.findByShadowRole("button")).click(),await T(async()=>await t(r.onThemeChanged).toHaveBeenCalled());const a=r.onThemeChanged.mock.calls[0][0];await t(a.detail.scale).toBeGreaterThan(c.scale);const s=JSON.parse(localStorage.getItem(o)||"{}");await t(s).toHaveProperty("isDark",a.detail.isDark),await t(s).toHaveProperty("scale",a.detail.scale),localStorage.removeItem(o)})}},g={parameters:{docs:{description:{story:"Button variant configured to decrease the root font size."}}},args:{control:"text-decrease"},play:async({canvasElement:e,args:r,step:l})=>{const n=e.querySelector("polyfea-md-theme-control"),i=d(n);localStorage.removeItem(o);const c=n._theme;await l("Click toggle button",async()=>{await(await i.findByShadowRole("button")).click(),await T(async()=>await t(r.onThemeChanged).toHaveBeenCalled());const a=r.onThemeChanged.mock.calls[0][0];await t(a.detail.scale).toBeLessThan(c.scale);const s=JSON.parse(localStorage.getItem(o)||"{}");await t(s).toHaveProperty("isDark",a.detail.isDark),await t(s).toHaveProperty("scale",a.detail.scale),localStorage.removeItem(o)})}},y={parameters:{docs:{description:{story:"Button variant configured to reset the root font size."}}},args:{control:"reset-font"},play:async({canvasElement:e,args:r,step:l})=>{const n=e.querySelector("polyfea-md-theme-control"),i=d(n);localStorage.removeItem(o);const c=n._theme;c.scale=1.5,await l("Click toggle button",async()=>{await(await i.findByShadowRole("button")).click(),await T(async()=>await t(r.onThemeChanged).toHaveBeenCalled());const a=r.onThemeChanged.mock.calls[0][0];await t(a.detail.scale).toBe(1);const s=JSON.parse(localStorage.getItem(o)||"{}");await t(s).toHaveProperty("isDark",a.detail.isDark),await t(s).toHaveProperty("scale",a.detail.scale),localStorage.removeItem(o)})}},u={parameters:{docs:{description:{story:"Menu item variant, suitable for inclusion inside an md-menu."}}},args:{variant:"menu-item",control:"reset-font"},render:e=>S`
    <div style="background: var(--md-sys-color-surface); width: 250px; padding: 10px; border: 1px solid var(--md-sys-color-outline);">
      <polyfea-md-theme-control .variant=${e.variant} .control=${e.control} @polyfea-theme-changed=${e.onThemeChanged}></polyfea-md-theme-control>
    </div>
  `},w={tags:["test"],parameters:{docs:{description:{story:"Button variant configured to toggle between light and dark themes."}}},args:{control:"theme-toggle"},play:async({canvasElement:e,args:r,step:l})=>{const n=e.querySelector("polyfea-md-theme-control");d(n),localStorage.removeItem(o),n._theme,await l("load theme with Theme",async()=>{const c=window.matchMedia("(prefers-color-scheme: dark)").matches;localStorage.setItem(o,JSON.stringify({isDark:!c,scale:1.25,followSystemTheme:!0}));const m=E.loadTheme();await t(m.isDark).toBe(c),await t(m.scale).toBe(1.25)}),localStorage.removeItem(o)}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Button variant configured to toggle between light and dark themes.'
      }
    }
  },
  args: {
    control: 'theme-toggle'
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const control = canvasElement.querySelector('polyfea-md-theme-control') as PolyfeaMdThemeControl;
    const shadow = withinShadow(control as HTMLElement);

    // Ensure we start from a clean state
    localStorage.removeItem(THEME_STORAGE_KEY);
    const currentTheme = (control as any)._theme;
    await step('Click toggle button', async () => {
      const button = await shadow.findByShadowRole('button');
      await button.click();
      await waitFor(async () => await expect(args.onThemeChanged).toHaveBeenCalled());
      const call = (args.onThemeChanged as any).mock.calls[0][0];
      await expect(call.detail.isDark).not.toBe(currentTheme.isDark);
      const theme = JSON.parse(localStorage.getItem(THEME_STORAGE_KEY) || '{}');
      await expect(theme).toHaveProperty('isDark', call.detail.isDark);
      await expect(theme).toHaveProperty('scale', call.detail.scale);
      // Clean up
      localStorage.removeItem(THEME_STORAGE_KEY);
    });
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Button variant configured to increase the root font size.'
      }
    }
  },
  args: {
    control: 'text-increase'
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const control = canvasElement.querySelector('polyfea-md-theme-control') as PolyfeaMdThemeControl;
    const shadow = withinShadow(control as HTMLElement);

    // Ensure we start from a clean state
    localStorage.removeItem(THEME_STORAGE_KEY);
    const currentTheme = (control as any)._theme;
    await step('Click toggle button', async () => {
      const button = await shadow.findByShadowRole('button');
      await button.click();
      await waitFor(async () => await expect(args.onThemeChanged).toHaveBeenCalled());
      const call = (args.onThemeChanged as any).mock.calls[0][0];
      await expect(call.detail.scale).toBeGreaterThan(currentTheme.scale);
      const theme = JSON.parse(localStorage.getItem(THEME_STORAGE_KEY) || '{}');
      await expect(theme).toHaveProperty('isDark', call.detail.isDark);
      await expect(theme).toHaveProperty('scale', call.detail.scale);
      // Clean up
      localStorage.removeItem(THEME_STORAGE_KEY);
    });
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Button variant configured to decrease the root font size.'
      }
    }
  },
  args: {
    control: 'text-decrease'
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const control = canvasElement.querySelector('polyfea-md-theme-control') as PolyfeaMdThemeControl;
    const shadow = withinShadow(control as HTMLElement);

    // Ensure we start from a clean state
    localStorage.removeItem(THEME_STORAGE_KEY);
    const currentTheme = (control as any)._theme;
    await step('Click toggle button', async () => {
      const button = await shadow.findByShadowRole('button');
      await button.click();
      await waitFor(async () => await expect(args.onThemeChanged).toHaveBeenCalled());
      const call = (args.onThemeChanged as any).mock.calls[0][0];
      await expect(call.detail.scale).toBeLessThan(currentTheme.scale);
      const theme = JSON.parse(localStorage.getItem(THEME_STORAGE_KEY) || '{}');
      await expect(theme).toHaveProperty('isDark', call.detail.isDark);
      await expect(theme).toHaveProperty('scale', call.detail.scale);
      // Clean up
      localStorage.removeItem(THEME_STORAGE_KEY);
    });
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Button variant configured to reset the root font size.'
      }
    }
  },
  args: {
    control: 'reset-font'
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const control = canvasElement.querySelector('polyfea-md-theme-control') as PolyfeaMdThemeControl;
    const shadow = withinShadow(control as HTMLElement);

    // Ensure we start from a clean state
    localStorage.removeItem(THEME_STORAGE_KEY);
    const currentTheme = (control as any)._theme;
    currentTheme.scale = 1.5; // Simulate increased size

    await step('Click toggle button', async () => {
      const buttonReset = await shadow.findByShadowRole('button');
      await buttonReset.click();
      await waitFor(async () => await expect(args.onThemeChanged).toHaveBeenCalled());
      const call = (args.onThemeChanged as any).mock.calls[0][0];
      await expect(call.detail.scale).toBe(1);
      const theme = JSON.parse(localStorage.getItem(THEME_STORAGE_KEY) || '{}');
      await expect(theme).toHaveProperty('isDark', call.detail.isDark);
      await expect(theme).toHaveProperty('scale', call.detail.scale);
      // Clean up
      localStorage.removeItem(THEME_STORAGE_KEY);
    });
  }
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Menu item variant, suitable for inclusion inside an md-menu.'
      }
    }
  },
  args: {
    variant: 'menu-item',
    control: 'reset-font'
  },
  render: args => html\`
    <div style="background: var(--md-sys-color-surface); width: 250px; padding: 10px; border: 1px solid var(--md-sys-color-outline);">
      <polyfea-md-theme-control .variant=\${args.variant} .control=\${args.control} @polyfea-theme-changed=\${args.onThemeChanged}></polyfea-md-theme-control>
    </div>
  \`
}`,...u.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['test'],
  parameters: {
    docs: {
      description: {
        story: 'Button variant configured to toggle between light and dark themes.'
      }
    }
  },
  args: {
    control: 'theme-toggle'
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const control = canvasElement.querySelector('polyfea-md-theme-control') as PolyfeaMdThemeControl;
    const shadow = withinShadow(control as HTMLElement);

    // Ensure we start from a clean state
    localStorage.removeItem(THEME_STORAGE_KEY);
    const currentTheme = (control as any)._theme;
    await step('load theme with Theme', async () => {
      const query = window.matchMedia('(prefers-color-scheme: dark)');
      const shallBeDark = query.matches;
      localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify({
        isDark: !shallBeDark,
        scale: 1.25,
        followSystemTheme: true
      }));
      const theme = PolyfeaMdThemeControl.loadTheme();
      await expect(theme.isDark).toBe(shallBeDark);
      await expect(theme.scale).toBe(1.25);
    });
    // Clean up
    localStorage.removeItem(THEME_STORAGE_KEY);
  }
}`,...w.parameters?.docs?.source}}};const x=["ThemeToggle","TextIncrease","TextDecrease","TextReset","MenuItemVariant","TEST_ThemeToggleWithStoredPreset"];export{u as MenuItemVariant,w as TEST_ThemeToggleWithStoredPreset,g as TextDecrease,p as TextIncrease,y as TextReset,h as ThemeToggle,x as __namedExportsOrder,B as default};
