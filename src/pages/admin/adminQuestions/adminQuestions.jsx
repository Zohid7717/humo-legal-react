import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UContainer from '../../../components/ui/container/UContainer';
import { fetchQuestionAll } from '../../../services/redux/question/slice';
import axios from '../../../services/network/axios'
import styles from './adminQuestions.module.scss'
import FormToAdd from '../../../components/ui/formToAdd/FormToAdd';
import { setSelectedForm } from '../../../services/redux/formType/slice';
import { selectIsAuth } from '../../../services/redux/slices/auth';

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

const AdminQuestion = () => {
  const isAuth = useSelector(selectIsAuth);

  const dispatch = useDispatch();

  const question = useSelector(state => state.questionReducer.question)

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [itemStatus, setItemStatus] = useState(false);
  const [activeFormToAdd, setActiveFormToAdd] = useState(false);

  const onSubmit = async () => {
    event.preventDefault();
    try {
      const fields = {
        title,
        text,
      }
      await axios.post('/createQuestion', fields)
      setActiveFormToAdd(false)
      setItemStatus(true)
    } catch (error) {
      console.error(error)
      alert('Ошибка при создании FAT!')
    }
  }

  useEffect(() => {
    dispatch(fetchQuestionAll())
    setItemStatus(false)
    dispatch(setSelectedForm(4))
  }, [itemStatus, isAuth]);

  const delItem = (id) => {

    axios.delete(`removeQuestion/${id}`)
    setItemStatus(true)
  }

  const rows = question.map((item) => (
    createData(item.title, <div className='render-question' dangerouslySetInnerHTML={{ __html: item.text }}></div>, <button onClick={() => delItem(item._id)} className="del-btn">Удалить</button>)
  ))

  if (!isAuth) {
    return <Navigate to='/' />
  }
  return (
    <div className={styles.adminQuestion}>
      <UContainer>
        <div className="card-wrap">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Вопрос</StyledTableCell>
                  <StyledTableCell align="right">Ответ</StyledTableCell>
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
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {
            activeFormToAdd
              ? <FormToAdd
                setActiveFormToAdd={setActiveFormToAdd}
                title={title}
                setTitle={setTitle}
                text={text}
                setItemStatus={setItemStatus}
                setText={setText}
                onSubmit={onSubmit}
              />
              : ''
          }
        </div>
        <button onClick={() => setActiveFormToAdd(true)} className='add-BTN' >Добавить</button>
      </UContainer>
    </div>
  );
}

export default AdminQuestion;
