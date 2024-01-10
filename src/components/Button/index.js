import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const CX = classNames.bind(styles);

function Button({
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    small = false,
    large = false,
    disabled = false,
    to,
    href,
    children,
    leftIcon,
    rightIcon,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = { onClick, ...passProps };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function')
                delete props[key];
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = CX('wrapper', {
        primary,
        text,
        outline,
        small,
        large,
        disabled,
        rounded,
        [className]: className,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={CX('icon')}>{leftIcon}</span>}
            <span className={CX('title')}>{children}</span>
            {rightIcon && <span className={CX('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
