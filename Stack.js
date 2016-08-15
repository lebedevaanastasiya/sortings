function Stack(){
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.length = length;
	this.clear = clear;
}

function push(element){
	this.dataStore[this.top++] = element;
}

function pop(){
	return this.dataStore[--this.top];
}

function peek(){
	return this.dataStore[this.top - 1];
}

function length(){
	return this.top;
}

function clear(){
	this.top = 0;
}

var stack = new Stack();
stack.push("A");
stack.push(13);
stack.push('C');

console.log(stack.pop(), " ", stack.pop(), " ", stack.peek());