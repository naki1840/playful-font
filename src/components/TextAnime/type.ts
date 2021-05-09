export type AnimeElement = HTMLElement & {
  restart: () => void
  play: () => void
  pause: () => void
  reverse: () => void
}
export type AnimeRef = React.RefObject<AnimeElement>
