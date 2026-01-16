import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { fn } from 'storybook/test';
import { expect } from 'storybook/test';
import { within as withinShadow } from 'shadow-dom-testing-library';

import '../src/polyfea-md-drawer';
import '../src/polyfea-md-app';
import '../src/polyfea-md-drawer-label';

interface PolyfeaMdDrawerProps {
  closeDisabled: boolean;
  onDrawerClosed: () => void;
  slotContent: any;
}

const meta = {
  title: 'Custom Elements/polyfea-md-drawer',
  component: 'polyfea-md-drawer',
  tags: ['autodocs'],
  render: (args) => html`
    <div style="height: 400px; width: 300px; border: 1px solid var(--md-sys-color-outline); background: var(--md-sys-color-surface);">
      <polyfea-md-drawer
        .closeDisabled=${args.closeDisabled}
        @drawer-closed=${args.onDrawerClosed}
      >
        ${args.slotContent}
      </polyfea-md-drawer>
    </div>
  `,
  argTypes: {
    closeDisabled: { control: 'boolean' },
    onDrawerClosed: { action: 'drawer-closed' },
    slotContent: {
        control: 'text',
        name: 'unnamed slot',
        table : {
            category: 'Slots',
            },
        description: 'Content to be placed in the default slot of the drawer, typically navigation links and labels. Links may be represented using <polyfea-md-app> elements with mode set to "drawer".',
    }
  },
  args: {
    closeDisabled: false,
    onDrawerClosed: fn(),
    slotContent: html`
      <polyfea-md-drawer-label headline="Main"></polyfea-md-drawer-label>
      <polyfea-md-app mode="drawer" short-headline="Home" material-icon="home" href="#home" context="drawer-content"></polyfea-md-app>
      <polyfea-md-app mode="drawer" short-headline="Search" material-icon="search" href="#search" context="drawer-content"></polyfea-md-app>
      <polyfea-md-drawer-label headline="Library"></polyfea-md-drawer-label>
      <polyfea-md-app mode="drawer" short-headline="Favorites" material-icon="favorite" href="#fav" context="drawer-content"></polyfea-md-app>
    `,
  },
} satisfies Meta<PolyfeaMdDrawerProps>;

export default meta;
type Story = StoryObj<PolyfeaMdDrawerProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default rendering of the drawer with a close button and navigation content.',
      },
    },
  },
};

export const CloseDisabled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Renders the drawer without the close button, useful for persistent navigation rails.',
      },
    },
  },
  args: {
    closeDisabled: true,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = withinShadow(canvasElement);
    await step('Verify close button is absent', async () => {
      const drawer = canvasElement.querySelector('polyfea-md-drawer');
      const drawerShadow = withinShadow(drawer as HTMLElement);
      const button = drawer?.shadowRoot?.querySelector('md-icon-button');
      expect(button).toBeNull();
    });
  },
};

export const InteractionTest: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Tests the interaction of the close button.',
      },
    },
  },
  play: async ({ canvasElement, args, step }) => {
     const drawer = canvasElement.querySelector('polyfea-md-drawer');
     const drawerShadow = withinShadow(drawer as HTMLElement);

     await step('Click close button', async () => {
        const button = await drawerShadow.findByShadowRole('button');
        await button.click();
     });

     await step('Verify event dispatched', async () => {
        expect(args.onDrawerClosed).toHaveBeenCalled();
     });
  },
};
