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
    .wrapper {
      height: 100vh;
      width: 100vw;
      background-color: bisque;
    }

    .inner {
      max-width: 500px;
      margin: 0 auto;
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
      <FormController onSubmit={onSubmit}>
        <InputField name="email" label="Email address?" /><br/>
        <InputField name="full_name" label="Your full name here" /><br/>
        <PasswordField name="password" label="Password" /><br/>
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
