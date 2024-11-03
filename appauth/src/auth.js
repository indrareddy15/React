let users = [];

export const registerUser = (username, email, password) => {
    const userExists = users.find(user => user.username === username || user.email === email);
    if (userExists) {
        throw new Error('User already exists');
    }
    users.push({ username, email, password });
    return { username, email };
};

export const loginUser = (username, password) => {
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        throw new Error('Invalid credentials');
    }
    return { username };
};