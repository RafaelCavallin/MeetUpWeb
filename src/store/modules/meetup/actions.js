export function newMeetupRequest(data) {
  return {
    type: '@meetup/NEW_MEETUP_REQUEST',
    payload: { data },
  };
}

export function newMeetupSuccesss(data) {
  return {
    type: '@meetup/NEW_MEETUP_SUCCESS',
    payload: { data },
  };
}
