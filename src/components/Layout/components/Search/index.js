import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import ClassNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { SearchIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as searchServices from '~/apiServices/searchServices';

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

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debounced);
            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
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
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) setSearchValue(searchValue);
    };

    return (
        // Using a wrapper <div> tag around the reference element solves
        // this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                // appendTo={() => document.body}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div
                        className={CX('search-result')}
                        tabIndex={-1}
                        {...attrs}
                    >
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
                        <button
                            className={CX('clear')}
                            onClick={() => handleClear()}
                        >
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
                    <button
                        className={CX('search-btn')}
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
