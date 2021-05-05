// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnimeEffect = { name: string; config: any }

const commonConfig = {
  delay(el: never, i: number): number {
    return i * 100
  },
  loop: true,
  direction: 'normal',
  autoplay: true,
  endDelay: 1000,
}
export const animeEffects: AnimeEffect[] = [
  {
    name: 'Fade in',
    config: {
      translateY: 0,
      opacity: [0, 1],
      easing: 'easeInOutSine',
      ...commonConfig,
    },
  },
  {
    name: 'Fade in from the top',
    config: {
      translateY: [-50, 0],
      opacity: [0, 1],
      easing: 'easeInOutSine',
      ...commonConfig,
    },
  },
  {
    name: 'Raindrops',
    config: {
      translateY: [-80, 0],
      opacity: [0, 1],
      easing: 'easeOutBounce',
      ...commonConfig,
    },
  },
  {
    name: 'Light on',
    config: {
      translateY: 0,
      opacity: [0, 1],
      easing: 'easeInBounce',
      ...commonConfig,
    },
  },
]

export const getRandomAnimeIndex = (): number => Math.floor(Math.random() * animeEffects.length)
