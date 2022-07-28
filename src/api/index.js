import axios from 'axios';

export const baseURL = axios.create({
    baseURL: 'https://62d6b48449c87ff2af2af80d.mockapi.io',
});

export const api = {
    tasks: (id) => `/tasks/${id ?? ""}`,
    colors: (id) => `/colors/${id ?? ""}`,
    tags: (id) => `/tags/${id ?? ""}`,
}