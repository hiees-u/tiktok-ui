import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const CX = classNames.bind(styles);

function Wrapper({ children, className }) {
    return <div className={CX('wrapper', className)}>{children}</div>;
}

export default Wrapper;
