// Link to exercise: https://launchschool.com/exercises/4a1f0eb3
/*
Create an object factory for a student object. The student object should have
the following methods and it should produce the expected results demonstrated
in the sample code:

info: Logs the name and year of the student.
addCourse: Enrolls student in a course. A course is an object literal that has
properties for its name and code.
listCourses: Returns a list of the courses student has enrolled in.
addNote: Adds a note property to a course. Takes a code and a note as an
argument. If a note already exists, the note is appended to the existing one.
updateNote: Updates a note for a course. Updating a note replaces the existing
note with the new note.
viewNotes: Logs the notes for all the courses. Courses without notes are not
displayed.
*/

// eslint-disable-next-line max-lines-per-function
function createStudent(name, year) {
  return {
    name,
    year,
    info() {
      console.log(`${this.name} is a ${this.year} year student.`);
    },
    courses: [],
    addCourse(course) {
      this.courses.push(course);
    },
    listCourses() {
      console.log(this.courses);
    },
    addNote(courseCode, newNote) {
      let course = this.courses.find(({code}) => code === courseCode);
      if (course) {
        if (!course.hasOwnProperty('note')) course.note = '';
        course.note += course.note.length > 0
          ? `; ${newNote}`
          : newNote;
      }
    },
    viewNotes() {
      let notesArr = [];
      for (let idx = 0; idx < this.courses.length; idx++) {
        let course = this.courses[idx];
        const {name, note} = course;
        if (!course.hasOwnProperty('note')) continue;
        notesArr.push(`${name}: ${note}`);
      }
      console.log(notesArr.join('\n'));
    },
    updateNote(courseCode, newNote) {
      let course = this.courses.find(({code}) => code === courseCode);
      if (course) {
        course.note = newNote;
      }
    }
  };
}

// eslint-disable-next-line no-unused-vars
function studentTestCases() {
  let foo = createStudent('Foo', '1st');
  foo.info();
  // "Foo is a 1st year student"
  foo.listCourses();
  // [];
  foo.addCourse({ name: 'Math', code: 101 });
  foo.addCourse({ name: 'Advanced Math', code: 102 });
  foo.listCourses();
  // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
  foo.addNote(101, 'Fun course');
  foo.addNote(101, 'Remember to study for algebra');
  foo.viewNotes();
  // "Math: Fun course; Remember to study for algebra"
  foo.addNote(102, 'Difficult subject');
  foo.viewNotes();
  // "Math: Fun course; Remember to study for algebra"
  // "Advance Math: Difficult subject"
  foo.updateNote(101, 'Fun course');
  foo.viewNotes();
  // "Math: Fun course"
  // "Advanced Math: Difficult subject"
}

// eslint-disable-next-line max-lines-per-function
function createSchool() {
  return {
    students: [],
    addStudent(name, year) {
      const validYears = ['1st', '2nd', '3rd', '4th', '5th'];
      if (!validYears.includes(year)) {
        return console.log('Invalid Year');
      }
      const student = createStudent(name, year);
      this.students.push(student);
      return student;
    },
    enrollStudent(student, course) {
      student.addCourse(course);
    },
    addGrade(student, course, grade) {
      const {courseCode} = course;
      const courseObj = student.courses.find(({code}) => code === courseCode);
      courseObj.grade = grade;
    },
    getReportCard(student) {
      const {courses} = student;
      courses.forEach(({name, grade}) => {
        grade = grade ?? "In progress";
        console.log(`${name}: ${grade}`);
      });

    },
    courseReport(courseName) {
      const allGrades = [];
      const numberOfStudentsTakingCourse = this.students.filter(({courses}) => {
        return courses.find(({name, grade}) => name === courseName && grade);
      }).length;
      if (numberOfStudentsTakingCourse === 0) return;
      console.log(`=${courseName} Grades=`);
      this.students.forEach(({name, courses}) => {
        const course = courses.find(({name}) => name === courseName);
        if (course) {
          const { grade } = course;
          console.log(`${name}: ${grade}`);
          allGrades.push(grade);
        }
      });
      const courseAverage =
        allGrades.reduce((prev, cur) => prev + cur) / allGrades.length;
      console.log('---');
      console.log(`Course Average: ${courseAverage}`);
    },
  };

}

// eslint-disable-next-line max-lines-per-function
function schoolTestCases() {
  let school = createSchool();
  const foo = school.addStudent('foo', '3rd');
  const fooCourses = [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ];
  for (let course of fooCourses) foo.addCourse(course);

  const bar = school.addStudent('bar', '1st');
  const barCourses = [
    { name: 'Math', code: 101, grade: 91, },
  ];
  for (let course of barCourses) bar.addCourse(course);

  const qux = school.addStudent('qux', '2nd');
  const quxCourses = [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
  ];
  for (let course of quxCourses) qux.addCourse(course);
  school.getReportCard(foo);
  // Math: 95
  // Advanced Math: 90
  // Physics: In progress
  school.courseReport('Math');
  /*
    =Math Grades=
    foo: 95
    bar: 91
    qux: 93
    ---
    Course Average: 93
    */
  school.courseReport('Advanced Math');
  /*
    =Advanced Math Grades=
    foo: 90
    qux: 90
    ---
    Course Average: 90
    */
  school.courseReport('Physics');
  // undefined
}

schoolTestCases();


/*
Create a school object. The school object uses the same kind of student object
as the previous exercise. It has methods that use and update information about
the student. Be sure to check out the previous exercise for the other arguments
that might be needed by the school object. Implement the following methods for
the school object:

addStudent: Adds a student by creating a new student and adding the student to
a collection of students. The method adds a constraint that the year can only
be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns
a student object if year is valid otherwise it logs "Invalid Year".

enrollStudent: Enrolls a student in a course.
addGrade: Adds the grade of a student for a course.
getReportCard: Logs the grades of a student for all courses. If the course has
no grade, it uses "In progress" as the grade.
courseReport: Logs the grades of all students for a given course name. Only
student with grades are part of the course report.
To test your code, use the three student objects listed below. Using the three
student objects, produce the following values from the getReportCard and
courseReport methods respectively.
*/
