const defaultDate = document.querySelector(".default-date");

const date = new Date();

const day = ("0" + date.getDate()).slice(-2); 
const month = ("0" + (date.getMonth() + 1)).slice(-2);

const today = date.getFullYear()+"-"+(month)+"-"+(day) ;

defaultDate.value = today;