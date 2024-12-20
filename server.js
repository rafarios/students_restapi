const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

let students = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
];

// Endpoint to get a specific student by ID
app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) {
        return res.status(404).send('Student not found');
    }
    res.json(student);
});

// Endpoint to get all students
app.get('/students', (req, res) => {
    res.json(students);
});

// Endpoint to add a new student
app.post('/students', (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name
    };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});