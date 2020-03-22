const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function shadow(event) {
	// const width = hero.offsetWidth;
	// const height = hero.offsetHeight;
	// above destructured below in ES6

	const { offsetWidth: width, offsetHeight: height } = hero;

	//to get the position of cursor:
	let { offsetX: x, offsetY: y} = event;

	//offsetX and offsetY of event depends on the element the mouse moves over, so hero container is treated separately from header
	//the below fix is to avoid situation when x and y are set to 0 when hovering over header
	// this - the thing that we listened on
	// target - the thing that it triggered on
	// we have to differentiate between them, to fix values only when moving over text, and not the container

	if (this !== event.target) {
		x = x + event.target.offsetLeft;
		y = y + event.target.offsetTop;
	}

	const xWalk = Math.round((x / width * walk) - (walk / 2));
	const yWalk = Math.round((y / height * walk) - (walk / 2));

	text.style.textShadow = `
		${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
		${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
		${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
		${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7) 
	`;
}

hero.addEventListener('mousemove', shadow);