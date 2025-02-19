import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';

export const themePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}',
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{stone.50}',
          100: '{stone.100}',
          200: '{stone.200}',
          300: '{stone.300}',
          400: '{stone.400}',
          500: '{stone.500}',
          600: '{stone.600}',
          700: '{stone.700}',
          800: '{stone.800}',
          900: '{stone.900}',
          950: '{stone.950}',
        },
        extend: {
          groundBackground: '{surface.50}',
          error: '{red.400}',
        },
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '{stone.50}',
          100: '{stone.100}',
          200: '{stone.200}',
          300: '{stone.300}',
          400: '{stone.400}',
          500: '{stone.500}',
          600: '{stone.600}',
          700: '{stone.700}',
          800: '{stone.800}',
          900: '{stone.900}',
          950: '{stone.950}',
        },
        extend: {
          groundBackground: '{surface.950}',
          error: '{red.300}',
        },
      },
    },
  },
  components: {
    divider: {
      root: {
        borderColor: '{surface.500}',
      },
      content: {
        color: '{surface.500}',
      },
      horizontal: {
        margin: '0',
      },
    },
    toast: {
      text: {
        gap: 0,
      },
    },
  },
});
