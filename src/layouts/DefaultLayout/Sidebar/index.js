import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const CX = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={CX('wrapper')}>
            <h2>Sidebar</h2>
        </aside>
    );
}

export default Sidebar;
