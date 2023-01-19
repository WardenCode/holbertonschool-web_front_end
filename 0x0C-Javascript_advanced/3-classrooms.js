function createClassRoom (numbersOfStudents) {
  const students = [];

  function studentSeat (seat) {
    return () => seat;
  }

  for (let idx = 0; idx < numbersOfStudents; idx++) {
    students.push(studentSeat(idx + 1));
  }

  return (students);
}

const classRoom = createClassRoom(10);
