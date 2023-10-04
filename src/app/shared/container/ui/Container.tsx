import cls from './Container.module.scss';
import React, { FC } from 'react';

type Props = {
    children: React.ReactNode;
    className?: string;
};
export const Container: FC<Props> = ({ children, className }) => {
    return (
        <section className={`${cls.Container} ${className}`}>
            {children}
        </section>
    );
};
