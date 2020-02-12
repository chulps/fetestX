import React from 'react';
import TextField from '@material-ui/core/TextField';

type Props = {
  className?: string;
  name: string;
  label: string;
}
const InputField: React.FC<Props> = props => {

  return (
    <TextField fullWidth {...props} />
  );
};

export default InputField;

