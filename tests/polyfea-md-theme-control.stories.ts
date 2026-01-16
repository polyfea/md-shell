import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { fn, expect, waitFor} from 'storybook/test';
import { within as withinShadow } from 'shadow-dom-testing-library';

import '../src/polyfea-md-theme-control';
import { PolyfeaMdThemeControl } from '../src/polyfea-md-theme-control';

// Duplicate types for test context
type ThemeMode = 'light' | 'dark';
type Theme = { name: ThemeMode; textSize: number };

interface PolyfeaMdThemeControlProps {
  variant: 'button' | 'menu-item' | 'preset';
  control: 'theme-toggle' | 'text-increase' | 'text-decrease' | 'reset-font';
  defaultTextSize?: number;
  onThemeChanged: (event: CustomEvent<Theme>) => void;
}

const meta = {
  title: 'Custom Elements/polyfea-md-theme-control',
  component: 'polyfea-md-theme-control',
  tags: ['autodocs'],
  render: args => html`
    <polyfea-md-theme-control
      variant=${args.variant}
      control=${args.control}
      default-text-size=${args.defaultTextSize}
      @theme-changed=${args.onThemeChanged}
    ></polyfea-md-theme-control>
  `,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['button', 'menu-item', 'preset'],
    },
    control: {
      control: { type: 'select' },
      options: ['theme-toggle', 'text-increase', 'text-decrease', 'reset-font'],
    },
    onThemeChanged: { action: 'theme-changed' },
  },
  args: {
    variant: 'button',
    control: 'theme-toggle',
    onThemeChanged: fn(),
    defaultTextSize: 16.42,
  },
  parameters: {
    // Clean up local storage logic if needed
  },
} satisfies Meta<PolyfeaMdThemeControlProps>;

export default meta;
type Story = StoryObj<PolyfeaMdThemeControlProps>;

export const ThemeToggle: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Button variant configured to toggle between light and dark themes.',
      },
    },
  },
  args: {
    control: 'theme-toggle',
  },

  play: async ({ canvasElement, args, step }) => {
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
  },
};

export const TextIncrease: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Button variant configured to increase the root font size.',
      },
    },
  },
  args: {
    control: 'text-increase',
  },

  play: async ({ canvasElement, args, step }) => {
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
  },
};

export const TextDecrease: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Button variant configured to decrease the root font size.',
      },
    },
  },
  args: {
    control: 'text-decrease',
  },
  play: async ({ canvasElement, args, step }) => {
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
  },
};

export const TextReset: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Button variant configured to reset the root font size.',
      },
    },
  },
  args: {
    control: 'reset-font',
  },
  play: async ({ canvasElement, args, step }) => {
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
      await expect(call.detail.scale).toBe( 1);
      const theme = JSON.parse(localStorage.getItem('theme') || '{}');
      await expect(theme).toHaveProperty('isDark', call.detail.isDark);
      await expect(theme).toHaveProperty('scale', call.detail.scale);
      // Clean up
      localStorage.removeItem('theme');
    });
  },
};

export const MenuItemVariant: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Menu item variant, suitable for inclusion inside an md-menu.',
      },
    },
  },
  args: {
    variant: 'menu-item',
    control: 'reset-font',
  },
  render: args => html`
    <div style="background: var(--md-sys-color-surface); width: 250px; padding: 10px; border: 1px solid var(--md-sys-color-outline);">
      <polyfea-md-theme-control .variant=${args.variant} .control=${args.control} @theme-changed=${args.onThemeChanged}></polyfea-md-theme-control>
    </div>
  `,
};

export const TEST_ThemeToggleWithStoredPreset: Story = {
  tags: ['test'],
  parameters: {
    docs: {
      description: {
        story: 'Button variant configured to toggle between light and dark themes.',
      },
    },
  },
  args: {
    control: 'theme-toggle',
  },

  play: async ({ canvasElement, args, step }) => {
    const control = canvasElement.querySelector('polyfea-md-theme-control') as PolyfeaMdThemeControl;
    const shadow = withinShadow(control as HTMLElement);

    // Ensure we start from a clean state
    localStorage.removeItem('theme');
    
    const currentTheme = (control as any)._theme;

    await step('load theme with Theme', async () => {
      const query = window.matchMedia('(prefers-color-scheme: dark)');
      const shallBeDark = query.matches;
      localStorage.setItem('theme', JSON.stringify({ isDark: !shallBeDark, scale: 1.25, followSystemTheme: true }));
      const theme = PolyfeaMdThemeControl.loadTheme();
      await expect(theme.isDark).toBe(shallBeDark);
      await expect(theme.scale).toBe(1.25);
    });
    // Clean up
    localStorage.removeItem('theme');    
  },
};

