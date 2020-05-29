/** @jsx jsx */
import React from "react";
import cn from "classnames";
import { css, jsx } from "@emotion/core";
import { Account } from "../App";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import { COLORS } from "../colors";
type Props = {
  className?: string;
  accountData: Account;
};

const PersonCard: React.FC<Props> = props => {
  const { className = "", accountData } = props;

  const theme = useTheme();

  const style = css`
    display: flex;
    flex-direction: column;
    background-color: var(--siteBG);
    border: none;
    box-shadow: 6px 6px 12px #3f51b511, -6px -6px 12px rgba(255, 255, 255, 0.5);
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 1em;

    .PersonCard-Avatar {
      height: 150px;
      width: 150px;
      border-radius: 100%;
      border: 4px solid ${COLORS.BORDER_COLOR};
    }

    .link {
      color: ${COLORS.LINK_COLOR};
      transition: color 0.4s ease;

      &:hover {
        color: ${COLORS.LINK_SECONDARY_COLOR};
        cursor: pointer;
      }
    }
  `;

  const fullName = `${accountData.firstName} ${accountData.lastName}`;

  return (
    <div className={cn(className, "PersonCard pt20 pb20 lg-p0")} css={style}>
      <img
        className="PersonCard-Avatar mb10"
        src={accountData.accountImage.url}
        alt={fullName}
      />
      <Typography className="link" variant="h6">
        {fullName}
      </Typography>
      <Typography variant="body2">
        {`${accountData.locationCity}, ${accountData.locationArea}`}
      </Typography>
    </div>
  );
};

export default PersonCard;
