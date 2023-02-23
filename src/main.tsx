/** @format */
// cSpell:ignore eversky aboutus

import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import '@/styles/base.scss'

// import Landing from '@/pages/landing'
// import AboutUs from '@/pages/aboutus'
// import ErrorPage from '@/pages/error'
import Loading from '@/pages/loading'

const Landing = lazy(() => import('@/pages/landing'))
const AboutUs = lazy(() => import('@/pages/aboutus'))
const ErrorPage = lazy(() => import('@/pages/error'))

const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage />,
	},
	{
		path: '/eversky',
		element: <Landing />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/eversky/about-us',
		element: <AboutUs />,
	},
])

const App: React.FC<unknown> = () => {
	return (
		<HelmetProvider>
			<Suspense fallback={<Loading />}>
				<RouterProvider router={router} fallbackElement={<Loading />} />
			</Suspense>
		</HelmetProvider>
	)
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
