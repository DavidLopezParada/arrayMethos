type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];



//apartado 1

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
   return pacientes.filter((paciente) => paciente.especialidad === "Pediatra"); 
};



const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
    return pacientes.filter((paciente) => paciente.especialidad === "Pediatra" && paciente.edad < 10);
};



//apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
 return pacientes.some((paciente) => paciente.temperatura > 39 && paciente.frecuenciaCardiaca > 100 );
};



//apartado 3
const reasignaPacientesAMedicoFamilia = (
    pacientes: Pacientes[]
): Pacientes[] => {
     return pacientes.map((paciente) => ({
    ...paciente,
    especialidad:
      paciente.especialidad === "Pediatra"
        ? "Medico de familia"
        : paciente.especialidad,
  }));
};


//apartado 4

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    return pacientes.some ((paciente) => paciente.especialidad === "Pediatra" )
};



//apartado 5

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  return pacientes.reduce(
    (
      acc: NumeroPacientesPorEspecialidad,
      paciente: Pacientes
    ): NumeroPacientesPorEspecialidad => {
      switch (paciente.especialidad) {
        case "Medico de familia":
          return { ...acc, medicoDeFamilia: acc.medicoDeFamilia + 1 };
        case "Pediatra":
          return { ...acc, pediatria: acc.pediatria + 1 };
        case "Cardiólogo":
          return { ...acc, cardiologia: acc.cardiologia + 1 };
      }
    },
    { medicoDeFamilia: 0, pediatria: 0, cardiologia: 0 }
  );
};