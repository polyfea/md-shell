import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { fn } from 'storybook/test';
import { expect } from 'storybook/test';
import { within as withinShadow } from 'shadow-dom-testing-library';

import '../src/polyfea-md-rail';
import '../src/polyfea-md-app';

import '@material/web/fab/fab.js';

interface PolyfeaMdRailProps {
  drawerDisabled: boolean;
  contentPosition: 'top' | 'middle' | 'bottom';
  onDrawerOpened: () => void;
  slotContent: any;
  primaryActionSlot: any;
}

const meta = {
  title: 'Custom Elements/polyfea-md-rail',
  component: 'polyfea-md-rail',
  tags: ['autodocs'],
  render: (args) => html`
    <div style="height: 500px; width: 80px; border-right: 1px solid var(--md-sys-color-outline);">
      <polyfea-md-rail
        .drawerDisabled=${args.drawerDisabled}
        .contentPosition=${args.contentPosition}
        @drawer-opened=${args.onDrawerOpened}
      >
        ${args.primaryActionSlot}
        ${args.slotContent}
      </polyfea-md-rail>
    </div>
  `,
  argTypes: {
    drawerDisabled: { control: 'boolean' },
    contentPosition: { 
        control: { type: 'select' },
        options: ['top', 'middle', 'bottom'] 
    },
    onDrawerOpened: { action: 'drawer-opened' },
    slotContent: {
        control: 'text',
        name: 'unnamed slot',
        table : {
            category: 'Slots',
        },
        description: 'Content to be placed in the default slot of the rail, typically navigation links, eg. <polyfea-md-app> elements.'
    },
  },
  args: {
    drawerDisabled: false,
    contentPosition: 'top',
    onDrawerOpened: fn(),
    slotContent: html`
      <polyfea-md-app context="rail-content" short-headline="Home" material-icon="home" href="#home" is-active-prefix></polyfea-md-app>
      <polyfea-md-app context="rail-content" short-headline="Projects" material-icon="folder" href="#projects"></polyfea-md-app>
      <polyfea-md-app context="rail-content" short-headline="Tasks" material-icon="task" href="#tasks"></polyfea-md-app>
    `,
    primaryActionSlot: ''
  },
} satisfies Meta<PolyfeaMdRailProps>;

export default meta;
type Story = StoryObj<PolyfeaMdRailProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default rendering of the navigation rail with top alignment and a menu button.',
      },
    },
  },
};

export const MiddleAligned: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Navigation items centered vertically in the rail.',
      },
    },
  },
  args: {
    contentPosition: 'middle',
  },
};

export const BottomAligned: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Navigation items aligned to the bottom of the rail.',
      },
    },
  },
  args: {
    contentPosition: 'bottom',
  },
};

export const WithPrimaryAction: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Rail with a primary action FAB slotted in.',
      },
    },
  },
  args: {
    primaryActionSlot: html`
      <md-fab slot="primary-action" variant="secondary" size="small">
        <md-icon slot="icon">edit</md-icon>
      </md-fab>
    `,
  },
};

export const DrawerDisabled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Rail without the menu button (drawer trigger).',
      },
    },
  },
  args: {
    drawerDisabled: true,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = withinShadow(canvasElement);
    const rail = canvasElement.querySelector('polyfea-md-rail');
    
    await step('Verify menu button is absent', async () => {
      const button = rail?.shadowRoot?.querySelector('md-icon-button');
      expect(button).toBeNull();
    });
  },
};

export const InteractionTest: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Tests the interaction of the menu button.',
      },
    },
  },
  play: async ({ canvasElement, args, step }) => {
     const rail = canvasElement.querySelector('polyfea-md-rail');
     const railShadow = withinShadow(rail as HTMLElement);

     await step('Click menu button', async () => {
        const button = await railShadow.findByShadowRole('button');
        await button.click();
     });

     await step('Verify event dispatched', async () => {
        expect(args.onDrawerOpened).toHaveBeenCalled();
     });
  },
};
