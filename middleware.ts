const { next } = require('@vercel/edge')
export default function middleware(request) {
	return next()
}
