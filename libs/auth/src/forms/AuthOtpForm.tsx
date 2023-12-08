import { Debug } from '@rckit/debug';
import { Col, Form } from 'react-bootstrap';

import { FormButton, FormItem, useSmartForm } from '@rckit/form';

export interface AuthOtpFormValues {
  code: string;
}
export interface AuthOtpFormProps {
  onSubmit: (values: AuthOtpFormValues) => Promise<void>;
}
export function AuthOtpForm({ onSubmit }: AuthOtpFormProps) {
  const { register, formState, onSmartSubmit } = useSmartForm<AuthOtpFormValues>({
    onSubmit,
  });
  return (
    <Form onSubmit={onSmartSubmit} className="row g-3">
      <Col lg={12}>
        <Debug>
          {/* <OTPInput
            // value={otp}
            // onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>&nbsp;</span>}
            renderInput={(props) => (
              <Form.Control
                {...props}
                style={{
                  height: '50px',
                  width: '50px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  fontSize: '20px',
                  textAlign: 'center',
                  margin: '0 10px',
                  padding: 0,
                }}
              />
            )}
            {...register('code', { required: 'Code cannot be blank' })}
          /> */}
        </Debug>
        <Col lg={12}>
          <FormItem id="code" label="Code" error={formState.errors.code?.message} required>
            <Form.Control
              type="code"
              // placeholder="1234"
              {...register('code', { required: 'Code cannot be blank' })}
            />
          </FormItem>
        </Col>
      </Col>

      <Col lg={12}>
        <FormButton formState={formState} type="submit" className="w-100">
          Enter code
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
