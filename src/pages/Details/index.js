import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import { Container, Title } from './styles';

// eslint-disable-next-line react/prop-types
export default function Details({ match }) {
  const [meetup, setMeetup] = useState([]);

  // eslint-disable-next-line react/prop-types
  const meetUpId = match.params.id;

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`/meetups/${meetUpId}`);

      const formattedDate = format(
        parseISO(response.data.date),
        "d 'de' MMMM ', às' H'h",
        {
          locale: pt,
        }
      );

      const data = { ...response.data, formattedDate };

      setMeetup(data);
    }

    loadMeetup();
  }, [meetUpId]);

  return (
    <Container>
      <header>
        <Title>{meetup.title}</Title>
        <div>
          <button type="button">Editar</button>
          <button type="button">Cancelar</button>
        </div>
      </header>
      <img src="" alt="" />
      <p>{meetup.description}</p>
      <div>
        <p>{meetup.formattedDate}</p>
        <p>{meetup.location}</p>
      </div>
    </Container>
  );
}
