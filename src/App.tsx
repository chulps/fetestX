/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";
import "./responsive.css";
import "./overrides.css";
// import { useTheme } from '@material-ui/core/styles';

import Person from "./Person";

export type Credit = {
  id: string;
  productionType: string;
  company: string;
  position: string;
  productionTitle: string;
  year: number;
};

export type Account = {
  id: string | number;
  firstName: string;
  lastName: string;
  locationCity: string;
  locationArea: string;
  locationCountry: string;
  accountImage: {
    id: string;
    url: string;
  };
  credits: Credit[];
};

const personData: Account = {
  id: "1",
  firstName: "Alex",
  lastName: "Williamson",
  locationCity: "Los Angeles",
  locationArea: "CA",
  locationCountry: "USA",
  accountImage: {
    id: "11",
    url: "https://placekitten.com/200/200"
  },
  credits: [
    {
      id: "11",
      productionType: "Reality/Doc (TV)",
      company: "YouTube",
      position: "Camera Operator",
      productionTitle: "Hometown Movies Vol I",
      year: 2016
    },
    {
      id: "12",
      productionType: "Reality/Doc (TV)",
      company: "CineMax",
      position: "Camera Operator",
      productionTitle: "Hometown Movies Vol II",
      year: 2016
    },
    {
      id: "13",
      productionType: "Reality/Doc (TV)",
      company: "Vimeo",
      position: "Camera Operator",
      productionTitle: "Hometown Movies Vol III",
      year: 2017
    },
    {
      id: "14",
      productionType: "Reality/Doc (TV)",
      company: "Netflix",
      position: "Camera Operator",
      productionTitle: "Hometown Movies Vol IV",
      year: 2017
    },
    {
      id: "15",
      productionType: "Reality/Doc (TV)",
      company: "Netflix",
      position: "Camera Operator",
      productionTitle: "Hometown Movies Vol V",
      year: 2018
    }
  ]
};

const App: React.FC<{}> = () => {
  // const theme = useTheme();
  const style = css`
    .inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      min-height: 100vh;
      width: 100vw;
      background: var(--siteBG);
    }
  `;

  return (
    <div className="container" css={style}>
      <div className="inner">
        <Person accountData={personData} />
      </div>
    </div>
  );
};

export default App;
