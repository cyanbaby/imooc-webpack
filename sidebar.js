function Sidebar() {
	var dom = document.getElementById('root');	
	var header = document.createElement('div');
	header.innerHTML = 'siderbar'
	dom.append(header);
}

export default Sidebar;