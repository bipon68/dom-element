// Topic: Event Listener

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



// Topic: Event Listener
let btn = document.querySelector("#btn")
let para = document.querySelector("#para")

let isShown = false

btn.addEventListener('click', function(){
	if(isShown){
		para.style.visibility = 'hidden'
		isShown = false
		btn.innerHTML = 'Show'
	}else{
		para.style.visibility = 'visible'
		isShown = true
		btn.innerHTML = 'Hide'
	}
})