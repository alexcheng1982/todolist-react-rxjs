const storageKey = 'todo-list';

let storage = {};
let localStorage = {
  getItem: (key: string) => {
    return storage[key];
  },
  setItem: (key: string, value: any) => {
    storage[key] = value;
  }
};

export default {
  load: () => {
    let data = localStorage.getItem(storageKey);
    return (data && JSON.parse(data)) || [];
  },
  save: (data: any) => localStorage.setItem(storageKey, JSON.stringify(data))
};