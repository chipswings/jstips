class Logger {
	log(text) {
		console.debug('LOG: ', text);
	}
}

const logger = new Logger();

export function log(text) {
	logger.log(text);
}
