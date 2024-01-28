import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import Image from '../Image';

import styles from './AccountItem.module.scss';

const CX = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={'/@' + data.nickname} className={CX('wrapper')}>
            <Image
                className={CX('avatar')}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={CX('info')}>
                <p className={CX('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && (
                        <FontAwesomeIcon
                            className={CX('check-icon')}
                            icon={faCheckCircle}
                        />
                    )}
                </p>
                <span className={CX('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
