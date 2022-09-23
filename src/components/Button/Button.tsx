import React from 'react';
import Loading from '../Loading/Loading';
import { IProps } from './Button.types';
import './Button.scss';

const Button = (props: IProps): JSX.Element => {
    const { children, onPress, outline, className, loading } = props;

    return (
        <div
            onClick={!loading ? onPress : () => null}
            className={`app-btn ${outline ? 'app-btn-outline' : 'app-btn-plain'} ${className}`}
        >
            {loading ? <Loading /> : children}
        </div>
    );
};

export default Button;
