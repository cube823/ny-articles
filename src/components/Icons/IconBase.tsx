import CalendarIcon from 'src/components/Icons/CalendarIcon'
import EmptyScrapeIcon from 'src/components/Icons/EmptyScrapeIcon'
import FilledStarIcon from 'src/components/Icons/FiiledStarIcon'
import HomeIcon from 'src/components/Icons/HomeIcon'
import ScrapeIcon from 'src/components/Icons/ScrapeIcon'
import SearchIcon from 'src/components/Icons/SearchIcon'
import StarIcon from 'src/components/Icons/StarIcon'
import { theme } from 'src/styles/theme'

export interface SVGIconProps {
  color: string
  size: number
  height?: number
}

export type Color =
  | 'blueSky'
  | 'blueMain'
  | 'yellow'
  | 'gray1'
  | 'gray2'
  | 'white60'
  | 'white90'
  | 'white100'
  | 'black100'
  | 'black80'
export type IconKind =
  | 'search'
  | 'calendar'
  | 'home'
  | 'scrape'
  | 'star'
  | 'empty-scrape'
  | 'filled-star'

export interface IconBaseProps {
  icon: IconKind
  height?: number
  size?: number
  color?: Color
}

export const IconBase = ({ icon, size: inputSize, height, color: inputColor }: IconBaseProps) => {
  const size = inputSize ? inputSize : 16
  const color = inputColor ? inputColor : 'black80'

  return getIcon(icon, { size, color: theme.pallette[color], height })
}

const getIcon = (icon: IconKind, { ...props }) => {
  const { size, color, height } = props

  switch (icon) {
    case 'search':
      return <SearchIcon size={size} color={color} />
    case 'calendar':
      return <CalendarIcon size={size} color={color} />
    case 'home':
      return <HomeIcon size={size} color={color} />
    case 'scrape':
      return <ScrapeIcon size={size} color={color} />
    case 'star':
      return <StarIcon size={size} color={color} />
    case 'filled-star':
      return <FilledStarIcon size={size} color={color} />
    case 'empty-scrape':
      return <EmptyScrapeIcon size={size} color={color} height={height} />
  }
}
