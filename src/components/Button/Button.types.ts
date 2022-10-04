export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	outline?: boolean;
	onPress: () => void;
	className?: string;
	loading?: boolean;
}

