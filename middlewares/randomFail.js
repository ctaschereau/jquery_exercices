module.exports = (req, res, next) => {
	if (Math.random() > 0.8) {
		next(new Error(`A random error occurred :(`));
	} else {
		next()
	}
};