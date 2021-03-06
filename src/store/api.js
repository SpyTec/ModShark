import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/',
  withCredentials: true
});

export async function logOut() {
  return await instance.delete('authenticate');
}

export async function getToken() {
  let payload = await instance.get('authenticate');
  return payload.data['token'];
}