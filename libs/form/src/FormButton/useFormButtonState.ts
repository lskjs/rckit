// import '@total-typescript/ts-reset/array-includes';

import { useEffect, useState } from 'react';
import { FormState } from 'react-hook-form';

function getButtonStatus({
  isSubmitting,
  submitCount,
  isValid,
  errors,
  isSubmitted,
  isSubmitSuccessful,
}: FormState<any>) {
  if (isSubmitting) {
    return 'progress';
  }
  if (submitCount && (!isValid || (isSubmitted && Object.keys(errors).length))) {
    return 'error';
  }
  if (isSubmitSuccessful) {
    return 'success';
  }
  return null;
}

export function useFormButtonState(formState: FormState<any>, { timeout = 2000 } = {}) {
  const [buttonStatus, setButtonStatus] = useState<'success' | 'error' | 'progress' | null>(null);

  const status = getButtonStatus(formState);
  useEffect(() => {
    setButtonStatus(status);
    if (['error', 'success'].includes(status || '')) {
      // TODO: перебивают ли статусы друг друга
      setTimeout(() => {
        setButtonStatus(null);
      }, timeout);
    }
  }, [status, timeout]);

  return buttonStatus;
}
