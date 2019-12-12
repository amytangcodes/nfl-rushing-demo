import React from "react";
import PropTypes from "prop-types";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

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

const preventDefault = event => {
  event.preventDefault();
};

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

const Rushings = ({ players }) => {
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
          {players.map(player => (
            <TableRow key={player.id}>
              <TableCell>{player.rank}</TableCell>
              <TableCell>{player.player}</TableCell>
              <TableCell>{player.team}</TableCell>
              <TableCell>{player.pos}</TableCell>
              <TableCell>{player.att}</TableCell>
              <TableCell>{player.attG}</TableCell>
              <TableCell>{player.yds}</TableCell>
              <TableCell>{player.avg}</TableCell>
              <TableCell>{player.ydsG}</TableCell>
              <TableCell>{player.td}</TableCell>
              <TableCell>{player.lng}</TableCell>
              <TableCell>{player.first}</TableCell>
              <TableCell>{player.firstPer}</TableCell>
              <TableCell>{player.twentyPlus}</TableCell>
              <TableCell>{player.fortyPlus}</TableCell>
              <TableCell>{player.fum}</TableCell>
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
};

Rushings.propTypes = {
  players: PropTypes.object.isRequired
};

export default Rushings;
