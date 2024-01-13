import ClassNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const CX = ClassNames.bind(styles);

function Header({ title, onBack }) {
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={CX('header')}>
            <button className={CX('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={CX('header-title')}>{title}</h4>
        </header>
    );
}

export default Header;
