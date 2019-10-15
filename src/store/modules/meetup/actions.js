export function newMeetupRequest(file_id, title, description, date, location) {
  return {
    type: '@meetup/NEW_MEETUP_REQUEST',
    payload: { file_id, title, description, date, location },
  };
}

export function newMeetupSuccesss(data) {
  return {
    type: '@meetup/NEW_MEETUP_SUCCESS',
    payload: { data },
  };
}
