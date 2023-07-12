import React, { useState } from 'react';

import { TfiClose } from 'react-icons/tfi'
import { useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import UContainer from '../../../../components/ui/container/UContainer';
import axios from '../../../../services/network/axios';
import './formToAdd.scss'

const formToAdd = ({
  title,
  setTitle,
  text,
  setText,
  paramTree,
  setParamTree,
  category,
  setCategory,
  setImageUrl,
  setActiveFormToAdd,
  onSubmit
}) => {

  console.log(category)

  const navigate = useNavigate();

  const handleChange = (e, editor) => {
    setText(editor.getData())
  }

  const handleChangeFile = async (event) => {

    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file)
      const { data } = await axios.post('/upload', formData)
      setImageUrl(data.url)
    } catch (error) {
      console.error(error);
      alert('Ошибка при загрузке файла');
    }
  }

  return (
    <div className='formToAdd'>
      <UContainer>
        <div className="formToAdd__wrap">
          <form className="formToAdd__form">
            <div className="formToAdd__form-wrap">
              <div className="formToAdd__header">
                <label className="formToAdd__title">
                  Загаловок
                  <input
                    type="text"
                    placeholder='Введите загаловок'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </label>
                <label className="formToAdd__source">
                  Источник
                  <input
                    type="text"
                    placeholder='Введите источник'
                    value={paramTree}
                    onChange={(e) => setParamTree(e.target.value)}
                    required
                  />
                </label>
              </div>
              <label className="formToAdd__text">
                Текс
                <CKEditor
                  editor={ClassicEditor}
                  onChange={(e, editor) => { handleChange(e, editor) }}
                />
              </label>
              <TfiClose className='formToAdd__exit' onClick={() => setActiveFormToAdd(false)} />
            </div>
            <div className="formToAdd__footer">
              {
                category === undefined
                  ? ''
                  : <select
                  name="category"
                  className='formToAdd__select'
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Выберайте категорию</option>
                  <option value="news">Новости</option>
                  <option value="low">Меморандум</option>
                  <option value="events">События</option>
                </select>
              }
              
              <input type="file" className="formToAdd__image" onChange={handleChangeFile} />
            </div>
            <button className='formToAdd__btn' onClick={() => onSubmit()}>Сохранить</button>
          </form>
        </div>
      </UContainer>
    </div>
  );
}

export default formToAdd;
