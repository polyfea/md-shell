import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { fn, expect } from 'storybook/test';
import { within as withinShadow } from 'shadow-dom-testing-library';

import '../src/polyfea-md-topbar';

interface PolyfeaMdTopbarProps {
  headline: string;
  variant: 'centered' | 'small' | 'medium' | 'large';
  leadingIcon: 'none' | 'drawer' | 'back';
  moreActionsDisabled: boolean;
  onDrawerOpened: () => void;
  onBack: () => void;
  slotContent: any;
}

const meta = {
  title: 'Custom Elements/polyfea-md-topbar',
  component: 'polyfea-md-topbar',
  tags: ['autodocs'],
  render: (args) => html`
    <div style="width: 100%; border: 1px solid var(--md-sys-color-outline); background-color: var(--md-sys-color-surface);">
      <polyfea-md-topbar 
        .headline=${args.headline} 
        .variant=${args.variant}
        .leadingIcon=${args.leadingIcon}
        .moreActionsDisabled=${args.moreActionsDisabled}
        @drawer-opened=${args.onDrawerOpened}
        @back=${args.onBack}
      >
        ${args.slotContent}
      </polyfea-md-topbar>
    </div>
  `,
  argTypes: {
    headline: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'centered'],
    },
    leadingIcon: {
      control: { type: 'select' },
      options: ['none', 'drawer', 'back'],
    },
    moreActionsDisabled: { control: 'boolean' },
    onDrawerOpened: { action: 'drawerOpened' },
    onBack: { action: 'back' },
    slotContent: {
        control: 'text',       
        table : { disable: true},        
    },
  },
  args: {
    headline: 'Page Title',
    variant: 'small',
    leadingIcon: 'drawer',
    moreActionsDisabled: false,
    onDrawerOpened: fn(),
    onBack: fn(),
    slotContent: html``,
  },
} satisfies Meta<PolyfeaMdTopbarProps>;

export default meta;
type Story = StoryObj<PolyfeaMdTopbarProps>;

export const Small: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Standard small top app bar with explicit slots filled.',
      },
    },
  },
  args: {
    variant: 'small',
    leadingIcon: 'none', // override default to show slot usage
    slotContent: html`
      <md-icon-button slot="leading">
        <md-icon>menu_book</md-icon>
      </md-icon-button>
      <md-icon-button slot="trailing">
        <md-icon>search</md-icon>
      </md-icon-button>
      <md-menu-item slot="menu">
         <div slot="headline">Profile</div>
      </md-menu-item>
    `,
  },
};

export const Centered: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Centered top app bar. Leading icon defaults to "drawer" (menu icon).',
      },
    },
  },
  args: {
    variant: 'centered',
    slotContent: html`
       <md-menu-item slot="menu">
         <div slot="headline">Settings</div>
       </md-menu-item>
    `,
  },
  play: async ({ canvasElement, args, step }) => {
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
    },
};

export const Medium: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Medium top app bar, expanding in height with headline below actions.',
      },
    },
  },
  args: {
    variant: 'medium',
    leadingIcon: 'back',
    slotContent: html`
       <md-menu-item slot="menu">
         <div slot="headline">Settings</div>
       </md-menu-item>
    `
  },
  play: async ({ canvasElement, args, step }) => {
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
  },
};

export const Large: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Large top app bar, providing prominent space for the headline.',
      },
    },
  },
  args: {
    variant: 'large',
  },
};
