const wrapper = document.querySelector('.wrapper');
window.addEventListener("resize", renderBlocks);
function renderBlocks(){
	let quX = window.innerWidth/23,
quY = window.innerHeight/23;
commonQu = Math.ceil(quY*quX);
for(let i = 0; i < commonQu; i++){
let element = document.createElement('div');
element.classList.add('content__element');
wrapper.append(element);
	}
}
renderBlocks();
	wrapper.addEventListener("mouseover", function(event){
		let newColorOne = '#' + Math.random().toString(16).replace('0.', '').slice(0, 6),
		newColorTwo = '#' + Math.random().toString(16).replace('0.', '').slice(0, 6),
		newColorThree = '#' + Math.random().toString(16).replace('0.', '').slice(0, 6);
		if(event.target.classList.contains('wrapper')) return;
		event.target.style.transition = '';
		event.target.nextElementSibling.style.transition = '';
		event.target.previousElementSibling.style.transition = '';
		event.target.style.transition = 'box-shadow, 0s';
		event.target.style.boxShadow = `0 0 20px ${newColorOne}, inset 0 0 10px ${newColorTwo}`;
		event.target.nextElementSibling.style.boxShadow = `0 0 20px ${newColorThree}`;
		event.target.previousElementSibling.style.boxShadow = `inset 0 0 10px ${newColorOne}`;
		event.target.style.borderColor = newColorOne;
		event.target.nextElementSibling.style.borderColor = newColorTwo;
		event.target.previousElementSibling.style.borderColor = newColorThree;
	});
	wrapper.addEventListener('mouseout', function(event){
		if(event.target.classList.contains('wrapper')) return;
		event.target.style.cssText = '';
		event.target.nextElementSibling.style.cssText = '';
		event.target.previousElementSibling.style.cssText = '';
		event.target.style.transition = '7s';
		event.target.style.transition = 'box-shadow, 15s';
		event.target.nextElementSibling.style.transition = '5s';
		event.target.previousElementSibling.style.transition = '3s';
	});