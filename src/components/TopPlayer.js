import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
});

const TopPlayer = ({ players }) => {
  const classes = useStyles();
  const topPlayer = players.filter(e => {
    return e.rank === 1;
  });

  // if (topPlayer!) {
  //   return (
  //     <React.Fragment>
  //       <Title>Top Player</Title>
  //       <Typography color="textSecondary" className={classes.depositContext}>
  //         There is no top player
  //       </Typography>
  //     </React.Fragment>
  //   )
  // };

  console.log({ players });
  console.log(Object.values(topPlayer));

  return topPlayer ? (
    <React.Fragment>
      <Title>Top Player</Title>
      <Typography component="p" variant="h4">
        {topPlayer.player}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View player
        </Link>
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Title>Top Player</Title>
      <Typography color="textSecondary" className={classes.depositContext}>
        There is no top player
      </Typography>
    </React.Fragment>
  );
};

export default TopPlayer;
