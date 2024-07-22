// 101-iterateThroughObject.js

export default function iterateThroughObject(reportWithIterator) {
  // Create an array to collect all employee names
  const employees = [];
  
  // Iterate over each employee in the iterator
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }
  
  // Return the employee names as a string separated by '|'
  return employees.join(' | ');
}
