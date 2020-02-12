import React from 'react';
import TextField from '@material-ui/core/TextField';
type Props = {
  name: string;
  label: string;
};
const PasswordField: React.FC<Props> = props => {
  return <TextField fullWidth {...props} />;
};
export default PasswordField;
