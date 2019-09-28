import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, FileInput } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';

import AvatarInput from './AvatarInput';

export default function NewMeetup() {
  return (
    <Container>
      <Form>
        <AvatarInput name="avatar_id" />

        <Input name="titulo" placeholder="Título do Meetup" />
        <Input name="description" placeholder="Descrição do Meetup" />
        <Input name="date" placeholder="Data do Meetup" />
        <Input name="location" placeholder="Localização" />
        <Link to="/">
          <MdAddCircleOutline size={25} color="#fff" />
          <span>Salvar meetup</span>
        </Link>
      </Form>
    </Container>
  );
}
