 
export const getListEmployees = () => {
  if (!localStorage["employees"]) {
    localStorage["employees"] = "[]";
  }

  let employees = localStorage["employees"];
  employees = JSON.parse(employees);
  return employees;
};

export const addEmployee = (employee) => {
  const employees = getListEmployees();
  employees.push(employee);
  localStorage["employees"] = JSON.stringify(employees.sort(function (a, b) {
    if (a.nome < b.nome) {
      return -1;
    } else {
      return true;
    }
  }));
};

export const removeEmployee = (id) => {
  let employees = getListEmployees();
  employees = employees.filter((employee) => employee.id !== id);
  localStorage["employees"] = JSON.stringify(employees.sort(function (a, b) {
    if (a.nome < b.nome) {
      return -1;
    } else {
      return true;
    }
  }));
};

export const getEmployeeById = (id) => {

  const employees = getListEmployees();
  const employee = employees.find((employee) => employee.id === id);

  return employee;
};


export const editEmployee = (id, newEmployee) => {
  let employees = getListEmployees();
  employees = employees.filter((employee) => employee.id !== id);


  employees.push(newEmployee);

  localStorage["employees"] = JSON.stringify(employees.sort(function (a, b) {
    if (a.nome < b.nome) {
      return -1;
    } else {
      return true;
    }
  }));
};

export const removeList = () => {
  localStorage.clear();

}


// documentos

export const addDocuments = (documento, index) => {
  let employees = getListEmployees();
  const employee = employees.find((employee) => employee.id === index);

  employee.documentos.push(documento)

  localStorage["employees"] = JSON.stringify(employees.sort(function (a, b) {
    if (a.nome < b.nome) {
      return -1;
    } else {
      return true;
    }
  }));
}

export const getListDocuments = (id) => {
  let employees = getListEmployees();
  const employee = employees.find((employee) => employee.id === id);

  return employee.documentos
};

export const editDocument = (index, documento, indexdoc) => {

  let employees = getListDocuments(index);
  employees = employees.filter((employee) => employee.id !== indexdoc);
  employees.push(documento);


  let listasecundaria = getListEmployees();
  listasecundaria = listasecundaria.find((employee) => employee.id === index);

  listasecundaria.documentos = employees;



  let listaTerceiraria = getListEmployees();
  listaTerceiraria = listaTerceiraria.filter((employee) => employee.id !== index);

  listaTerceiraria.push(listasecundaria);



  localStorage["employees"] = JSON.stringify(listaTerceiraria.sort(function (a, b) {
    if (a.nome < b.nome) {
      return -1;
    } else {
      return true;
    }
  }));

};

export const deletDocument = (index, indexdoc) => {

  let employees = getListDocuments(index);
  employees = employees.filter((employee) => employee.id !== indexdoc);


  let listasecundaria = getListEmployees();
  listasecundaria = listasecundaria.find((employee) => employee.id === index);

  listasecundaria.documentos = employees;



  let listaTerceiraria = getListEmployees();
  listaTerceiraria = listaTerceiraria.filter((employee) => employee.id !== index);

  listaTerceiraria.push(listasecundaria);



  localStorage["employees"] = JSON.stringify(listaTerceiraria.sort(function (a, b) {
    if (a.nome < b.nome) {
      return -1;
    } else {
      return true;
    }
  }));
}

export const removeListDocument = (index) => {

  let employees = getListDocuments(index);
  employees = []

  let listasecundaria = getListEmployees();
  listasecundaria = listasecundaria.find((employee) => employee.id === index);

  listasecundaria.documentos = employees;



  let listaTerceiraria = getListEmployees();
  listaTerceiraria = listaTerceiraria.filter((employee) => employee.id !== index);

  listaTerceiraria.push(listasecundaria);



  localStorage["employees"] = JSON.stringify(listaTerceiraria.sort(function (a, b) {
    if (a.nome < b.nome) {
      return -1;
    } else {
      return true;
    }
  }));

}