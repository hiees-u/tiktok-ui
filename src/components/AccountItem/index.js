import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './AccountItem.module.scss';

const CX = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={CX('wrapper')}>
            <img
                className={CX('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/913d2f521dd652f95d4988be080f7777~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1704974400&x-signature=U%2BmRPxSn0emO1jByzvr5GRszRsc%3D"
                alt=""
            />
            <div className={CX('info')}>
                <p className={CX('name')}>
                    <span>Nguyen Minh Hieu</span>
                    <FontAwesomeIcon
                        className={CX('check-icon')}
                        icon={faCheckCircle}
                    />
                </p>
                <span className={CX('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
