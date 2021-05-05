import { Font } from 'react-google-font-loader'

export type { Font }

export const fonts: Font[] = [
  { font: 'Pacifico', weights: [400, 700] },
  { font: 'Goblin One', weights: [400, 700] },
  { font: 'Crimson Text', weights: ['400i', 700] },
  { font: 'Zen Dots', weights: [400, 700] },
  { font: 'Dancing Script', weights: [400, 700] },
]

export const getRandomFontIndex = (): number => Math.floor(Math.random() * fonts.length)
