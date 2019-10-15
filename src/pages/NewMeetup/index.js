import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';

import { newMeetupRequest } from '~/store/modules/meetup/actions';

export default function NewMeetup() {
  const dispatch = useDispatch();

  function handleSubmit({ file_id, title, description, date, location }) {
    dispatch(newMeetupRequest(file_id, title, description, date, location));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="file_id" placeholder="file_id" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input name="description" placeholder="Descrição do Meetup" />
        <Input name="date" placeholder="Data do Meetup" />
        <Input name="location" placeholder="Localização" />
        <button type="submit">
          <MdAddCircleOutline size={25} color="#fff" />
          <span>Salvar meetup</span>
        </button>
      </Form>
    </Container>
  );
}
