import React from 'react';

export interface FormErrorProps {
  name?: string;
  formState: any;
}
export function FormError({ formState, name = 'root' }: FormErrorProps) {
  const message = formState.errors[name]?.message || <br />;
  return <div className="text-center form-text text-danger">{message}</div>;
}
