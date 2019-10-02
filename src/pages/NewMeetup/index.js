import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';

import { newMeetupRequest } from '~/store/modules/meetup/actions';

import AvatarInput from './AvatarInput';

export default function NewMeetup() {
  const dispatch = useDispatch();

  function handleSubmit({ avatar_id, title, description, date, location }) {
    // dispatch(newMeetupRequest(avatar_id, title, description, date, location));
    console.log({ avatar_id, title, description, date, location });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

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
