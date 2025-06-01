import React, { useState } from 'react'
import { register } from '../api/auth'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)

    if (password !== confirmPassword) {
      setError('Пароли не совпадают')
      return
    }

    try {
      const result = await register(email, password)
      console.log('Registration success:', result)
      setSuccess(true)
    } catch (err) {
      console.error('Registration error:', err)
      if (err.message === 'User already exists') {
        setError('Пользователь с таким email уже существует')
      } else {
        setError(err.message || 'Ошибка регистрации')
      }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Регистрация</h2>

        {/* Ошибка */}
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm"
            role="alert"
          >
            <strong className="font-bold">Ошибка: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {/* Успех */}
        {success && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-sm"
            role="alert"
          >
            <strong className="font-bold">Успешно! </strong>
            <span className="block sm:inline">Вы зарегистрированы.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          />

          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          />

          <input
            type="password"
            placeholder="Повторите пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  )
}
