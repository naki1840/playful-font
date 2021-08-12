import { FC } from 'react'

import GoogleFontLoader, { Font } from 'react-google-font-loader'

import { fonts, getRandomFontIndex } from 'src/constants/fonts'

export const TitleFont: FC = ({ children }) => {
  const index = getRandomFontIndex()
  const fontList: Font[] = [fonts[index]]

  return (
    <>
      <GoogleFontLoader fonts={fontList} subsets={['cyrillic-ext', 'greek']} />
      <div style={{ fontFamily: fontList[0]?.font }}>{children}</div>
    </>
  )
}
