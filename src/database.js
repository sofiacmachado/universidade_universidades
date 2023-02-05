const CURSOSDATA = [
    {
        name: 'História',
        semester: [
            {
                classes: ['Disciplina1', 'Disciplina2', 'Disciplina3']
            },
            {
                classes: ['Disciplina1', 'Disciplina2', 'Disciplina3']
            },
            {
                classes: ['Disciplina1', 'Disciplina2', 'Disciplina3']
            }
        ]
    },
    {
        name: 'Engenharia Informática',
        semester: [
            {
                classes: ['Disciplina1', 'Disciplina2', 'Disciplina3']
            },
            {
                classes: ['Disciplina1', 'Disciplina2', 'Disciplina3']
            },
            {
                classes: ['Disciplina1', 'Disciplina2', 'Disciplina3']
            }
        ]
    },
    {
        name: 'Marketing',
        semester: [
            {
                classes: ['Disciplina1', 'Disciplina2', 'Disciplina3']
            },
            {
                classes: ['Disciplina1', 'Disciplina2', 'Disciplina3']
            },
            {
                classes: ['Disciplina1', 'Disciplina2', 'Disciplina3']
            }
        ]
    },
]

function setCursoData(id, data) {
    const curso = CURSOSDATA[id];
    curso.name = data.name;
    curso.semester = data.semester;
    curso.firstSemesterClasses = data.semester[0].classes;
    curso.secondSemesterClasses = data.semester[1].classes;
    curso.thirdSemesterClasses = data.semester[2].classes
}
function addCursoData(data) {
    CURSOSDATA.push({});
    setCursoData(CURSOSDATA.length - 1, data)
}

const PROFESSORESDATA = [
    {
        name: 'Andreia Gomes',
        birth: new Date(1984, 4, 12).toISOString().split("T")[0],
        salary: 1300
    }, 
    {
        name: 'António Fernandes',
        birth: new Date(1989, 12, 20).toISOString().split("T")[0],
        salary: 1220
    }, 
    {
        name: 'Óscar Pereira',
        birth: new Date(1992, 3, 22).toISOString().split("T")[0],
        salary: 1200
    }, 
    {
        name: 'Ana Matos',
        birth: new Date(1990, 12, 2).toISOString().split("T")[0],
        salary: 1200
    },
];

function setProfessorData(id, data) {
    const professor = PROFESSORESDATA[id];
    professor.name = data.name;
    professor.birth = data.birth;
    professor.salary = data.salary;
}

function addProfessorData(data) {
    CURSOSDATA.push({});
    setProfessorData(PROFESSORESDATA.length - 1, data)
}

const ALUNOSDATA = [
    {
        name: 'António Lopes',
        birth: new Date(2004, 4, 10).toISOString().split("T")[0],
        enrollment: '1005',
        grades: [14, 12, 16]
    },
    {
        name: 'Francisca Pereira',
        birth: new Date(2002, 10, 8).toISOString().split("T")[0],
        enrollment: '1006',
        grades: [14, 12, 16]
    },
    {
        name: 'Cristina Peixoto',
        birth: new Date(2004, 11, 4).toISOString().split("T")[0],
        enrollment: '1007',
        grades: [13, 15, 14]
    },
    {
        name: 'João Duarte',
        birth: new Date(2004, 9, 16).toISOString().split("T")[0],
        enrollment: '1008',
        grades: [18, 17, 18]
    },
    {
        name: 'Rodrigo Antunes',
        birth: new Date(2003, 5, 14).toISOString().split("T")[0],
        enrollment: '1009',
        grades: [14, 15, 11]
    },
    {
        name: 'Eduarda Luís',
        birth: new Date(2001, 8, 25).toISOString().split("T")[0],
        enrollment: '1010',
        grades: [16, 14, 15]
    }
]

function setAlunoData(id, data) {
    const aluno = ALUNOSDATA[id];
    aluno.name = data.name;
    aluno.birth = data.birth;
    aluno.enrollment = data.enrollment;
    aluno.grades = data.grades;
}

function addAlunoData(data) {
    ALUNOSDATA.push({});
    setAlunoData(ALUNOSDATA.length - 1, data)
}

export { 
    CURSOSDATA, setCursoData, addCursoData,
    PROFESSORESDATA, setProfessorData, addProfessorData,
    ALUNOSDATA, setAlunoData, addAlunoData
};
