import Button from '~/components/Button';

import ClassNames from 'classnames/bind';
import styles from './Menu.module.scss';

const CX = ClassNames.bind(styles);

function MenuItems({ data }) {
    return (
        <Button className={CX('menu-item')} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
