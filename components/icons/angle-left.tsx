type IconProps = React.HTMLAttributes<SVGElement>

export const AngleLeft = ({ className, ...props }: IconProps) => {
	return (
		<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
			<path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fillRule="evenodd" />
		</svg>
	)
}
