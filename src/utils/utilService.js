const utilService = {
  getDateInString,
};

function getDateInString(date) {
  return new Date(date).toDateString();
}

export default utilService;
