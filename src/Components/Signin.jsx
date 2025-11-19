import React, { useRef, useState, useEffect } from 'react'
import './Signin.css'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

export default function Sinin() {

  const btnref = useRef()
  const [mode, setMode] = useState('signin')
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("loggedIn") === "true"
  )

  const Navigate = useNavigate()

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const err = {}
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) err.email = 'Enter a valid email'
    if (!form.password || form.password.length < 6) err.password = 'Password must be at least 6 characters'
    if (mode === 'signup') {
      if (!form.name || form.name.trim().length < 2) err.name = 'Enter your name'
      if (form.password !== form.confirm) err.confirm = 'Passwords do not match'
    }
    setErrors(err)
    return Object.keys(err).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    if (mode === 'signin') {
      alert(`Signed in as ${form.email}`)
      setIsLoggedIn(true)
      localStorage.setItem("loggedIn", "true")
      Navigate('/')
    } else {
      alert(`Account created for ${form.name} (${form.email})`)
      setIsLoggedIn(true)
      localStorage.setItem("loggedIn", "true")
      Navigate('/Body')
    }

    setForm({ name: '', email: '', password: '', confirm: '' })
  }

  const logout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem("loggedIn")
    setMode('signin')
  }

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} logout={logout} />

      <br /><br /><br />
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-brand">YouTube SignIn</div>
          {!isLoggedIn && (
            <div className="auth-toggle">
              <button ref={btnref} className={mode === 'signin' ? 'active' : ''} onClick={() => setMode('signin')}>Sign In</button>
              <button ref={btnref} className={mode === 'signup' ? 'active' : ''} onClick={() => setMode('signup')}>Sign Up</button>
            </div>
          )}

          {isLoggedIn && (
            <button className="submit-btn" style={{ marginBottom: "20px" }} onClick={logout}>
              Logout
            </button>
          )}

          {!isLoggedIn && (
            <form className="auth-form" onSubmit={onSubmit} noValidate>
              {mode === 'signup' && (
                <div className="form-row">
                  <label htmlFor="name">Full name</label>
                  <input id="name" name="name" value={form.name} onChange={onChange} placeholder="Your full name" />
                  {errors.name && <div className="error">{errors.name}</div>}
                </div>
              )}

              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" value={form.email} onChange={onChange} placeholder="you@example.com" />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>

              <div className="form-row password-row">
                <label htmlFor="password">Password</label>
                <div className="password-wrap">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={form.password}
                    onChange={onChange}
                    placeholder="At least 6 characters"
                  />
                  <button type="button" className="show-btn" onClick={() => setShowPassword((s) => !s)}>
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                {errors.password && <div className="error">{errors.password}</div>}
              </div>

              {mode === 'signup' && (
                <div className="form-row">
                  <label htmlFor="confirm">Confirm password</label>
                  <input id="confirm" name="confirm" type={showPassword ? 'text' : 'password'} value={form.confirm} onChange={onChange} placeholder="Repeat password" />
                  {errors.confirm && <div className="error">{errors.confirm}</div>}
                </div>
              )}

              <div className="form-row actions">
                <button className="submit-btn" type="submit">{mode === 'signin' ? 'Sign In' : 'Create account'}</button>
              </div>
            </form>
          )}

          {!isLoggedIn && (
            <div className="auth-footer">
              {mode === 'signin' ? (
                <small>New here? <button className="link-btn" onClick={() => setMode('signup')}>Create an account</button></small>
              ) : (
                <small>Have an account? <button className="link-btn" onClick={() => setMode('signin')}>Sign in</button></small>
              )}
            </div>
          )}

        </div>
      </div>
    </>
  )
}
