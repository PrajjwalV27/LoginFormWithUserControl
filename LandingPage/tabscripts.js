const studentTable = document.getElementById('studentTable');
const addButton = document.getElementById('add-button');

let students = [];

function addStudent() {
    const studentName = prompt('Enter student name');
    const age = prompt('Enter student age');
    const email = prompt('Enter student email address');
    const telephone = prompt('Enter telephone');
    const degree1 = prompt('Enter degree 1');
    const degree2 = prompt('Enter degree 2');
    const degree3 = prompt('Enter degree 3');

    const student = {
        name: studentName,
        age: age,
        email: email,
        telephone: telephone,
        degrees: [degree1, degree2, degree3]
    };

    students.push(student);

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${studentName}</td>
        <td>${age}</td>
        <td>${email}</td>
        <td>${telephone}</td>
        <td>${degree1}</td>
        <td>${degree2}</td>
        <td>${degree3}</td>
        <td><button class="removeButton">Remove</button></td>
        `;
    studentTable.appendChild(newRow);

    const removeButton = newRow.querySelector('.removeButton');
    removeButton.addEventListener('click', () => {
        const index = students.indexOf(student);
        if (index !== -1) {
            students.splice(index, 1);
            newRow.remove();
        }
    });
}

addButton.addEventListener('click', addStudent);