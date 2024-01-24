import axios from './axiosConfig';
export const updateUserPassword = async(userName,userEmail,userPassword,role)=>{
  const formData = new FormData();
      formData.append('userName',userName);
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

export const userSignUp = async(oldFormData)=>{
  const formData = new FormData();
  formData.append('userName',oldFormData.userName)
  formData.append('userEmail',oldFormData.userEmail)
  formData.append('userPassword',oldFormData.userPassword)
  formData.append('role',"User")

  try{
    const response = await axios.post(`/signup`,formData);
    return response.data;
  }
  catch(error){
    console.error('Signup failed:', error.response ? error.response.data : error.message);
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

