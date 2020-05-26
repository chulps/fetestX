/** @jsx jsx */
import React from 'react';
import cn from 'classnames';
import { css, jsx } from '@emotion/core';
// import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Account } from '../App';
import PersonCredit from './PersonCredit';


type Props = {
  className?: string;
  accountData: Account;
  maxCredits?: number;
};

const PersonDetails: React.FC<Props> = props => {
  const {
    className = '',
    accountData,
    maxCredits = 3
  } = props;

  // const theme = useTheme();

  const style = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    flex: 1;

  `;

  return (
    <div className={cn(className, 'PersonDetails')} css={style}>
      {accountData.credits.slice(0, maxCredits).map( credit => {
        return (
          <PersonCredit key={credit.id} creditData={credit} />
        )
      })}
      <Button className="contact" color="primary">
        Contact this person
      </Button>
    </div>
  )
};

export default PersonDetails;
