import ClassNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

const CX = ClassNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={CX('wrapper')}>
            <Header />
            <div className={CX('container')}>
                <Sidebar />
                <div className={CX('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
