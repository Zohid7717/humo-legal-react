import React, { useState } from 'react';

import { TfiClose } from 'react-icons/tfi'
import { useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import UContainer from '../container/UContainer';
import axios from '../../../services/network/axios';
import './FormToAdd.scss'
import { useSelector } from 'react-redux';

const FormToAdd = ({
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

  const formType = useSelector(state => state.formTypeReducer.formType)

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
                {
                  formType.title
                    ? <label className="formToAdd__title">
                      {formType.title}
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </label>
                    : ''
                }
                {
                  formType.paramTree
                    ? <label className="formToAdd__source">
                      {formType.paramTree}
                      <input
                        type="text"
                        value={paramTree}
                        onChange={(e) => setParamTree(e.target.value)}
                        required
                      />
                    </label>
                    : ''
                }
                
              </div>
              {
                formType.text
                  ? <label className="formToAdd__text">
                    {formType.text}
                    <CKEditor
                      editor={ClassicEditor}
                      onChange={(e, editor) => { handleChange(e, editor) }}
                    />
                  </label>
                  : ''
              }
              <TfiClose className='formToAdd__exit' onClick={() => setActiveFormToAdd(false)} />
            </div>
            <div className="formToAdd__footer">
              {
                formType.category
                  ? <select
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
                  : ''
              }
              {
                formType.image
                  ? <input type="file" className="formToAdd__image" onChange={handleChangeFile} />
                  : ''
              }
              
            </div>
            <button className='formToAdd__btn' onClick={() => onSubmit()}>Сохранить</button>
          </form>
        </div>
      </UContainer>
    </div>
  );
}

export default FormToAdd;
