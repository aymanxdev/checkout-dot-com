import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Table from "@material-ui/core/Table";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import "./movies.css";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    Width: 300,
    width: "50%",
    alignContent: "center",
  },
});
const Movies = () => {
  const classes = useStyles();
  const [search, setSearch] = useState(false);
  const [message, setMessage] = useState(null);
  const [year, setYear] = useState("");
  const [movies, setMovies] = useState([]);
  const searchMovies = async (e) => {
    e.preventDefault();
    setSearch(true);
    const url = `https://jsonmock.hackerrank.com/api/movies?Year=${year}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("data ", data);
      setMessage(null);
      setMovies(data.data); // needs check
      setSearch(false);
    } catch (err) {
      setMessage("Unexpected Error happened");
      setSearch(false);
    }
  };

  return (
    <div>
      <h1 className="gradient-title">Find Your Favourite Movie</h1>

      <form onSubmit={searchMovies}>
        <TextField
          className="search-input"
          label="Enter Movie Year"
          variant="outlined"
          type="text"
          placeholder="Enter a year"
          name="year"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          align="center"
        >
          Search
        </Button>
      </form>

      <div className="movies-container">
        {search && !message ? (
          <span>Loading...</span>
        ) : message ? (
          <div className="message"> {message} </div>
        ) : (
          <TableContainer className="table">
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell className="table-header" align="left">
                    Movie Title
                  </StyledTableCell>
                  <StyledTableCell className="table-header" align="center">
                    Year
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody className="table-body">
                {movies.map((movie) => (
                  <StyledTableRow key={movie.imdbID}>
                    <StyledTableCell component="th" scope="row" align="left">
                      {movie.Title}
                    </StyledTableCell>

                    <StyledTableCell align="right">
                      {movie.Year}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
};

export default Movies;
