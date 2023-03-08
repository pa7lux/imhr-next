import React, { FC, useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';

import RequestFormStyles from './RequestForm.module.css';

const RequestForm: FC = () => {
  type formData = {
    userName: string;
    email: string;
    telegram: string;
    place: string;
    message: string;
  };

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    telegram: '',
    place: '',
    message: '',
  });

  const [sendingState, setSendingState] = useState('initial');

  const { t } = useTranslation('requestform');

  const _prepareBody = (values: formData) => {
    const query = new URLSearchParams();

    Object.keys(values).forEach((k) => {
      query.set(k, values[k]);
    });

    return query;
  };

  const sendForm = () => {
    const formAction =
      'https://script.google.com/macros/s/AKfycbz6n4XK0ae6RTM2YHqDe5ayWjQYjRgfm4IAdUH-Cprvqgna-OU6zIWBOlAHqOPPdGwH/exec';
    const data = _prepareBody(formData);
    return fetch(`${formAction}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data,
    })
      .then((response) => {
        setSendingState('success');
        setTimeout(() => {
          setFormData({
            userName: '',
            email: '',
            telegram: '',
            place: '',
            message: '',
          });
          setSendingState('initial');
        }, 5000);
      })
      .catch((err) => {
        setSendingState('error');
        setTimeout(() => {
          setSendingState('initial');
        }, 5000);
      });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendForm();
  };

  const handleInput = (event: React.FormEvent) => {
    setFormData({
      ...formData,
      [(event.target as HTMLInputElement).id]: (
        event.target as HTMLInputElement
      ).value,
    });
  };

  return (
    <form
      className={cn(RequestFormStyles.form, 'text-type-p')}
      onSubmit={handleSubmit}
    >
      <label className={cn(RequestFormStyles.label)}>
        <span className={cn(RequestFormStyles.label_text)}>
          {t('form.userName')}*
        </span>
        <input
          required
          className={cn(RequestFormStyles.textfield)}
          name="name"
          type="text"
          id="userName"
          placeholder={t('form.userNamePlaceholder')}
          value={formData.userName}
          onInput={handleInput}
        />
      </label>
      <label className={cn(RequestFormStyles.label)}>
        <span className={cn(RequestFormStyles.label_text)}>
          {t('form.email')}*
        </span>
        <input
          required
          className={cn(RequestFormStyles.textfield)}
          name="email"
          type="email"
          id="email"
          placeholder={t('form.emailPlaceholder')}
          value={formData.email}
          onInput={handleInput}
        />
      </label>
      <label className={cn(RequestFormStyles.label)}>
        <span className={cn(RequestFormStyles.label_text)}>
          {t('form.telegram')}*
        </span>
        <input
          required
          className={cn(RequestFormStyles.textfield)}
          name="telegram"
          type="text"
          id="telegram"
          placeholder={t('form.telegramPlaceholder')}
          value={formData.telegram}
          onInput={handleInput}
        />
      </label>
      <label className={cn(RequestFormStyles.label)}>
        <span className={cn(RequestFormStyles.label_text)}>
          {t('form.place')}*
        </span>
        <input
          required
          className={cn(RequestFormStyles.textfield)}
          name="place"
          type="text"
          id="place"
          placeholder={t('form.placePlaceholder')}
          value={formData.place}
          onInput={handleInput}
        />
      </label>
      <label className={cn(RequestFormStyles.label)}>
        <span className={cn(RequestFormStyles.label_text)}>
          {t('form.message')}
        </span>
        <textarea
          className={cn(RequestFormStyles.textarea)}
          name="message"
          id="message"
          placeholder={t('form.messagePlaceholder')}
          value={formData.message}
          onInput={handleInput}
        ></textarea>
      </label>
      <button className={cn(RequestFormStyles.button)} type="submit">
        Отправить
      </button>
      {sendingState === 'success' && (
        <p className={cn(RequestFormStyles.error_message)}>
          {t('form.success')}
        </p>
      )}
      {sendingState === 'error' && (
        <p className={cn(RequestFormStyles.success_message)}>
          {t('form.error')}
        </p>
      )}
    </form>
  );
};

export { RequestForm };
