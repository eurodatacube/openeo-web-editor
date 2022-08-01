import { SupportedFormat } from './format';

class CSV extends SupportedFormat {

	constructor(asset, delim = [',', ';']) {
		super(asset, 'TableViewer', 'fa-table');
		this.delim = delim;
	}

	async parseData(data) {
		if (typeof data === 'string') {
			// Parse CSV
			let array = this.parseCSV(data.trim());
			// Convert values into numbers, if possible
			return array.map(row => row.map(col => {
				col = col.trim();
				if (col.length === 0) {
					return NaN;
				}
				else if (!isNaN(col)) { // https://stackoverflow.com/a/35759874/9709414
					return parseFloat(col);
				}
				else {
					return col;
				}
			}));
		}
		return data;
	}

	// From https://stackoverflow.com/questions/1293147/example-javascript-code-to-parse-csv-data
	parseCSV(str) {
		var arr = [];
		var quote = false;  // 'true' means we're inside a quoted field
	
		// Iterate over each character, keep track of current row and column (of the returned array)
		for (var row = 0, col = 0, c = 0; c < str.length; c++) {
			var cc = str[c], nc = str[c+1];        // Current character, next character
			arr[row] = arr[row] || [];             // Create a new row if necessary
			arr[row][col] = arr[row][col] || '';   // Create a new column (start with empty string) if necessary
	
			// If the current character is a quotation mark, and we're inside a
			// quoted field, and the next character is also a quotation mark,
			// add a quotation mark to the current column and skip the next character
			if (cc == '"' && quote && nc == '"') {
				arr[row][col] += cc; ++c;
				continue;
			}
	
			// If it's just one quotation mark, begin/end quoted field
			if (cc == '"') {
				quote = !quote;
				continue;
			}
	
			// If it's a elimiter and we're not in a quoted field, move on to the next column
			if (this.delim.includes(cc) && !quote) {
				++col;
				continue;
			}
	
			// If it's a newline (CRLF) and we're not in a quoted field, skip the next character
			// and move on to the next row and move to column 0 of that new row
			if (cc == '\r' && nc == '\n' && !quote) {
				++row; col = 0; ++c;
				continue;
			}
	
			// If it's a newline (LF or CR) and we're not in a quoted field,
			// move on to the next row and move to column 0 of that new row
			if (cc == '\n' && !quote) {
				++row; col = 0;
				continue;
			}
			if (cc == '\r' && !quote) {
				++row; col = 0;
				continue;
			}
	
			// Otherwise, append the current character to the current column
			arr[row][col] += cc;
		}
		return arr;
	}

}

export default CSV;