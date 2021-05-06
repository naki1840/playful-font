import { Font } from 'react-google-font-loader'

export type { Font }

export const fonts: Font[] = [
  { font: 'Pacifico', weights: [400] },
  { font: 'Goblin One', weights: [400] },
  { font: 'Crimson Text', weights: [400] },
  { font: 'Zen Dots', weights: [400] },
  { font: 'Dancing Script', weights: [400] },
  { font: 'Itim', weights: [400] },
  { font: 'Girassol', weights: [400] },
  { font: 'Josefin Sans', weights: [400] },
  { font: 'Anton', weights: [400] },
  { font: 'Dosis', weights: [400] },
  { font: 'Libre Baskerville', weights: [400] },
  { font: 'Lobster', weights: [400] },
  { font: 'New Tegomin', weights: [400] },
  { font: 'EB Garamond', weights: [400] },
  { font: 'Indie Flower', weights: [400] },
  { font: 'Original Surfer', weights: [400] },
  { font: 'Abril Fatface', weights: [400] },
  { font: 'Caveat', weights: [400] },
  { font: 'Satisfy', weights: [400] },
  { font: 'Righteous', weights: [400] },
  { font: 'Cinzel', weights: [400] },
  { font: 'Permanent Marker', weights: [400] },
  { font: 'Great Vibes', weights: [400] },
  { font: 'Sacramento', weights: [400] },
]

export const getRandomFontIndex = (): number => Math.floor(Math.random() * fonts.length)
