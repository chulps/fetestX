import React, { ReactElement } from 'react';

type Props = {
  className?: string;
  onSubmit: (values: any) => Promise<void>;
  children: ReactElement[];
}

const FormController: React.FC<Props> = props => {
  const {
    className = '',
    children,
    onSubmit
  } = props;

  const onFormValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {

  };

  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  )
};

export default FormController;
