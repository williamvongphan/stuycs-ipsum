let verbs = ["code", "debug", "test", "deploy", "refactor", "document", "review", "integrate", "release", "monitor", "fix", "optimize", "maintain", "support", "design", "merge", "build", "configure", "install", "upgrade", "update", "configure", "program", "develop", "write", "review", "analyze", "borked"]

let nouns = ["GUDCLEANLIVIN", "FRIST LSAT", "devo", "skeelton", "rona", "edihhh", "piazza", "qaf", "rumpus room", "key", "keys", "keys to success", "qaf post", "geethub", "library", "tidbit", "Repo of Holding", "thinker", "thinkeren", "disco", "qcc", "ops summary", "krewes", "intertrash", "daily digital", "ye olde rpg", "TPNG", "introcs", "apcs", "softdev",
"cybersecurtiy", "lct", "graphics", "systems", "ai", "nextcs", "workstation", "csdojo", "protips", "thonny",
	"onward+upward", "workshop", "googform", "googstuy",
	"think: s i m p l e. think: s m a r t.", "uv-radiation-emitting devices", "nota bene", "great big repo of holding",
	"s+s(+e)", "8000","880", "cobo", "gudfam", "team name portending greatness", "duckie", "ducky", "ppmp", "codingbat", "lisa", "marge", "homer", "moe", "bert", "( moony wormtail padfoot prongs )",
	"qaf drop", "thinking straight", "mysterion", "big oh", "time of the rona", "softdevo", "ubuntu", "Mykolyk", "Dyrland-Weaver", "DW", "Brooks", "Holmes", "Alonso", "Dillon", "Konstantinovich", "Mouzakitis", "Platek", "how2cs@stuy", "Schedule-o-Matic", "read eval print loop", "FIFO", "deliverables", "whitespace"
]

function createNoty(type, message) {
	new Noty({
		type: type,
		theme: 'sunset',
		text: message,
		timeout: 3000
	}).show();
}


// Build a Lorem Ipsum sentence from a random selection of words
function buildSentence(startWith = "") {
	  let sentence = startWith + (startWith.length > 0 ? " " : "");
		let wordCount = Math.floor(Math.random() * 10) + 1;
		for (let i = 0; i < wordCount; i++) {
				sentence += verbs[Math.floor(Math.random() * verbs.length)] + " "
				sentence += nouns[Math.floor(Math.random() * nouns.length)] + " "
		}
		// Capitalize the first letter of the sentence
		sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
		// Trim the trailing space
		sentence = sentence.trim();
		// Add a period
		sentence += ".";
		return sentence;
}

// Build a paragraph of Lorem Ipsum sentences
function buildParagraph(sentenceCount = 5, startWith = "") {
		let paragraph = "";
		paragraph += buildSentence(startWith) + " ";
		for (let i = 1; i < sentenceCount; i++) {
				paragraph += buildSentence() + " ";
		}
		return paragraph
}

// Build a Lorem Ipsum document
function buildDocument(paragraphCount = 5, sentenceCount = 5, options = {}) {
		let document = "";
		let lineBreak = options.singleLine ? "<br>" : "<br><br>";
		let startWith = options.startWith ? "Stuy CS dolor sit amet" : "";
		document += buildParagraph(sentenceCount, startWith) + lineBreak;
		for (let i = 1; i < paragraphCount; i++) {
				document += buildParagraph(sentenceCount) + (i < paragraphCount - 1 ? lineBreak : "");
		}
		return document;
}

/*
<div class="slider">
                <label for="paragraphs">Paragraphs</label>
                <input type="range" name="paragraphs" id="paragraphs" min="1" max="10" value="1">
                <span id="paragraphs-value">1</span>
            </div>
            <div class="slider">
                <label for="sentences">Sentences</label>
                <input type="range" name="sentences" id="sentences" min="1" max="10" value="1">
                <span id="sentences-value">1</span>
            </div>
 */
// When the slider values change, write the new values into the span elements
document.getElementById("sentences").oninput = function() {
		document.getElementById("sentences-value").innerHTML = this.value;
}
document.getElementById("paragraphs").oninput = function() {
		document.getElementById("paragraphs-value").innerHTML = this.value;
}

// Build a Lorem Ipsum document and insert it into the DOM
function insertLoremIpsum() {
		// Get slider values for sentence and paragraph counts
		let sentenceCount = document.getElementById("sentences").value;
		let paragraphCount = document.getElementById("paragraphs").value;
		// Get checkbox values
		let startWith = document.getElementById("start-with").checked;
		let singleLine = document.getElementById("single-line").checked;
		document.getElementById("ipsum").innerHTML = buildDocument(paragraphCount, sentenceCount, {
				startWith: startWith,
				singleLine: singleLine
		});
		createNoty("success", "StuyCS Ipsum generated!");
}

// Attach listener to generate button
document.getElementById("generate").addEventListener("click", insertLoremIpsum);

// Copy to clipboard
function copyToClipboard() {
		let ipsum = document.getElementById("ipsum");
		let range = document.createRange();
		range.selectNode(ipsum);
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(range);
		document.execCommand("copy");
		window.getSelection().removeAllRanges();
		createNoty("success", "Copied to clipboard!");
}

// Attach listener to copy button
document.getElementById("copy").addEventListener("click", copyToClipboard);