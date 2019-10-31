function Content() {
	var dom = document.getElementById('root');	
	var header = document.createElement('div');
	header.innerHTML = 'content'
	dom.append(header);
}

module.exports = Content;