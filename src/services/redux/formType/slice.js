import { createSlice } from '@reduxjs/toolkit'

const formTypes= [
  {
    name: 'Пресс',
    title: 'Загаловок',
    text: true,
    paramTree: 'Источник',
    category: true,
    image: true,
  },
  {
    name: 'Отзывы',
    title: 'Компания',
    text: true,
    paramTree: 'Имя сотрудника',
    category: false,
    image: true,
  },
  {
    name: 'Персонал',
    title: 'Имя сотрудника',
    text: true,
    paramTree: false,
    category: false,
    image: true,
  },
  {
    name: 'Услуги',
    title: 'Услуга',
    text: true,
    paramTree: false,
    category: false,
    image: true,
  },
  {
    name: 'Вопросы',
    title: 'Вопрос',
    text: true,
    paramTree: 'Данные о клиенте',
    category: false,
    image: false,
  },
]

const initialState = {
  selectedForm: 0,
  formType: {}
}

const FormTypeSlice = createSlice({
  name: 'formType',
  initialState,
  reducers: {
    setSelectedForm(state, action) {
      state.selectedForm = action.payload;
      state.formType = formTypes[state.selectedForm];
    }
  }
})

export const { setSelectedForm } = FormTypeSlice.actions

export const formTypeReducer = FormTypeSlice.reducer