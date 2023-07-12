import React, { useState } from 'react';

import { TfiClose } from 'react-icons/tfi'
import { useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import UContainer from '../../../../components/ui/container/UContainer';
import axios from '../../../../services/network/axios';
import './NewsForm.scss'

const NewsForm = ({ setActiveNewsForm }) => {
  const [title, setTitle] = useState('');
  const [source, setSource] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
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
  const onSubmit = async () => {
    event.preventDefault();
    try {
      const fields = {
        title,
        source,
        text,
        category,
        imageUrl,
      }
      const { data } = await axios.post('/posts', fields)
      const id = data._id;
      navigate(`/adminnews/${id}`)
      setActiveNewsForm(false)
    } catch (error) {
      console.error(error)
      alert('Ошибка при создании статьи!')
    }
  }
  return (
    <div className='newsForm'>
      <UContainer>
        <div className="newsForm__wrap">
          <form className="newsForm__form">
            <div className="newsForm__form-wrap">
              <div className="newsForm__header">
                <label className="newsForm__title">
                  Загаловок
                  <input
                    type="text"
                    placeholder='Введите загаловок'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </label>
                <label className="newsForm__source">
                  Источник
                  <input
                    type="text"
                    placeholder='Введите источник'
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    required
                  />
                </label>
              </div>
              <label className="newsForm__text">
                Текс
                <CKEditor
                  editor={ClassicEditor}
                  onChange={(e, editor) => { handleChange(e, editor) }}
                />
              </label>
              <TfiClose className='newsForm__exit' onClick={() => setActiveNewsForm(false)} />
            </div>
            <div className="newsForm__footer">
              <select
                name="category"
                className='newsForm__select'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Выберайте категорию</option>
                <option value="news">Новости</option>
                <option value="low">Меморандум</option>
                <option value="events">События</option>
              </select>
              <input type="file" className="newsForm__image" onChange={handleChangeFile} />
            </div>
            <button className='newsForm__btn' onClick={() => onSubmit()}>Сохранить</button>
          </form>
        </div>
      </UContainer>
    </div>
  );
}

export default NewsForm;
