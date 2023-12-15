import { Err } from '@lsk4/err';
import { createLogger } from '@lsk4/log';
import { FieldValues, useForm } from 'react-hook-form';

type UseSmartFormProps = {
  onSubmit: (values: any) => Promise<any>;
};
const log = createLogger('form');

export const useSmartForm = <T extends FieldValues>({ onSubmit, ...props }: UseSmartFormProps) => {
  // console.log({ useForm, React });
  const { register, handleSubmit, formState, setError, clearErrors, ...other } = useForm<T>(props);
  async function onWrappedSubmit(values: T) {
    if (formState.isSubmitting) return;
    clearErrors();
    try {
      await onSubmit(values);
    } catch (err) {
      log.error(err);
      setError('root', { message: Err.getMessage(err) });
    }
  }
  return {
    register,
    handleSubmit,
    formState,
    setError,
    clearErrors,
    onSmartSubmit: handleSubmit(onWrappedSubmit),
    ...other,
  };
};
