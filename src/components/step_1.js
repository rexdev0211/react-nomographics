import React, { useState, useEffect, useCallback } from 'react';

//FOR API
import axios from "axios";

//FOR UI
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

//ICON
import ClearIcon from '@mui/icons-material/Clear';
import CircularProgress from '@mui/material/CircularProgress';

import { Colors } from "./constants";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 12,
    borderBottom: "none",
    paddingBottom: 0
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  }
}));
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
];

const ColorView = ({ color }) => {
  return <div style={{ borderRadius: 4, margin: "auto", height: 30, maxWidth: 50, backgroundColor: color }} />;
};

const RandomColorView = ({ color }) => {
  var item = Colors[Math.floor(Math.random()*Colors.length)];
  return <div style={{ borderRadius: 4, margin: "auto", height: 30, maxWidth: 50, backgroundColor: item }} />;
};

const Item = React.memo(
  ({ nomo, deleteHandler }) => {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
          {nomo.name && (
            <>
              <TableHead>
                <TableRow>
                  <StyledTableCell colSpan="2">TAGLINE</StyledTableCell>
                  <StyledTableCell align="right">SIZE</StyledTableCell>
                  <StyledTableCell align="center">COLOR</StyledTableCell>
                  <StyledTableCell align="left">FONT</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <StyledTableCell component="th" scope="row" colSpan="2">
                    Hi, I am {nomo.name.text} but you can call me
                  </StyledTableCell>
                  <StyledTableCell align="right">{nomo.name.size}</StyledTableCell>
                  <StyledTableCell align="center">
                    <ColorView color={"#05af53"} />
                  </StyledTableCell>
                  <StyledTableCell align="left">{nomo.ipa.font}</StyledTableCell>
                  <StyledTableCell style={{ width: 30 }}>
                    <IconButton
                      aria-label="delete"
                      style={{ padding: 2 }}
                      onClick={(e) => {
                        deleteHandler(e, nomo);
                      }}>
                      <ClearIcon />
                    </IconButton>
                  </StyledTableCell>

                </TableRow>
              </TableBody>
            </>
          )}
          {nomo.ipa && (
            <>
              <TableHead>
                <TableRow>
                  <StyledTableCell colSpan="2">PRONOUNCIATION</StyledTableCell>
                  <StyledTableCell align="right">SIZE</StyledTableCell>
                  <StyledTableCell align="center">COLOR</StyledTableCell>
                  <StyledTableCell align="left">FONT</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <StyledTableCell component="th" scope="row" colSpan="2">
                    /{nomo.ipa.text}/
                  </StyledTableCell>
                  <StyledTableCell align="right">{nomo.ipa.size}</StyledTableCell>
                  <StyledTableCell align="center">
                    <ColorView color={"#05af53"} />
                  </StyledTableCell>
                  <StyledTableCell align="left">{nomo.ipa.font}</StyledTableCell>
                  <StyledTableCell style={{ width: 30 }}>
                    <IconButton aria-label="delete" style={{ padding: 2 }}>
                      <ClearIcon />
                    </IconButton>
                  </StyledTableCell>

                </TableRow>
              </TableBody>
            </>
          )}
          {nomo.var && (
            <>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right">LANGUAGE</StyledTableCell>
                  <StyledTableCell align="right">NAME</StyledTableCell>
                  <StyledTableCell align="right">SIZE</StyledTableCell>
                  <StyledTableCell align="center">COLOR</StyledTableCell>
                  <StyledTableCell align="left">FONT</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {nomo.var.map((row, idx) => (
                  <TableRow
                    key={idx}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {row.lang || 'lang'}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.text}</StyledTableCell>
                    <StyledTableCell align="right">{row.size}</StyledTableCell>
                    <StyledTableCell align="center">
                      <RandomColorView color={"#f5ff53"} />
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.font}</StyledTableCell>
                    <StyledTableCell style={{ width: 30 }}>
                      <IconButton aria-label="delete" style={{ padding: 2 }}>
                        <ClearIcon />
                      </IconButton>
                    </StyledTableCell>

                  </TableRow>
                ))}
              </TableBody>
            </>
          )}

        </Table>
      </TableContainer>
    );
  });

function Step1({nomo, setNomo, name, setName}) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const nameEntered = () => {
    setLoading(true);
    if(name.length > 0)
      axios.get(`api/nomo?name=${name}`).then((response) => {
        console.log("api url",`api/nomo?name=${name}`);
        console.log("data from api", response.data);
        setData(response.data);
        var nomo = Object.values(response.data?.var).map(e => (
          {
            ...e,
            value: e.size,
            freq: e.size,
          }));
        console.log('text', nomo);
        setNomo(nomo);
        setLoading(false);
      })
        .catch(err => { console.log(err); setLoading(false); });
    else {
      setNomo({});
      setLoading(false);
    }
  };

  const inputKeyPress = (e) => {
    if (e.keyCode == 13)
      nameEntered();
  };

  const itemDeleteHandler = useCallback((e, favoriteValue) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes["data-sessionid"].value);
    dispatch({
      type: favoriteValue === true ? "favorite" : "unfavorite",
      sessionId,
    });
  }, []);

  return (
    <Container className="Step1">
      <h3>1. Enter your Mondonomo </h3>
      <Paper
        sx={{ p: '0px 0px', display: 'flex', alignItems: 'center', width: 400, margin: 'auto', marginBottom: 1 }}
      >
        <Input
          sx={{ ml: 1, flex: 1 }}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => inputKeyPress(e)}
          placeholder="Name"
        />
        <Button variant="contained" onClick={() => nameEntered()}>Generate</Button>
      </Paper>

      {loading ? <CircularProgress sx={{ mt: 10, mb:10 }} /> :
        <>
          <Item
            nomo={data}
            // deleteHandler={itemDeleteHandler}
          />
          <Button sx={{ mt: 1}}>Add New Language +</Button>
        </>
      }
    </Container>
  );
}

export default Step1;
