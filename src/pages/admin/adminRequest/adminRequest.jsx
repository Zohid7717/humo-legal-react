import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UContainer from '../../../components/ui/container/UContainer';
import { fetchRequestAll } from '../../../services/redux/request/slice';
import axios from '../../../services/network/axios'

import styles from './adminRequest.module.scss'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export const AdminRequest = () => {
  const dispatch = useDispatch();
  const request = useSelector((state) => state.requestReducer.request)
  const [requestStatus, setRequestStatus] = useState(false)

  useEffect(() => {
    dispatch(fetchRequestAll())
    setRequestStatus(false)
  }, [requestStatus]);

  const delItem = (id) => {
    axios.delete(`removeRequest/${id}`)
    setRequestStatus(true)
  }

  const rows = request.map((item) => (
    createData(item.fullName + ' ' + item.surname, item.phone, item.time, item.question, <button onClick={()=>delItem(item._id)} className="del-btn">Удалить</button>)
  ))

  return (
    <div className={styles.adminRequest}>
      <UContainer>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>И.Ф.</StyledTableCell>
                <StyledTableCell align="right">Телефон</StyledTableCell>
                <StyledTableCell align="right">Время</StyledTableCell>
                <StyledTableCell align="right">Вопрос</StyledTableCell>
                <StyledTableCell align="right">Кнопка</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.calories}</StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                  <StyledTableCell align="right">{row.protein}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </UContainer>
    </div>
  );
}

export default AdminRequest;