import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div>© {year} Customer Life Insurance Centre</div>
      <div className="disclaimer">This is an independent advisory site. Tata AIA is the product provider.</div>
    </footer>
  )
}
