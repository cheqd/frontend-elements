import React from 'react';
import { QRCode as ReactQRCode } from 'react-qrcode-logo';
import LogoDark from '../../../assets/images/cheqd-logo.png';

interface IProps {
	content: string;
	size?: number;
	color?: string;
}

const QRCode = (props: IProps): JSX.Element => {
	const { content, size: sizeProps, color } = props;
	const size = sizeProps || 80;
	const logoSize = size / 5.0;

	return (
		<ReactQRCode removeQrCodeBehindLogo value={content} logoImage={LogoDark} logoWidth={logoSize} logoHeight={logoSize} />
	);
};

export default QRCode;
