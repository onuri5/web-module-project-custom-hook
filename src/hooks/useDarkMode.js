import React from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (dark) => {
    const [theme, setTheme] = useLocalStorage('theme', dark);
    return [theme, setTheme];
}

export default useDarkMode;