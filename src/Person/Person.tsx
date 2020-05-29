/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";
import cn from "classnames";
import { useTheme } from "@material-ui/core/styles";

import PersonCard from "./PersonCard";
import { Account } from "../App";
import PersonDetails from "./PersonDetails";
import { COLORS } from "../colors";
import "../responsive.css";

type Props = {
  className?: string;
  accountData: Account;
};

const Person: React.FC<Props> = props => {
  const { className = "", accountData } = props;
  const theme = useTheme();
  const style = css`
    display: flex;
    width: 100%;
    justify-content: center;

    .Person {
      width: 850px;
    }

    .PersonCard-container {
      width: 300px;
    }

    .PersonDetails-container {
      width: 500px;
      border-left: none;
    }
  `;

  return (
    <div className="Person one-column lg-two-columns gap10 lg-gap30 p10 sm-p20 lg-p0 pb30">
      <div className="PersonCard-container">
        <PersonCard accountData={accountData} />
      </div>
      <div className="PersonDetails-container">
        <PersonDetails accountData={accountData} />
      </div>
    </div>
  );
};

export default Person;
