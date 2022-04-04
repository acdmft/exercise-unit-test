function isEven(n) {
  return parseInt(n) % 2 === 0;
}

function formDate(d) {
  const date = new Date(d);
  const year = date.getFullYear();
  const month = (date.getMonth()+1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2,"0");
  return `${day}/${month}/${year}`;
}

module.exports = { isEven, formDate }