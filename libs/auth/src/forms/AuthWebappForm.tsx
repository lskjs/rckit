import { Col, Form } from 'react-bootstrap';

import { FormButton, FormItem, useSmartForm } from '@/rckit/form';

export interface AuthWebappSignupFormValues {
  email: string;
  tos: boolean;
}
export interface AuthWebappSignupFormProps {
  onSubmit: (values: AuthWebappSignupFormValues) => Promise<void>;
}
export function AuthWebappSignupForm({ onSubmit }: AuthWebappSignupFormProps) {
  const { register, formState, onSmartSubmit } = useSmartForm<AuthWebappSignupFormValues>({
    onSubmit,
  });

  return (
    <Form onSubmit={onSmartSubmit} className="row g-3">
      <Col lg={12}>
        <FormItem id="email" label="Email" error={formState.errors.email?.message} required>
          <Form.Control
            type="email"
            // placeholder="youremail@example.com"
            {...register('email', { required: 'Email cannot be blank' })}
          />
        </FormItem>
      </Col>
      <Col lg={12}>
        <Form.Group>
          <Form.Check
            type="checkbox"
            id="tos"
            label={
              <span>
                I agree to the{' '}
                <a href="/links/tos" target="_blank" rel="noopener noreferrer" tabIndex={-1}>
                  Terms of Service
                </a>
              </span>
            }
            isInvalid={Boolean(formState.errors.tos)}
            {...register('tos', { required: 'You must agree to the Terms of Service' })}
          />
          {formState.errors.tos && (
            <Form.Text className="text-danger">{formState.errors.tos?.message}</Form.Text>
          )}
        </Form.Group>
      </Col>
      <Col lg={12}>
        <FormButton formState={formState} type="submit" className="w-100">
          Sign Up
        </FormButton>
      </Col>
      {formState.errors.root && (
        <Col lg={12} className="text-center form-text text-danger">
          {formState.errors.root?.message}
        </Col>
      )}
    </Form>
  );
}
