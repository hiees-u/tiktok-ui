import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const CX = classNames.bind(styles);

function Wrapper({ children }) {
    return <div className={CX('wrapper')}>{children}</div>;
}

export default Wrapper;
