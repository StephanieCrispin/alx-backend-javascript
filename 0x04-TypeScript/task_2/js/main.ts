interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return `Working from home`;
  }
  getCoffeeBreak() {
    return `Getting a coffee break`;
  }
  workDirectorTasks() {
    return `Getting to director tasks`;
  }
}
class Teacher implements TeacherInterface {
  workFromHome() {
    return `Cannot work from home`;
  }
  getCoffeeBreak() {
    return `Cannot have a coffee`;
  }
  workTeacherTasks() {
    return `Getting to work`;
  }
}

function createEmployee(salary: number | string) {
  if (typeof salary === 'number' && salary < 500) {
    return Teacher;
  }
  return Director;
}

const isDirector = (employee: Teacher | Director) => {
  return employee as Director;
};

const executeWork = (employee: Teacher | Director) => {
  if (employee instanceof Teacher) return employee.workTeacherTasks();
  else return employee.workDirectorTasks();
};

type Subjects = 'Math' | 'History';

const teachClass = (subject: Subjects): string => {
  if (subject === 'Math') return 'Teaching Math';
  else return 'Teaching History';
};
