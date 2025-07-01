const STORAGE_KEY = 'citas';

export function obtenerCitas() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function guardarCitas(citas) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(citas));
}
