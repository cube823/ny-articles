import { SVGIconProps } from 'src/components/Icons/IconBase'

const FilledStarIcon = ({ color, size }: SVGIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.61224 15.4427C3.2258 15.6413 2.78823 15.2942 2.86603 14.8508L3.69576 10.1213L0.173428 6.76462C-0.155753 6.45092 0.0146475 5.87737 0.455637 5.81472L5.35411 5.11885L7.53823 0.792305C7.73498 0.402565 8.26795 0.402565 8.4647 0.792305L10.6488 5.11885L15.5473 5.81472C15.9883 5.87737 16.1587 6.45092 15.8295 6.76462L12.3072 10.1213L13.1369 14.8508C13.2147 15.2942 12.7771 15.6413 12.3907 15.4427L8.00146 13.1868L3.61224 15.4427Z"
        fill={color}
      />
    </svg>
  )
}

export default FilledStarIcon
