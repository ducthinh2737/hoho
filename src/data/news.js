const API_URL = 'http://localhost:5000/api/news';

export const getNewsItems = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
}

export const getNewsById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching news detail:', error);
        return null;
    }
}

export const createNewsItem = async (news) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(news)
        });
        if (!response.ok) throw new Error('Failed to create news');
        return await response.json();
    } catch (error) {
        console.error('Error creating news:', error);
        return null;
    }
}

export const updateNewsItem = async (id, news) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(news)
        });
        if (!response.ok) throw new Error('Failed to update news');
        return true;
    } catch (error) {
        console.error('Error updating news:', error);
        return false;
    }
}

export const deleteNewsItem = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to delete news');
        return true;
    } catch (error) {
        console.error('Error deleting news:', error);
        return false;
    }
}
