type IconProps = React.HTMLAttributes<SVGAElement>

export const AngleLeft = ({ className }: IconProps) => {
	return (
		<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fillRule="evenodd" />
		</svg>
	)
}
