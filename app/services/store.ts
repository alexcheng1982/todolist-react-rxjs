const storageKey = 'todo-list';

export default {
  load: () => {
    let data = localStorage.getItem(storageKey);
    return (data && JSON.parse(data)) || [];
  },
  save: (data: any) => localStorage.setItem(storageKey, JSON.stringify(data))
};