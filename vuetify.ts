import type { VuetifyOptions } from 'vuetify'

const theme: VuetifyOptions['theme'] = {
  defaultTheme: 'dark',
  themes: {
    light: {
      dark: false,
    },
    dark: {
      dark: true,
    },
  },
}

export { theme }
export default theme
