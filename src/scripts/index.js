// console.log(window)

// // let headers = document.getElementsByTagName('h1');
// // console.log(headers);



// let btn = $('#click-me');
// console.log(btn.style);

// let colors = ['blue', 'red', 'green', 'yellow']
// let i = 0;

// btn.addEventListener('click', function(){
// 	let h1 = $('#my-h1');
// 	h1.innerHTML = 'this is my next text';
// 	h1.style.background = colors[i];

// 	if(i>=colors.length){
// 		i = 0;
// 	}else{
// 		i++
// 	}


// 	//alert("I am working");
// })

// function $(selector){
// 	return document.querySelector(selector)
// }

// let h1 = $("#my-h1")

// // h1.style.background = 'salmon'
// // h1.style.fontSize = '30px'


// let h1Styles = {
// 	background: 'salmon',
// 	fontSize: '30px',
// 	fontFamily: 'Arial',
// 	padding: '20px',
// 	color: '#222',
// 	textAlign: 'center'
// }


// Object.assign(h1.style, h1Styles)
// console.dir(h1);



// let pStyles = {
// 	background: '#f1f1f1',
// 	fontSize: '12px',
// 	fontFamily: 'Arial',
// 	color: '#333'
// }
// //let p = $('#my-para')

// Object.assign($('#my-para').style, pStyles)

// // let container = document.querySelector('h1')
// // console.log(container)


// let btn = document.querySelector("#btn")
// let para = document.querySelector("#para")

// let isShown = false

// btn.addEventListener('click', function(){
// 	if(isShown){
// 		para.style.visibility = 'hidden'
// 		isShown = false
// 		btn.innerHTML = 'Show'
// 	}else{
// 		para.style.visibility = 'visible'
// 		isShown = true
// 		btn.innerHTML = 'Hide'
// 	}
// })


// let root = document.querySelector('#root')

// let jumbotronDiv = document.createElement('div')
// //jumbotronDiv.classList.push('');
// jumbotronDiv.className = 'jumbotron'
// jumbotronDiv.setAttribute = ('id', 'my-jmb')
// root.appendChild(jumbotronDiv)

// let h1 = document.createElement('h1')
// h1.className = 'display-2 py-5' 
// h1.innerHTML = '<strong>Hello</strong>'

// jumbotronDiv.appendChild(h1);

// //console.log(root.children);

// //console.log(jumbotronDiv);


let nameField = document.querySelector('#nameField')
let ul = document.querySelector('#nameList')

nameField.addEventListener('keypress', function(event){
	//console.log(event)
	if(event.keyCode === 13){
		console.log('Enter Clicked');
		let name = event.target.value
		//console.log(name);
		//ul.appendChild(createLi(name))
		createLi(ul, name)
		event.target.value = ""
	}

})

function createLi(ul, name){
	let li = document.createElement('li')
	li.className = 'list-group-item d-flex'
	li.innerHTML = name

	let span = document.createElement('span')
	span.innerHTML = 'X'
	span.className = 'ml-auto'
	span.style.color = 'red'
	span.style.cursor = 'pointer'

	span.addEventListener('click', function(){
		//alert('I have clicked');
		ul.removeChild(li)
	})

	li.appendChild(span)

	//return li
	ul.appendChild(li)
}