import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdChevronRight, MdAddCircleOutline } from 'react-icons/md';

import api from '~/services/api';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');

      const data = response.data.map(meet => ({
        ...meet,
        formattedDate: format(parseISO(meet.date), "d 'de' MMMM ', às' H'h", {
          locale: pt,
        }),
      }));

      setMeetups(data);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <header>
        <h2>Meus Meetups</h2>
        <Link to="/new">
          <MdAddCircleOutline size={20} color="#fff" />
          <span>Novo Meetup</span>
        </Link>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Meetup key={meetup.id}>
            <strong>{meetup.title}</strong>
            <div>
              <span>{meetup.formattedDate}</span>
              <Link to={`/details/${meetup.id}`} meetup={meetup}>
                <MdChevronRight size={25} color="#FFF" />
              </Link>
            </div>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
