export const getUserInfo = async (token) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/user-info', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch user info');
      }
  
      const data = await response.json();
      console.log('User Info:', data); // Aquí imprimes los datos en la consola
  
      return data;
    } catch (error) {
      console.error('Error fetching user info:', error);
      return null;
    }
  };
  