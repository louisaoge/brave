import store from '../store/index'

export function isLoggedIn() {
    const token = localStorage.getItem('token');
    return token != null;
}

export function login() {
    const token = {
        username:'Louisa'
    }
    setToken(token)
}

function setToken(token) {
    localStorage.setItem('token',JSON.stringify(token));
    store.dispatch('authenticate');
}

export function getUsername() {
    return 'Louisa';
}

export function getUserId() {
    return 1;
}