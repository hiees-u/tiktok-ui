import ClassNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItems from './MenuItem';

const CX = ClassNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => (
            <MenuItems key={index} data={item} />
        ));
    };

    return (
        <Tippy
            // visible
            delay={[0, 800]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={CX('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWrapper className={CX('menu-PopperWrapper')}>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
