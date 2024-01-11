
const users = [
  { id: 1, email: 'abhinav.sahai@sims.com', password: 'abhinav', role: 'Admin', name: 'Abhinav Sahai' },
  { id: 2, email: 'nikhil.naidu@sims.com', password: 'nikhil', role: 'Manager', name: 'Nikhil Naidu' },
  { id: 3, email: 'user@sims.com', password: 'user', role: 'User', name: 'Random User' }
  // Add more users as needed
];

export const authenticateUser = (email, password) => {
  return users.find(user => user.email === email && user.password === password);
};
