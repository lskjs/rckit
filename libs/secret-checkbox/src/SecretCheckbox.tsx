import React, { useEffect, useState } from 'react';

type SecretCheckboxProps = React.HtmlHTMLAttributes<HTMLInputElement> & {
  count?: number;
  value?: boolean;
  onChange?: (value: boolean) => void;
};

type SecretCheckboxState = {
  count: number;
  value: boolean;
};

export const SecretCheckbox = ({
  count: maxCount = 5,
  value: defaultValue,
  onChange,
  ...props
}: SecretCheckboxProps) => {
  const [state, setState] = useState<SecretCheckboxState>({
    count: 0,
    value: !!defaultValue,
  });

  useEffect(() => {
    setState({ count: 0, value: !!defaultValue });
  }, [defaultValue]);

  const handleClick = () => {
    const { count = 0, value } = state;
    // console.log({ count, maxCount });
    if (count < maxCount - 1) {
      setState({
        count: state.count + 1,
        value,
      });
      return;
    }
    const newValue = !value;
    setState({ count: 0, value: newValue });
    if (onChange) onChange(newValue);
  };

  return <input type="checkbox" checked={state.value} onChange={handleClick} {...props} />;
};
