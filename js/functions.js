const countOfMinutes = (time) => {
  const timeParts = time.split(':');
  return Number(timeParts[0]) + Number(timeParts[1]);
};

const isMeetingTrue = (startOfWork, endOfWork, startOfMeeting, meetingDuration) => {
  startOfWork = countOfMinutes(startOfWork);
  endOfWork = countOfMinutes(endOfWork);
  startOfMeeting = countOfMinutes(startOfMeeting);
  if (startOfWork < endOfWork && startOfMeeting + meetingDuration <= endOfWork && startOfMeeting >= startOfWork) {
    return true;
  }
  return false;
};

// Тесты
isMeetingTrue('08:00', '17:30', '14:00', 90);
isMeetingTrue('8:0', '10:0', '8:0', 120);
isMeetingTrue('08:00', '14:30', '14:00', 90);
isMeetingTrue('14:00', '17:30', '08:0', 90);
isMeetingTrue('8:00', '17:30', '08:00', 900);
