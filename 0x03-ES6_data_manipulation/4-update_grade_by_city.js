export default function updateStudentGradeByCity(
  students,
  city,
  newGrades,
) {
  const F = students.filter(
    (student) => student.location === city,
  );

  const G = F.map(
    (student) => {
      for (const Grad of newGrades) {
        if (student.id === Grad.studentId) {
          student.grade = Grad.grade;
        }
      }
      if (student.grade === undefined) {
        student.grade = 'N/A';
      }
      return student;
    },
  );

  return G;
}
