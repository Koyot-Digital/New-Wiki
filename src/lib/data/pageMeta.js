import pageTitlesAndTaglines from './pageTitles&Taglines.yaml' with { type: 'yaml' }

/** @typedef {{ 404?: string, default?: string }} ErrorTaglines */
/** @typedef {{ route: string, title: string, tagline?: string | null | ErrorTaglines }} PageMetaRecord */
/** @typedef {{ pages?: PageMetaRecord[] }} PageMetaFile */

/** @type {PageMetaFile} */
const data = pageTitlesAndTaglines
const pages = Array.isArray(data.pages) ? data.pages : []

/**
 * @param {string} route
 */
function normalizeRoute(route) {
	if (!route || typeof route !== 'string') return '/' // ← add this
	if (route === '/') {
		return route
	}
	const trimmed = route.endsWith('/') ? route.slice(0, -1) : route
	return trimmed || '/'
}

/**
 * @param {string} route
 * @returns {{ title: string, tagline: string | null }}
 */
export function getPageMeta(route) {
	const normalizedRoute = normalizeRoute(route)
	const page = pages.find(entry => normalizeRoute(entry.route) === normalizedRoute)

	if (!page) {
		return {
			title: 'ONPS Wiki',
			tagline: null,
		}
	}

	return {
		title: page.title,
		tagline: typeof page.tagline === 'string' ? page.tagline : null,
	}
}

/**
 * @param {number} status
 * @param {string | undefined} message
 * @returns {{ title: string, tagline: string }}
 */
export function getErrorMeta(status, message) {
	const errorEntry = pages.find(entry => normalizeRoute(entry.route) === '/error')
	const titleTemplate = errorEntry?.title ?? 'ONPS Wiki - {status} - {message}'
	const resolvedMessage = message || 'Unexpected Error'

	const title = titleTemplate
		.replace('{status}', String(status))
		.replace('{message}', resolvedMessage)

	const taglineSource = errorEntry?.tagline
	if (typeof taglineSource === 'object' && taglineSource !== null) {
		const statusTagline = status === 404 ? taglineSource[404] : undefined
		return {
			title,
			tagline: statusTagline ?? taglineSource.default ?? 'An unexpected error has occurred.',
		}
	}

	if (typeof taglineSource === 'string') {
		return {
			title,
			tagline: taglineSource,
		}
	}

	return {
		title,
		tagline: 'An unexpected error has occurred.',
	}
}
