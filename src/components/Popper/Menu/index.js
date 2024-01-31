import ClassNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItems from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const CX = ClassNames.bind(styles);

const defaultFn = () => {};

function Menu({
    children,
    items = [],
    hideOnClick = true,
    onChange = defaultFn,
}) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            // visible

            interactive
            delay={[0, 800]}
            offset={[16, 8]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={(attrs) => (
                <div className={CX('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWrapper className={CX('menu-PopperWrapper')}>
                        {history.length > 1 && (
                            <Header
                                title={'Language'}
                                onBack={() => {
                                    setHistory((prev) =>
                                        prev.slice(0, prev.length - 1),
                                    );
                                }}
                            />
                        )}
                        <div className={CX('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHidden={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
