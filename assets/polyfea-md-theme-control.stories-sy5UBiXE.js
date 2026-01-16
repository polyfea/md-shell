import{b as v,c as i}from"./iframe-COkunwa9.js";import{P as S}from"./polyfea-md-theme-control-XyeGF3ka.js";import"./preload-helper-PPVm8Dsz.js";import"./property-nuuqNUcm.js";import"./state-CRD9jzTh.js";import"./localized-controller-CwSega-m.js";const{fn:T,expect:t,waitFor:w}=__STORYBOOK_MODULE_TEST__,I={title:"Custom Elements/polyfea-md-theme-control",component:"polyfea-md-theme-control",tags:["autodocs"],render:e=>v`
    <polyfea-md-theme-control
      variant=${e.variant}
      control=${e.control}
      default-text-size=${e.defaultTextSize}
      @theme-changed=${e.onThemeChanged}
    ></polyfea-md-theme-control>
  `,argTypes:{variant:{control:{type:"select"},options:["button","menu-item","preset"]},control:{control:{type:"select"},options:["theme-toggle","text-increase","text-decrease","reset-font"]},onThemeChanged:{action:"theme-changed"}},args:{variant:"button",control:"theme-toggle",onThemeChanged:T(),defaultTextSize:16.42},parameters:{}},h={parameters:{docs:{description:{story:"Button variant configured to toggle between light and dark themes."}}},args:{control:"theme-toggle"},play:async({canvasElement:e,args:n,step:c})=>{const o=e.querySelector("polyfea-md-theme-control"),l=i(o);localStorage.removeItem("theme");const s=o._theme;await c("Click toggle button",async()=>{await(await l.findByShadowRole("button")).click(),await w(async()=>await t(n.onThemeChanged).toHaveBeenCalled());const a=n.onThemeChanged.mock.calls[0][0];await t(a.detail.isDark).not.toBe(s.isDark);const r=JSON.parse(localStorage.getItem("theme")||"{}");await t(r).toHaveProperty("isDark",a.detail.isDark),await t(r).toHaveProperty("scale",a.detail.scale),localStorage.removeItem("theme")})}},d={parameters:{docs:{description:{story:"Button variant configured to increase the root font size."}}},args:{control:"text-increase"},play:async({canvasElement:e,args:n,step:c})=>{const o=e.querySelector("polyfea-md-theme-control"),l=i(o);localStorage.removeItem("theme");const s=o._theme;await c("Click toggle button",async()=>{await(await l.findByShadowRole("button")).click(),await w(async()=>await t(n.onThemeChanged).toHaveBeenCalled());const a=n.onThemeChanged.mock.calls[0][0];await t(a.detail.scale).toBeGreaterThan(s.scale);const r=JSON.parse(localStorage.getItem("theme")||"{}");await t(r).toHaveProperty("isDark",a.detail.isDark),await t(r).toHaveProperty("scale",a.detail.scale),localStorage.removeItem("theme")})}},p={parameters:{docs:{description:{story:"Button variant configured to decrease the root font size."}}},args:{control:"text-decrease"},play:async({canvasElement:e,args:n,step:c})=>{const o=e.querySelector("polyfea-md-theme-control"),l=i(o);localStorage.removeItem("theme");const s=o._theme;await c("Click toggle button",async()=>{await(await l.findByShadowRole("button")).click(),await w(async()=>await t(n.onThemeChanged).toHaveBeenCalled());const a=n.onThemeChanged.mock.calls[0][0];await t(a.detail.scale).toBeLessThan(s.scale);const r=JSON.parse(localStorage.getItem("theme")||"{}");await t(r).toHaveProperty("isDark",a.detail.isDark),await t(r).toHaveProperty("scale",a.detail.scale),localStorage.removeItem("theme")})}},g={parameters:{docs:{description:{story:"Button variant configured to reset the root font size."}}},args:{control:"reset-font"},play:async({canvasElement:e,args:n,step:c})=>{const o=e.querySelector("polyfea-md-theme-control"),l=i(o);localStorage.removeItem("theme");const s=o._theme;s.scale=1.5,await c("Click toggle button",async()=>{await(await l.findByShadowRole("button")).click(),await w(async()=>await t(n.onThemeChanged).toHaveBeenCalled());const a=n.onThemeChanged.mock.calls[0][0];await t(a.detail.scale).toBe(1);const r=JSON.parse(localStorage.getItem("theme")||"{}");await t(r).toHaveProperty("isDark",a.detail.isDark),await t(r).toHaveProperty("scale",a.detail.scale),localStorage.removeItem("theme")})}},u={parameters:{docs:{description:{story:"Menu item variant, suitable for inclusion inside an md-menu."}}},args:{variant:"menu-item",control:"reset-font"},render:e=>v`
    <div style="background: var(--md-sys-color-surface); width: 250px; padding: 10px; border: 1px solid var(--md-sys-color-outline);">
      <polyfea-md-theme-control .variant=${e.variant} .control=${e.control} @theme-changed=${e.onThemeChanged}></polyfea-md-theme-control>
    </div>
  `},y={tags:["test"],parameters:{docs:{description:{story:"Button variant configured to toggle between light and dark themes."}}},args:{control:"theme-toggle"},play:async({canvasElement:e,args:n,step:c})=>{const o=e.querySelector("polyfea-md-theme-control");i(o),localStorage.removeItem("theme"),o._theme,await c("load theme with Theme",async()=>{const s=window.matchMedia("(prefers-color-scheme: dark)").matches;localStorage.setItem("theme",JSON.stringify({isDark:!s,scale:1.25,followSystemTheme:!0}));const m=S.loadTheme();await t(m.isDark).toBe(s),await t(m.scale).toBe(1.25)}),localStorage.removeItem("theme")}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    localStorage.removeItem('theme');
    const currentTheme = (control as any)._theme;
    await step('Click toggle button', async () => {
      const button = await shadow.findByShadowRole('button');
      await button.click();
      await waitFor(async () => await expect(args.onThemeChanged).toHaveBeenCalled());
      const call = (args.onThemeChanged as any).mock.calls[0][0];
      await expect(call.detail.isDark).not.toBe(currentTheme.isDark);
      const theme = JSON.parse(localStorage.getItem('theme') || '{}');
      await expect(theme).toHaveProperty('isDark', call.detail.isDark);
      await expect(theme).toHaveProperty('scale', call.detail.scale);
      // Clean up
      localStorage.removeItem('theme');
    });
  }
}`,...h.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    localStorage.removeItem('theme');
    const currentTheme = (control as any)._theme;
    await step('Click toggle button', async () => {
      const button = await shadow.findByShadowRole('button');
      await button.click();
      await waitFor(async () => await expect(args.onThemeChanged).toHaveBeenCalled());
      const call = (args.onThemeChanged as any).mock.calls[0][0];
      await expect(call.detail.scale).toBeGreaterThan(currentTheme.scale);
      const theme = JSON.parse(localStorage.getItem('theme') || '{}');
      await expect(theme).toHaveProperty('isDark', call.detail.isDark);
      await expect(theme).toHaveProperty('scale', call.detail.scale);
      // Clean up
      localStorage.removeItem('theme');
    });
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    localStorage.removeItem('theme');
    const currentTheme = (control as any)._theme;
    await step('Click toggle button', async () => {
      const button = await shadow.findByShadowRole('button');
      await button.click();
      await waitFor(async () => await expect(args.onThemeChanged).toHaveBeenCalled());
      const call = (args.onThemeChanged as any).mock.calls[0][0];
      await expect(call.detail.scale).toBeLessThan(currentTheme.scale);
      const theme = JSON.parse(localStorage.getItem('theme') || '{}');
      await expect(theme).toHaveProperty('isDark', call.detail.isDark);
      await expect(theme).toHaveProperty('scale', call.detail.scale);
      // Clean up
      localStorage.removeItem('theme');
    });
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    localStorage.removeItem('theme');
    const currentTheme = (control as any)._theme;
    currentTheme.scale = 1.5; // Simulate increased size

    await step('Click toggle button', async () => {
      const buttonReset = await shadow.findByShadowRole('button');
      await buttonReset.click();
      await waitFor(async () => await expect(args.onThemeChanged).toHaveBeenCalled());
      const call = (args.onThemeChanged as any).mock.calls[0][0];
      await expect(call.detail.scale).toBe(1);
      const theme = JSON.parse(localStorage.getItem('theme') || '{}');
      await expect(theme).toHaveProperty('isDark', call.detail.isDark);
      await expect(theme).toHaveProperty('scale', call.detail.scale);
      // Clean up
      localStorage.removeItem('theme');
    });
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
      <polyfea-md-theme-control .variant=\${args.variant} .control=\${args.control} @theme-changed=\${args.onThemeChanged}></polyfea-md-theme-control>
    </div>
  \`
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    localStorage.removeItem('theme');
    const currentTheme = (control as any)._theme;
    await step('load theme with Theme', async () => {
      const query = window.matchMedia('(prefers-color-scheme: dark)');
      const shallBeDark = query.matches;
      localStorage.setItem('theme', JSON.stringify({
        isDark: !shallBeDark,
        scale: 1.25,
        followSystemTheme: true
      }));
      const theme = PolyfeaMdThemeControl.loadTheme();
      await expect(theme.isDark).toBe(shallBeDark);
      await expect(theme.scale).toBe(1.25);
    });
    // Clean up
    localStorage.removeItem('theme');
  }
}`,...y.parameters?.docs?.source}}};const D=["ThemeToggle","TextIncrease","TextDecrease","TextReset","MenuItemVariant","TEST_ThemeToggleWithStoredPreset"];export{u as MenuItemVariant,y as TEST_ThemeToggleWithStoredPreset,p as TextDecrease,d as TextIncrease,g as TextReset,h as ThemeToggle,D as __namedExportsOrder,I as default};
