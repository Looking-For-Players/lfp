import axios from 'axios';

/* CONFIG */
const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true
});

http.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.assign('/login');
      //send error msg
    }

    return Promise.reject(error);
  }
);

/* REQUESTS */
export const login = (email, password) => {
  return http.post('/login', { email, password }).then((data) => data);
};

export const signup = (newUser) => {
  const {username, email, password} = newUser;
  return http.post('/users' , {username, email, password}).then(data => data)
}

export const update = (updatedUser) => {
  return http.patch('/users', {updatedUser}).then(data => data)
}

export const logout = () => {
  return http.get('/logout')
}

export const getGames = () => {
  return http.get('/games')
}

export const search = (value) => {
  const gamePath = `?game=${value}`;
  const userPath = `?username=${value}`;
  return Promise.all([http.get(`/games/${gamePath}`),http.get(`/users/search/${userPath}`)]).then((data) => data);
};


export const findFriends = (user) => {
  const {games, languages} = user;
}