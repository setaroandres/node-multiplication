//We instanciate object exported 
const { createFileTable } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

//to get params from command prompt

/**
 * NOT RECOMENDED!!
 * 
	console.log(process.argv);
	const [ , , argBase = 'base=5' ] = process.argv;
	const [ , base = 5 ] = argBase.split('=');
 */

/*console.log('Raw Base from command prompt: ', argv);
console.log('Base from command prompt with yargs to be used: ', argv.b);*/

//const base = 5;

//We can call the function here
createFileTable(argv.b, argv.l, argv.t)
	.then(nombreArchivo => console.log(nombreArchivo, 'created'))
	.catch(error => console.log(error));

