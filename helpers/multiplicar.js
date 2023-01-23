//////Here we must define / inport the node packagaes we need to use
const fs = require('fs');
const colors = require('colors');

const createFileTable = async(base = 5, list, limit) => {

	try {
		let salida, consola = '';

		for (let i = 1; i <= `${limit}`; i++) {
			consola += (`base ${base} ${'x'.red} ${i} ${'='.red} ${base*i}\n`);
			salida += (`base ${base} x ${i} = ${base*i}\n`);
		}

		if(list) {
			console.log('============'.green);
			console.log('Tabla del:'.green, colors.blue(base));
			console.log('============'.green);
			console.log(consola);
		}

		///Create the write file to save the file into our file system
		/// We send the route, the data and the callback
		/*fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
				if (err) throw err;
				console.log(`Table with base ${base} created.`);
		})*/

		//We also can use the writeFileSync and manage errors with try catch
		fs.writeFileSync(`output/table-${base}.txt`, salida);

		return `table-${base}.txt`;

	} catch (err) {
		throw err;
	}

}

//This is the way node allow us to export funtions or any data we need to be used on the main
module.exports = {
  createFileTable
}