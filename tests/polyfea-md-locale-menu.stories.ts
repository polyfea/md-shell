import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import { within as withinShadow } from 'shadow-dom-testing-library';
// Ensure the component is imported to register the custom element
import '../src/polyfea-md-locale-menu';
import { type Theme } from '../src/polyfea-md-theme-control';
import { expect, fn, waitFor } from 'storybook/test';
import { PolyfeaMdLocaleMenu } from '../src/polyfea-md-locale-menu';
import { LocalizationRegistry } from '../src/localization';

// Define the interface for the component's properties for better type safety in Storybook
interface LocaleMenuProps {
  locales: string[];
  currentLocale: string;
  onThemeChanged: (event: CustomEvent<Theme>) => void;
}

const meta: Meta<LocaleMenuProps> = {
  title: 'Custom Elements/polyfea-md-locale-menu',
  component: 'polyfea-md-locale-menu',
  tags: ['autodocs'],
  argTypes: {
    locales: { table: { disable: false } }, // Allow array editing if supported, or at least viewing
    currentLocale: { control: 'text' },
  },
  // Default arguments
  args: {
    locales: ['en-us', 'sk', 'cs', 'de'],
    currentLocale: 'en-us',
    onThemeChanged: fn(),
  },
  // Define how the story is rendered
  render: (args) => html`
    <div style="height: 200px; display: flex; justify-content: flex-end; align-items: flex-start;">
      <polyfea-md-locale-menu
        .locales=${args.locales}
        current-locale=${args.currentLocale}
        @theme-changed=${args.onThemeChanged}
      ></polyfea-md-locale-menu>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        component: 'A locale switcher menu using Material Web components and flag-icons.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<LocaleMenuProps>;

export const Default: Story = {
    decorators: [
    (story) => {
        localStorage.removeItem('theme');
        return story();
    },
],
  args: {
    // Uses default args
  },
};

export const CzechSelected: Story = {
  args: {
    currentLocale: 'cs',
  },
};

export const ManyLocales: Story = {
  args: {
    locales: ['en-US', 'sk', 'cs', 'de', 'es', 'pl', 'hu', 'uk', 'unknw'],
    currentLocale: 'sk',
  },

decorators: [
    (story) => {
        localStorage.setItem('theme', JSON.stringify({locale: 'hu'}));
        return story();
    },
],

play: async ({ canvasElement, step, args }) => {
    const canvas = withinShadow(canvasElement);
    const menu = canvasElement.querySelector('polyfea-md-locale-menu') as PolyfeaMdLocaleMenu;

    await step('Locale is set from localStorage', async () => {
        const selectedLocale = menu.currentLocale;
        await expect(selectedLocale).toBe('hu');
    });

    await step('Open menu and check selected locale', async () => {
        const anchor = menu.shadowRoot?.querySelector(`#locale-anchor`);
        anchor?.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));
        const mdmenu = menu.shadowRoot?.querySelector('md-menu');

        const sk = await withinShadow(menu).findByShadowText('Slovenčina');
        sk.click();

        await expect(menu.currentLocale).toBe('sk');
        await expect(localStorage.getItem('theme')).toContain('"locale":"sk"');
        await waitFor(async () => await expect(args.onThemeChanged).toHaveBeenCalled());

        await expect(anchor).toHaveAttribute('data-aria-expanded', 'false');

    });
    
    await step('Select the same locale again and verify no event is fired', async () => {
        const mdmenu = menu.shadowRoot?.querySelector('md-menu');
        const sk = await withinShadow(mdmenu!).findByShadowText('Slovenčina');
        (args.onThemeChanged as any).mockClear();
        sk.click(); // select same locale again

        await expect(menu.currentLocale).toBe('sk'); // should remain the same
        await expect(args.onThemeChanged).not.toHaveBeenCalled();

    });

    await step('Test resolution of locales', async () => {
      const resolved = LocalizationRegistry.resolveSupportedLocale(['de-DE'], new Set(['en', 'de', 'fr']));
      await expect(resolved).toBe('de');
    });


}
};

export const SingleLocale: Story = {
  args: {
    locales: ['en'],
    currentLocale: 'en',
  },
};
