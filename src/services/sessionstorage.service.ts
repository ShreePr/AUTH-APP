const SessionStorageService: Storage = {
  getItem: (name: string): string | null => sessionStorage.getItem(name),
  setItem: (name: string, value: any): void => sessionStorage.setItem(name, value),
  clear: (): void => sessionStorage.clear(),
  removeItem: (key: string): void => sessionStorage.removeItem(key),
  key: (index: number): string | null => sessionStorage.key(index),
  length: sessionStorage.length
};

export default SessionStorageService;
