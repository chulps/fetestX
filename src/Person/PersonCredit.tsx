/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import cn from "classnames";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import { Credit } from "../App";
import { COLORS } from "../colors";

type Props = {
  className?: string;
  creditData: Credit;
};

const PersonCredit: React.FC<Props> = props => {
  const { className = "", creditData } = props;
  const theme = useTheme();

  const style = css`
    width: 100%;
    justify-content: space-between;
    padding-bottom: 16px;
    margin-bottom: 16px;

    .credit-top {
      margin: ${theme.spacing(1)}px 0;

      &-left {
        font-weight: 800;
      }

      &-right {
        font-weight: normal;
        text-align: right;
        font-style: italic;
      }
    }

    .credit-bottom {
      font-size: 0.625rem;
      color: lightgray;

      &-left {
        font-weight: 400;
      }

      &-right {
        text-align: right;
      }
    }

    &:not(:last-of-type) {
      border-bottom: 1px solid ${COLORS.BORDER_COLOR};
    }
  `;

  return (
    <div
      className={cn(className, "PersonCredit two-columns gap20")}
      css={style}
    >
      <div className="PersonCredit-left flex-column flex-space-between">
        <Typography className="credit-top credit-top-left" variant="body1">
          {creditData.position}
        </Typography>
        <Typography
          className="credit-bottom credit-bottom-left"
          variant="body1"
        >
          {creditData.productionType}
        </Typography>
      </div>
      <div className="PersonCredit-right">
        <Typography className="credit-top credit-top-right" variant="body1">
          "{creditData.productionTitle}"
        </Typography>

        <Typography
          className="credit-bottom credit-bottom-right"
          variant="body1"
        >
          {creditData.year}
        </Typography>
      </div>
    </div>
  );
};

export default PersonCredit;
