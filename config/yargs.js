const argv = require('yargs') //We can use yargs to get data from command promt
	.option ('b', {
		alias: 'base',
		type: 'number',
		describe: 'Base for multiply table',
		demandOption: true //to make this a required param
	})
	.option ('l', {
		alias: 'list',
		type: 'boolean',
		default: false,
		describe: 'Show created table on console'
	})
	.option ('t', {
		alias: 'limit',
		type: 'number',
		default: 10,
		describe: 'Set the limit of operations'
	})
	.check( (argv) => {
		if (isNaN(argv.b)) {
			throw 'Base must be a number';
		}

		if (isNaN(argv.t)) {
			throw 'Limit must be a number';
		}

		return true //if no error
	})					 	
	.argv; //return

//This is the way node allow us to export funtions or any data we need to be used on the main
module.exports = argv;
