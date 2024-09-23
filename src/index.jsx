import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import CartProvider from './context/CartContext'
import { Analytics } from '@vercel/analytics/react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<CartProvider>
			<Analytics />
			<App />
		</CartProvider>
	</React.StrictMode>
)
