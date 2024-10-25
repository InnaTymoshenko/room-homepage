type IconProps = React.HTMLAttributes<SVGAElement>

export const AngleRight = ({ className }: IconProps) => {
	return (
		<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fillRule="evenodd" />
		</svg>
	)
}
