import React, { useEffect, useState } from 'react';

interface IProps {
	githubUrl: string;
	chainId: string;
	validatorAddress: string;
	githubBranchName?: string;
	width: number;
	height: number;
	className?: string;
	logoExtension?: string;
}

export const ValidatorLogo = ({
	githubBranchName = 'master',
	githubUrl,
	chainId,
	validatorAddress,
	width,
	height,
	className,
	logoExtension = 'png',
}: IProps): JSX.Element => {
	const url = `${githubUrl}/raw/${githubBranchName}/${chainId}/${validatorAddress}.${logoExtension}`;
	const [showDefault, setShowDefault] = useState(false);

	useEffect(() => { }, [showDefault])
	// what's the type of event for this?
	function handleImageError(e: any) {
		setShowDefault(true)
	}

	if (showDefault) {
		return <DefaultValidatorIcon height={height} width={width} className={`rounded-circle placeholder-image ${className}`} />
	}

	return (
		<img
			alt=""
			width={width}
			height={height}
			src={url}
			onError={(e) => handleImageError(e)}
			className={`rounded-circle placeholder-image ${className}`}
		/>
	);
};

export default ValidatorLogo;

const DefaultValidatorIcon = (props) => (
	<svg
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1}
		stroke="currentColor"
		{...props}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
		/>
	</svg>
)
