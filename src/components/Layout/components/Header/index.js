import ClassNames from 'classnames/bind';
import styles from './Header.module.scss';

const CX = ClassNames.bind(styles);

function Header() {
    return (
        <header className={CX('wrapper')}>
            <div className={CX('inner')}>
                {/* Logo */}
                {/* Search */}
            </div>
        </header>
    );
}

export default Header;
