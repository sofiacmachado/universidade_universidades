const cursos = {
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

}

const professores = [
    {
        id: 0,
        image: "/src/assets/profs/prof_1.jpg",
        name: 'Andreia Gomes',
        birth: new Date(1984, 4, 12).toLocaleDateString(),
        salary: 1200
    },
    {
        id: 1,
        image: "/src/assets/profs/prof_2.jpg",
        name: 'António Fernandes',
        birth: new Date(1984, 4, 12).toLocaleDateString(),
        salary: 1200
    },
]

const alunos = {
    image : '/src/assets/alunos/aluno_1.jpg',
    name: 'António Lopes',
    birth: new Date(2004, 4, 10).toLocaleDateString(),
    enrollment: '1005',
    grades: [14, 12, 16]
}

export { cursos, professores, alunos };
