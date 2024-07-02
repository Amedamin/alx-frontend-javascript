export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const GRADE_Obj = newGrades.find((grade) => grade.studentId === student.id);
      const GREADE = GRADE_Obj ? GRADE_Obj.grade : 'N/A';
      return { ...student, grade: GREADE };
    });
}
