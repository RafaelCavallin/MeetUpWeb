import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

export function* newMeetUp({ payload }) {
  try {
    const { file_id, title, description, location, date } = payload;

    yield call(api.post, 'meetups', {
      title,
      file_id,
      description,
      location,
      date,
    });

    toast.success('MeetUp criada com sucesso');
    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha ao criar MeetUp');
  }
}

export default all([takeLatest('@meetup/NEW_MEETUP_REQUEST', newMeetUp)]);
