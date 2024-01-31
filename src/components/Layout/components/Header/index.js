import ClassNames from 'classnames/bind';

import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import routesConfig from '~/config/routes';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Search from '../Search';

const CX = ClassNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={CX('wrapper')}>
            <div className={CX('inner')}>
                {/* Logo */}
                <Link to={routesConfig.home} className={CX('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </Link>

                {/* Search */}
                <Search />

                <div className={CX('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 150]}
                                content="Upload Video"
                                placement="bottom"
                            >
                                <button className={CX('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy
                                delay={[0, 150]}
                                content="Tin nhắn"
                                placement="bottom"
                            >
                                <button className={CX('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy
                                delay={[0, 150]}
                                content="Hộp Thư"
                                placement="bottom"
                            >
                                <button className={CX('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu
                        hideOnClick={false}
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={CX('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/6c1151ce8f0bd5684e0a4c8ed936fd0a.jpeg?lk3s=a5d48078&x-expires=1705327200&x-signature=eFjVDwZUcHSSuw%2FiwU7mESX1QHU%3D"
                                alt="Nguyễn Minh Hiếu"
                            />
                        ) : (
                            <button className={CX('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
