import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react';

interface UseInputProps {
  type: string;
}
type UseInputReturnType = [
  string,
  ReactElement,
  Dispatch<SetStateAction<string>>,
];
const useInput = ({ type }: UseInputProps): UseInputReturnType => {
  const [value, setValue] = useState('');
  const input = (
    <input onChange={(e) => setValue(e.target.value)} {...{ value, type }} />
  );

  return [value, input, setValue];
};

export default useInput;
