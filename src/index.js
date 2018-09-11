const forEach = Array.prototype.forEach;

module.exports = class TokenList {
	constructor(){
		this.tokens = {};
		this.add.apply(this, arguments);
	}

	add(){
		const { tokens } = this;
		forEach.call(arguments, token => {
			token && (tokens[token] = true);
		});

		return this;
	}

	remove(){
		const { tokens } = this;
		forEach.call(arguments, token => {
			delete tokens[token];
		});

		return this;
	}

	contains(token){
		return Boolean(this.tokens[token]);
	}

	toggle(token, force){
		if(typeof force !== `undefined`){
			if(force){
				this.add(token);
				return true;
			}else{
				this.remove(token);
				return false;
			}
		}

		if(this.contains(token)){
			this.remove(token);
			return false;
		}

		this.add(token);
		return true;
	}

	get value(){
		return Object.keys(this.tokens).join(` `);
	}

	// replace(oldToken, newToken){
	// 	this.remove(oldToken);
	// 	this.add(newToken);
	//
	// 	return this;
	// }

	// item(index){
	// 	return Object.keys(this.tokens)[index];
	// }
};
