import ClassNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const CX = ClassNames.bind(styles);

function Header() {
    const [searchResult, setsearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setsearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={CX('wrapper')}>
            <div className={CX('inner')}>
                {/* Logo */}
                <div className={CX('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                {/* Search */}
                <Tippy
                    visible={searchResult.length > 0}
                    interactive
                    render={(attrs) => (
                        <div
                            className={CX('search-result')}
                            tabIndex={-1}
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={CX('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={CX('search')}>
                        <input
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />
                        <button className={CX('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* loading */}
                        <FontAwesomeIcon
                            className={CX('loading')}
                            icon={faSpinner}
                        />

                        <button className={CX('search-btn')}>
                            {/* Search */}
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={CX('actions')}>
                    <Button text>Upload</Button>
                    <Button
                        primary
                        leftIcon={<FontAwesomeIcon icon={faCircleXmark} />}
                        rightIcon={<FontAwesomeIcon icon={faCircleXmark} />}
                    >
                        Log in
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
