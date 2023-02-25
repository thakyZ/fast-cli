#!/usr/bin/env node
'use strict';
const meow = require('meow');
const importJsx = require('import-jsx');
const React = require('react');
const {render} = require('ink');

// Note to self: This cannot be ESM until https://github.com/vadimdemedes/import-jsx/issues/15 is fixed.

const ui = importJsx('./ui');

const cli = meow(`
	Usage
	  $ fast
	  $ fast > file

	Options
	  --upload, -u   Measure upload speed in addition to download speed
	  --single-line  Reduce spacing and output to a single line
<<<<<<< HEAD
	  --json         Process output in json format also forces single line 
=======
	  --json         JSON output
>>>>>>> b8f3061b0585cf1ad123f2e0cf13090063d21cd8

	Examples
	  $ fast --upload > file && cat file
	  17 Mbps
	  4.4 Mbps

<<<<<<< HEAD
	  $ fast --upload --json-pretty 

=======
	  $ fast --upload --json
>>>>>>> b8f3061b0585cf1ad123f2e0cf13090063d21cd8
`, {
	flags: {
		upload: {
			type: 'boolean',
			alias: 'u'
		},
		singleLine: {
			type: 'boolean'
		},
		json: {
			type: 'boolean'
		}
	}
});

<<<<<<< HEAD
// Check connections
dns.lookup('fast.com', error => {
	if (error && error.code === 'ENOTFOUND') {
		console.error(
			chalk.red(
				`${lineBreak(1)}${spacing(1)}Please check your internet connection.${lineBreak(1)}`
			)
		);
		process.exit(1);
	}
});

let data = {};
const spinner = ora();

const lineBreak = amount => (cli.flags.singleLine || cli.flags.json || cli.flags.jsonPretty ? '' : '\n'.repeat(amount));
const spacing = amount => (cli.flags.singleLine || cli.flags.json || cli.flags.jsonPretty ? '' : ' '.repeat(amount));

const downloadSpeed = () =>
	`${data.downloadSpeed} ${chalk.dim(data.downloadUnit)} ↓`;

const uploadSpeed = () =>
	data.uploadSpeed ?
		`${data.uploadSpeed} ${chalk.dim(data.uploadUnit)} ↑` :
		chalk.dim('- Mbps ↑');

const uploadColor = string => (data.isDone ? chalk.green(string) : chalk.cyan(string));

const downloadColor = string => ((data.isDone || data.uploadSpeed) ? chalk.green(string) : chalk.cyan(string));
=======
const main = async () => {
	const app = render(React.createElement(ui, {
		singleLine: cli.flags.singleLine,
		upload: cli.flags.upload,
		json: cli.flags.json
	}));
>>>>>>> b8f3061b0585cf1ad123f2e0cf13090063d21cd8

	await app.waitUntilExit();
};

<<<<<<< HEAD
const speed = () => speedText() + lineBreak(2);

function exit() {
	if (process.stdout.isTTY) {
		logUpdate(`${lineBreak(2)}${spacing(4)}${speed()}`);
	}

	if (cli.flags.json) {
		logUpdate(JSON.stringify(data, null, null));
	} else {
		let output = `${data.downloadSpeed} ${data.downloadUnit}`;

		if (cli.flags.upload) {
			output += `\n${data.uploadSpeed} ${data.uploadUnit}`;
		}

		console.log(output);
	}

	process.exit();
}

if (process.stdout.isTTY) {
	setInterval(() => {
		const pre = lineBreak(2) + spacing(2) + chalk.gray.dim(spinner.frame());

		if (!data.downloadSpeed) {
			logUpdate(pre + lineBreak(2));
			return;
		}

		logUpdate(pre + speed());
	}, 50);
}

(async () => {
	try {
		await api({measureUpload: cli.flags.upload}).forEach(result => {
			data = result;
		});

		exit();
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
})();
=======
main();
>>>>>>> b8f3061b0585cf1ad123f2e0cf13090063d21cd8
