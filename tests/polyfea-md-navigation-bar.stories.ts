import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { within as withinShadow } from 'shadow-dom-testing-library';
import { expect } from 'storybook/test';

import '../src/polyfea-md-navigation-bar';
import '../src/polyfea-md-app';

interface PolyfeaMdNavigationBarProps {
  slotContent: any;
}

const meta = {
  title: 'Custom Elements/polyfea-md-navigation-bar',
  component: 'polyfea-md-navigation-bar',
  tags: ['autodocs'],
  render: (args) => html`
    <div style="width: 100%; height: 200px; position: relative; display: flex; align-items: flex-end; border: 1px solid var(--md-sys-color-outline);">
      <polyfea-md-navigation-bar>
        ${args.slotContent}
      </polyfea-md-navigation-bar>
    </div>
  `,
  argTypes: {
    slotContent: {
        control: 'text',
        name: 'unnamed slot',
        table : {
            category: 'Slots',
            },
        description: 'Content to be placed in the default slot of the drawer, typically navigation links, eg. <polyfea-md-app> elements with mode set to "navigation".'
    }
  },
  args: {
    slotContent: html`
      <polyfea-md-app context="navigation-content" short-headline="Mail" material-icon="mail" href="#mail" is-active-prefix></polyfea-md-app>
      <polyfea-md-app context="navigation-content" short-headline="Chat" material-icon="chat" href="#chat"></polyfea-md-app>
      <polyfea-md-app context="navigation-content" short-headline="Rooms" material-icon="group" href="#rooms"></polyfea-md-app>
      <polyfea-md-app context="navigation-content" short-headline="Meet" material-icon="videocam" href="#meet"></polyfea-md-app>
    `,
  },
} satisfies Meta<PolyfeaMdNavigationBarProps>;

export default meta;
type Story = StoryObj<PolyfeaMdNavigationBarProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default rendering of the navigation bar with `polyfea-md-app` items in navigation mode.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = withinShadow(canvasElement);
    const navBar = canvasElement.querySelector('polyfea-md-navigation-bar');

    await step('Verify items are rendered', async () => {
       const slot = navBar?.shadowRoot?.querySelector('slot');
       expect(slot).toBeTruthy();
       const assignedElements = (slot as HTMLSlotElement).assignedElements();
       expect(assignedElements.length).toBe(4);
    });
  },
};
