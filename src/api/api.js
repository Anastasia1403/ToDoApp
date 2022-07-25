import axios from 'axios';

export const baseURL = axios.create({
    baseURL: 'https://62d6b48449c87ff2af2af80d.mockapi.io',
});

export const api = {
    tasks: (id) => id ? `/tasks/${id}` : '/tasks',
    colors: (id) => id ? `/colors/${id}` :'/colors',
    tags: (id) => id ? `/tags/${id}` :'/tags',
}