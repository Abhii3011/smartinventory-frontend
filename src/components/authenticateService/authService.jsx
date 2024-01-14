// // authentication.js
// export let users = [
//   { id: 1, email: 'abhinav.sahai@sims.com', password: 'abhinav', role: 'Admin', name: 'Abhinav Sahai' },
//   { id: 2, email: 'nikhil.naidu@sims.com', password: 'nikhil', role: 'Manager', name: 'Nikhil Naidu' },
//   { id: 3, email: 'user@sims.com', password: 'user', role: 'User', name: 'Random User' }
// ];

// export const authenticateUser = (email, password) => {
//   return users.find(user => user.email === email && user.password === password);
// };
import axios from './axiosConfig';

  // users = users.map(user => {
  //   if (user.email === email) {
  //     return { ...user, password: newPassword };
  //   }
  //   return user;
  // });
export const updateUserPassword = async(userName,userEmail,userPassword,role)=>{
  const formData = new FormData();
      formData.append('username',userName);
      formData.append('userEmail',userEmail);
      formData.append('userPassword', userPassword);
      formData.append('role',role);
  try{
    const response = await axios.put(`/updateuser/{userEmail}`,formData)
    return response.data;
  }catch(error){
    console.error('Update failed:', error.response ? error.response.data : error.message);
    throw error;
  }
}

export const login = async (userEmail, userPassword) => {
  const formData = new FormData();
      formData.append('userEmail',userEmail);
      formData.append('userPassword', userPassword);
  try {
    const response = await axios.post('/loginrequest', formData);
    localStorage.setItem('authenticated', true);
    localStorage.setItem('role',response.data);// Store a key to indicate authentication
    return response.data;
  } catch (error) {
    
    console.error('Login failed:', error.response ? error.response.data : error.message);
    throw error;
    
  }
};

