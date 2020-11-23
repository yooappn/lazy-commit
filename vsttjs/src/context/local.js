import Axios from 'axios';

const _key = (ks) => {
  const c = {};
  ks.forEach((k) => {
    c[k] = k;
  });
  return c;
};


const Key = _key(['sheet']);

const setLocalData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getLocalData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const loadData = (url) => {
  return Axios.get(url);
};


export { Key, setLocalData, getLocalData, loadData };
