process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function(){
	var input = process.stdin.read();
	if(input !== null) {
		process.stdout.write(input);
	}
});

process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
	 	switch (input)  {
			case (instruction === '/exit'):
				process.stdout.write('Quittin app!\n');
				process.exit();
		 	break;
			case (instruction):
				process.stderr.write('Wrong instruction!\n');
		}
	}
});