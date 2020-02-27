import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

type Props = {
  name: string;
  label: string;
};

const PasswordField: React.FC<Props> = props => {

  const onIconClick = (/* event: React.MouseEvent<HTMLButtonElement> */): void => {

  };

  return (
    <TextField
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={onIconClick}>
              <VisibilityIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
      {...props}
    />
  );

};
export default PasswordField;
