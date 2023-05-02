const btn = document.getElementById("btn");
const dob = document.getElementById("dob");
const result = document.getElementById("result");

function calculateAge() {
  const bvalue = dob.value;
  if (bvalue === "") {
    alert("Enter a value !");
  } else {
    const age = getAge(bvalue);
    result.innerText = age;
  }
}
function getAge(bvalue) {
  const currentdate = new Date();
  const bdate = new Date(bvalue);
  let age = currentdate.getFullYear() - bdate.getFullYear();
  let month = currentdate.getMonth() - bdate.getMonth();

  if (month < 0 || (month === 0 && currentdate.getDate() < bdate.getDate())) {
    age--;
  }
  else if (age < 0){
    age = 0;
  }
  return age;
}
btn.addEventListener("click", calculateAge);
