import{b as o,c as w}from"./iframe-COkunwa9.js";import"./polyfea-md-topbar-CKZWjYsB.js";import"./preload-helper-PPVm8Dsz.js";import"./property-nuuqNUcm.js";import"./localized-controller-CwSega-m.js";import"./query-x48B6FB_.js";const{fn:u,expect:c}=__STORYBOOK_MODULE_TEST__,f={title:"Custom Elements/polyfea-md-topbar",component:"polyfea-md-topbar",tags:["autodocs"],render:e=>o`
    <div style="width: 100%; border: 1px solid var(--md-sys-color-outline); background-color: var(--md-sys-color-surface);">
      <polyfea-md-topbar 
        .headline=${e.headline} 
        .variant=${e.variant}
        .leadingIcon=${e.leadingIcon}
        .moreActionsDisabled=${e.moreActionsDisabled}
        @drawer-opened=${e.onDrawerOpened}
        @back=${e.onBack}
      >
        ${e.slotContent}
      </polyfea-md-topbar>
    </div>
  `,argTypes:{headline:{control:"text"},variant:{control:{type:"select"},options:["small","medium","large","centered"]},leadingIcon:{control:{type:"select"},options:["none","drawer","back"]},moreActionsDisabled:{control:"boolean"},onDrawerOpened:{action:"drawerOpened"},onBack:{action:"back"},slotContent:{control:"text",table:{disable:!0}}},args:{headline:"Page Title",variant:"small",leadingIcon:"drawer",moreActionsDisabled:!1,onDrawerOpened:u(),onBack:u(),slotContent:o``}},r={parameters:{docs:{description:{story:"Standard small top app bar with explicit slots filled."}}},args:{variant:"small",leadingIcon:"none",slotContent:o`
      <md-icon-button slot="leading">
        <md-icon>menu_book</md-icon>
      </md-icon-button>
      <md-icon-button slot="trailing">
        <md-icon>search</md-icon>
      </md-icon-button>
      <md-menu-item slot="menu">
         <div slot="headline">Profile</div>
      </md-menu-item>
    `}},i={parameters:{docs:{description:{story:'Centered top app bar. Leading icon defaults to "drawer" (menu icon).'}}},args:{variant:"centered",slotContent:o`
       <md-menu-item slot="menu">
         <div slot="headline">Settings</div>
       </md-menu-item>
    `},play:async({canvasElement:e,args:l,step:a})=>{const t=e.querySelector("polyfea-md-topbar"),n=w(t);await a("Click leading icon (drawer)",async()=>{await(await n.findByShadowLabelText("open drawer")).click(),await c(l.onDrawerOpened).toHaveBeenCalled()}),await a("Open menu",async()=>{await(await n.findByShadowLabelText("more actions")).click();const p=t?.shadowRoot?.querySelector("md-menu");c(p.open).toBe(!0)})}},s={parameters:{docs:{description:{story:"Medium top app bar, expanding in height with headline below actions."}}},args:{variant:"medium",leadingIcon:"back",slotContent:o`
       <md-menu-item slot="menu">
         <div slot="headline">Settings</div>
       </md-menu-item>
    `},play:async({canvasElement:e,args:l,step:a})=>{const t=e.querySelector("polyfea-md-topbar"),n=w(t);await a("Click leading icon (drawer)",async()=>{await(await n.findByShadowLabelText("back")).click(),await c(l.onBack).toHaveBeenCalled()}),await a("Open menu",async()=>{await(await n.findByShadowLabelText("more actions")).click();const p=t?.shadowRoot?.querySelector("md-menu");c(p.open).toBe(!0)})}},d={parameters:{docs:{description:{story:"Large top app bar, providing prominent space for the headline."}}},args:{variant:"large"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Standard small top app bar with explicit slots filled.'
      }
    }
  },
  args: {
    variant: 'small',
    leadingIcon: 'none',
    // override default to show slot usage
    slotContent: html\`
      <md-icon-button slot="leading">
        <md-icon>menu_book</md-icon>
      </md-icon-button>
      <md-icon-button slot="trailing">
        <md-icon>search</md-icon>
      </md-icon-button>
      <md-menu-item slot="menu">
         <div slot="headline">Profile</div>
      </md-menu-item>
    \`
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Centered top app bar. Leading icon defaults to "drawer" (menu icon).'
      }
    }
  },
  args: {
    variant: 'centered',
    slotContent: html\`
       <md-menu-item slot="menu">
         <div slot="headline">Settings</div>
       </md-menu-item>
    \`
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const topBar = canvasElement.querySelector('polyfea-md-topbar');
    const shadow = withinShadow(topBar as HTMLElement);
    await step('Click leading icon (drawer)', async () => {
      const drawerBtn = await shadow.findByShadowLabelText('open drawer');
      await drawerBtn.click();
      await expect(args.onDrawerOpened).toHaveBeenCalled();
    });
    await step('Open menu', async () => {
      const menuBtn = await shadow.findByShadowLabelText('more actions');
      await menuBtn.click();
      const menu = topBar?.shadowRoot?.querySelector('md-menu') as any;
      // We can check if settings item is visible or menu state
      expect(menu.open).toBe(true);
    });
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Medium top app bar, expanding in height with headline below actions.'
      }
    }
  },
  args: {
    variant: 'medium',
    leadingIcon: 'back',
    slotContent: html\`
       <md-menu-item slot="menu">
         <div slot="headline">Settings</div>
       </md-menu-item>
    \`
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const topBar = canvasElement.querySelector('polyfea-md-topbar');
    const shadow = withinShadow(topBar as HTMLElement);
    await step('Click leading icon (drawer)', async () => {
      const drawerBtn = await shadow.findByShadowLabelText('back');
      await drawerBtn.click();
      await expect(args.onBack).toHaveBeenCalled();
    });
    await step('Open menu', async () => {
      const menuBtn = await shadow.findByShadowLabelText('more actions');
      await menuBtn.click();
      const menu = topBar?.shadowRoot?.querySelector('md-menu') as any;
      // We can check if settings item is visible or menu state
      expect(menu.open).toBe(true);
    });
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Large top app bar, providing prominent space for the headline.'
      }
    }
  },
  args: {
    variant: 'large'
  }
}`,...d.parameters?.docs?.source}}};const S=["Small","Centered","Medium","Large"];export{i as Centered,d as Large,s as Medium,r as Small,S as __namedExportsOrder,f as default};
