const utilService = {
  getDateInString,
  getTeamInitails
};

function getDateInString(date) {
  return new Date(date).toDateString();
}


function getTeamInitails(teamName) {
  let teamInitials = '';
  const teamArr = teamName.split(' ');
  for (var i = 0; i < teamArr.length; i++) {
    teamInitials += teamArr[i].charAt(0);
  }

  return teamInitials;
}

export default utilService;
