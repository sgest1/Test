// script.js

let courses = [];
let studentCourses = [];

document.getElementById('courseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const courseName = document.getElementById('courseName').value;
    const courseNumber = document.getElementById('courseNumber').value;
    courses.push({ name: courseName, number: courseNumber });
    displayCourses();
    this.reset();
});

function displayCourses() {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = '';
    courses.forEach((course, index) => {
        const li = document.createElement('li');
        li.textContent = `${course.name} (${course.number})`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteCourse(index);
        li.appendChild(deleteButton);
        courseList.appendChild(li);
    });
}

function deleteCourse(index) {
    courses.splice(index, 1);
    displayCourses();
}

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const studentName = document.getElementById('studentName').value;
    alert(`Welcome, ${studentName}!`);
    this.reset();
});
