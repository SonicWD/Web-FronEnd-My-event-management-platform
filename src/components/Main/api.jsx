export const getUserInfo = async (token) => {
    try {
        const response = await fetch('https://event-app-backend-44ux.onrender.com/user-info', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Unauthorized: Token expired or invalid');
            }
            throw new Error('Failed to fetch user info');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user info:', error);
        return null;
    }
};
