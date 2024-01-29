import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import ClassNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { SearchIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useDebounce } from '~/hooks';
import Style from './Search.module.scss';

const CX = ClassNames.bind(Style);

function Search() {
    const [showResult, setShowResult] = useState(true);
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        fetch(
            'https://tiktok.fullstack.edu.vn/api/users/search?q=' +
                encodeURIComponent(debounced) +
                '&type=less',
        )
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const hanleChangeInput = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <HeadlessTippy
            visible={showResult && searchResult.length > 0}
            interactive
            render={(attrs) => (
                <div className={CX('search-result')} tabIndex={-1} {...attrs}>
                    <PopperWrapper>
                        <h4 className={CX('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={CX('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => hanleChangeInput(e)}
                    onFocus={() => setShowResult(true)}
                />

                {/* clear button */}
                {!!searchValue && !loading && (
                    <button className={CX('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {/* loading button*/}
                {loading && (
                    <FontAwesomeIcon
                        className={CX('loading')}
                        icon={faSpinner}
                    />
                )}

                {/* Search button */}
                <button className={CX('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
