// src/api/auth.js

export const login = async (email, password) => {
  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  if (!res.ok) {
    throw new Error('Login failed')
  }

  return res.json()
}

export const register = async (email, password) => {
  const res = await fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  let responseBody
  try {
    responseBody = await res.json()
  } catch {
    // На случай, если сервер вернул не JSON
    throw new Error('Ошибка при обработке ответа сервера')
  }

  if (!res.ok) {
    throw new Error(responseBody.error || 'Ошибка регистрации')
  }

  return responseBody
}


