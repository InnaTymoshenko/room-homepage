type IconProps = React.HTMLAttributes<SVGElement>

export const AngleRight = ({ className, ...props }: IconProps) => {
	return (
		<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
			<path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fillRule="evenodd" />
		</svg>
	)
}
