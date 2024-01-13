import Button from '~/components/Button';

import ClassNames from 'classnames/bind';
import styles from './Menu.module.scss';

const CX = ClassNames.bind(styles);

function MenuItems({ data, onClick }) {
    return (
        <Button
            className={CX('menu-item', {
                separate: data.separate,
            })}
            leftIcon={data.icon}
            to={data.to}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

export default MenuItems;
