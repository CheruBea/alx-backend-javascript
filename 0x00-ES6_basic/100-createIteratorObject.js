// 100-createIteratorObject.js

export default function createIteratorObject(report) {
  // Create an array to hold all employees
  const allEmployees = [];
  
  // Iterate over each department in the report
  for (const department of Object.values(report.allEmployees)) {
    // Add all employees in the current department to the allEmployees array
    allEmployees.push(...department);
  }
  
  // Return an iterator for the allEmployees array
  return allEmployees[Symbol.iterator]();
}
