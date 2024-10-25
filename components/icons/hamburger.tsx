type IconProps = React.HTMLAttributes<SVGAElement>

export const Hamburger = ({ className }: IconProps) => {
	return (
		<svg width="20" height="14" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fillRule="evenodd" />
		</svg>
	)
}
