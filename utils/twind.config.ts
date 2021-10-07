import { Configuration } from 'twind'
import * as twindColors from 'twind/colors'

import { aspectRatio } from '@twind/aspect-ratio'
import { withForms } from '@twind/forms'

const twindConfig: Configuration = {
  mode: 'jit',
  purge: [
    // ...
    './node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}' // path to vechaiui
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms'), require('@vechaiui/core')]
}

export default twindConfig
