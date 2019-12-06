import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(
  rank,
  player,
  team,
  pos,
  att,
  attG,
  yds,
  avg,
  ydsG,
  td,
  lng,
  first,
  firstPer,
  twentyPlus,
  fortyPlus,
  fum
) {
  return {
    rank,
    player,
    team,
    pos,
    att,
    attG,
    yds,
    avg,
    ydsG,
    td,
    lng,
    first,
    firstPer,
    twentyPlus,
    fortyPlus,
    fum
  };
}

const HEADERS = [
  "Rank",
  "Player",
  "Team",
  "Pos",
  "Att",
  "Att/G",
  "Yds",
  "Avg",
  "Yds/G",
  "TD",
  "Lng",
  "1st",
  "1st%",
  "20+",
  "40+",
  "FUM"
];

const ROWS = [
  createData(
    1,
    "Nick Chubb",
    "CLE",
    "RB",
    238,
    19.8,
    1,
    175,
    4.9,
    97.9,
    7,
    "88T",
    49,
    20.6,
    8,
    3,
    2
  ),
  createData(
    2,
    "Christian McCaffrey",
    "CAR",
    "RB",
    235,
    19.6,
    1,
    167,
    5.0,
    97.2,
    12,
    "84T",
    41,
    17.4,
    6,
    4
  )
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Rushing() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>NFL Rushing Stats</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {HEADERS.map(header => (
              <TableCell key={header.id}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {ROWS.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.rank}</TableCell>
              <TableCell>{row.player}</TableCell>
              <TableCell>{row.team}</TableCell>
              <TableCell>{row.pos}</TableCell>
              <TableCell>{row.att}</TableCell>
              <TableCell>{row.attG}</TableCell>
              <TableCell>{row.yds}</TableCell>
              <TableCell>{row.avg}</TableCell>
              <TableCell>{row.ydsG}</TableCell>
              <TableCell>{row.td}</TableCell>
              <TableCell>{row.lng}</TableCell>
              <TableCell>{row.first}</TableCell>
              <TableCell>{row.firstPercent}</TableCell>
              <TableCell>{row.twentyPlus}</TableCell>
              <TableCell>{row.fortyPlus}</TableCell>
              <TableCell>{row.fumb}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more rushing stats
        </Link>
      </div>
    </React.Fragment>
  );
}
