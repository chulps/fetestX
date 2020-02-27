/** @jsx jsx */

import React, { useState } from 'react';
import { css, jsx } from '@emotion/core';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';

import FormController from './FormController';
import InputField from './InputField';
import PasswordField from './PasswordField';

const App: React.FC<{}> = () => {
  const theme = useTheme();
  const style = css`
    .inner {
      max-width: 500px;
      margin: 0 auto;
      margin-top: ${theme.spacing(10)}px;
    }

    .controller {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .submit-button {
      margin-top: ${theme.spacing(4)}px;
    }

  `;
  const [ submitValues, setSubmitValues ] = useState<string>('');

  const onSubmit = async (value: any): Promise<void> => {
    setSubmitValues(JSON.stringify(value));
  };

  return (
    <div className="container" css={style}>
      <div className="inner">
        <Typography variant="body1">
          Let&apos;s make a Form Library!
        </Typography>

        <Typography variant="body2">
          Things to do:<br/><br/>

          Make the password field show/hide its value<br/><br/>
          Store the value of the form in an object taking the form of {`{ name: value }`}<br/><br/>
          Keep this value in the state of {`<FormController>`}<br/><br/>
          Submitting the form should run "onSubmit()"<br/><br/>




        </Typography>
        <FormController className="controller" onSubmit={onSubmit}>
          <InputField name="email" label="Email address?" />
          <InputField name="full_name" label="Your full name here" />
          <PasswordField name="password" label="Password" />
          <Button className="submit-button" type="submit" variant="outlined">Submit this form!</Button>
        </FormController>
        {submitValues && (
          <Typography variant="body1">
            You submitted<br/><br/>
            {submitValues}
          </Typography>
        )}
      </div>
    </div>
  );
}

export default App;
