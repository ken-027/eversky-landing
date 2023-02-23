/** @format */

import Page from '@/components/layout/page'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
	const error = useRouteError() as never
	const { status, statusText, message } = error

	// TODO: change ui
	return (
		<>
			<Page documentTitle={`${status} ${statusText || message}`}>
				<div className='container'>
					<div id='error-page'>
						<h1>Oops!</h1>
						<p>Sorry, an unexpected error has occurred.</p>
						<p>
							<i>
								{status} {statusText || message}
							</i>
						</p>
					</div>
				</div>
			</Page>
		</>
	)
}
