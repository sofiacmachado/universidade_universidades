const CURSOSDATA = [
    {
        id: 0,
        image: "/src/assets/cursos/curso_1.jpg",
        name: 'História',
        semester: {
            firstSemester: {
                classes: ['Disciplina1', 'Disciplina2', 'Disciplina3']
            },
            secondSemester: {
                classes: ['Disciplina1', 'Disciplina2', 'Disciplina3']
            },
            thirdSemester: {
                classes: ['Disciplina1', 'Disciplina2', 'Disciplina3']
            }
        }
    },
    {
        id: 1,
        image: "/src/assets/cursos/curso_2.jpg",
        name: 'Engenharia Informática',
        semester: {
            firstSemester: {
                classes: ['Disciplina1', 'Disciplina2', 'Disciplina3']
            },
            secondSemester: {
                classes: ['Disciplina1', 'Disciplina2', 'Disciplina3']
            },
            thirdSemester: {
                classes: ['Disciplina1', 'Disciplina2', 'Disciplina3']
            }
        }
    },
    {
        id: 2,
        image: "/src/assets/cursos/curso_3.jpg",
        name: 'Marketing',
        semester: {
            firstSemester: {
                classes: ['Disciplina1', 'Disciplina2', 'Disciplina3']
            },
            secondSemester: {
                classes: ['Disciplina1', 'Disciplina2', 'Disciplina3']
            },
            thirdSemester: {
                classes: ['Disciplina1', 'Disciplina2', 'Disciplina3']
            }
        }
    },
]

function setCursoData(id, data) {
    const curso = CURSOSDATA[id];
    curso.image = data.image;
    curso.name = data.name;
    curso.semester = data.semester;
    curso.firstSemester = data.firstSemester;
    curso.secondSemester = data.secondSemester;
    curso.thirdSemester = data.thirdSemester;
    curso.classes = data.classes;
}

const PROFESSORESDATA = [
    {
        id: 0,
        image: "/src/assets/profs/prof_1.jpg",
        name: 'Andreia Gomes',
        birth: new Date(1984, 4, 12).toISOString().split("T")[0],
        salary: 1300
    }, {
        id: 1,
        image: "/src/assets/profs/prof_2.jpg",
        name: 'António Fernandes',
        birth: new Date(1989, 12, 20).toISOString().split("T")[0],
        salary: 1220
    }, {
        id: 2,
        image: "/src/assets/profs/prof_3.jpg",
        name: 'Óscar Pereira',
        birth: new Date(1992, 3, 22).toISOString().split("T")[0],
        salary: 1200
    }, {
        id: 3,
        image: "/src/assets/profs/prof_2.jpg",
        name: 'Ana Matos',
        birth: new Date(1990, 12, 2).toISOString().split("T")[0],
        salary: 1200
    },
];

function setProfessorData(id, data) {
    const professor = PROFESSORESDATA[id];
    professor.image = data.image;
    professor.name = data.name;
    professor.birth = data.birth;
    professor.salary = data.salary;
}

const ALUNOSDATA = [
    {
        id: 0,
        image: '/src/assets/alunos/aluno_1.jpg',
        name: 'António Lopes',
        birth: new Date(2004, 4, 10).toLocaleDateString(),
        enrollment: '1005',
        grades: [14, 12, 16]
    },
    {
        id: 1,
        image: '/src/assets/alunos/aluno_1.jpg',
        name: 'Francisca Pereira',
        birth: new Date(2002, 10, 8).toLocaleDateString(),
        enrollment: '1006',
        grades: [14, 12, 16]
    },
    {
        id: 2,
        image: '/src/assets/alunos/aluno_1.jpg',
        name: 'Cristina Peixoto',
        birth: new Date(2004, 11, 4).toLocaleDateString(),
        enrollment: '1007',
        grades: [13, 15, 14]
    },
    {
        id: 3,
        image: '/src/assets/alunos/aluno_1.jpg',
        name: 'João Duarte',
        birth: new Date(2004, 9, 16).toLocaleDateString(),
        enrollment: '1008',
        grades: [18, 17, 18]
    },
    {
        id: 4,
        image: '/src/assets/alunos/aluno_1.jpg',
        name: 'Rodrigo Antunes',
        birth: new Date(2003, 5, 14).toLocaleDateString(),
        enrollment: '1009',
        grades: [14, 15, 11]
    },
    {
        id: 5,
        image: '/src/assets/alunos/aluno_1.jpg',
        name: 'Eduarda Luís',
        birth: new Date(2001, 8, 25).toLocaleDateString(),
        enrollment: '1010',
        grades: [16, 14, 15]
    }
]

function setAlunoData(id, data) {
    const aluno = ALUNOSDATA[id];
    aluno.image = data.image;
    aluno.name = data.name;
    aluno.birth = data.birth;
    aluno.enrollment = data.enrollment;
    aluno.grades = data.grades;
}

export { CURSOSDATA, setCursoData, 
    PROFESSORESDATA, setProfessorData, 
    ALUNOSDATA, setAlunoData };
