import * as React from 'react';
import { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';

type TSearchBarProps = {
  onChange: Function;
};

export default function SearchBar({ onChange }: TSearchBarProps) {
  
  const [language, setLanguage] = useState<string | null>(null);

  useEffect(() => {
    if (language !== null) {
      const delayDebounceFn = setTimeout(() => {
        onChange(language);
      }, 1000);

      return () => clearTimeout(delayDebounceFn);

    }
  }, [language]);

  return (
    <TextField
      label='Filter with Language'
      variant='filled'
      size='small'
      value={language || ''}
      onChange={(e) => setLanguage(e.target.value)}
    />
  );
}
