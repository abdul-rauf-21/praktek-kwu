const coll = document.getElementsByClassName('collapsible');
const contents = document.getElementsByClassName('content');
const orderNum = document.querySelector('.orderNum');
const order = document.querySelector('.order');
const orderLink = document.querySelector('.orderLink');
const productName = document.querySelector('.product-name').textContent;
let counter = 1;

Array.from(coll).forEach( (col, index) =>{
	const content = contents[index];
	col.addEventListener('click', ()=>{
		if( content.style.display === 'flex' ){
			content.style.display = 'none';
		} else {
			content.style.display = 'flex';
		}
	})
})

function addOrder(){
	if( counter + 1 <= 20 ){
		counter += 1;
	}
	orderNum.textContent = counter;
}

function subOrder(){
	if( counter - 1 > 0 ){
		counter -= 1;
	}
	orderNum.textContent = counter;
}

function orderProduct(){
	let phoneNum = `6282384773721`;
	let orderText = `Saya ingin memesan ${counter} ${productName}`
	let link = `https://api.whatsapp.com/send?phone=${phoneNum}&text=${orderText}`;

	orderLink.setAttribute('href', link);
}











