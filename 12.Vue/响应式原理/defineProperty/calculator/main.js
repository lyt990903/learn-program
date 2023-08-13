class Compute {
	plus(a, b) {
		return a + b;
	}
	minus(a, b) {
		return a - b;
	}
	mul(a, b) {
		return a * b;
	}
	div(a, b) {
		return a / b;
	}
}

class Calculator extends Compute {
	constructor(doc) {
		super();

		const oCal = doc.querySelector("#J-calculator");

		this.fInput = oCal.querySelector(".f-input");
		this.sInput = oCal.querySelector(".s-input");
		this.oBtnGroup = oCal.querySelector(".btn-group");
		this.oBtnItems = oCal.querySelectorAll("button");
		this.oResult = oCal.querySelector(".result");

		this.data = this.defineData();
		this.btnIdx = 0;
	}

	defineData() {
		var _obj = {},
			fNumber = 0,
			sNumber = 0,
			field = "plus";

		var _this = this;

		Object.defineProperties(_obj, {
			fNumber: {
				get() {
					console.log("fNumber is got.");
					return fNumber;
				},
				set(newVal) {
					fNumber = newVal;
					_this.computeResult(fNumber, sNumber, field);
					console.log(`fNumber is changed[${newVal}]`);
				}
			},
			sNumber: {
				get() {
					console.log("sNumber is got.");
					return sNumber;
				},
				set(newVal) {
					sNumber = newVal;
					_this.computeResult(fNumber, sNumber, field);
					console.log(`sNumber is changed[${newVal}]`);
				}
			},
			field: {
				get() {
					console.log("field is got.");
					return field;
				},
				set(newVal) {
					field = newVal;
					_this.computeResult(fNumber, sNumber, field);
					console.log(`field is changed[${newVal}]`);
				}
			}
		});

		return _obj;
	}

	init() {
		this.bindEvent();
	}

	bindEvent() {
		this.oBtnGroup.addEventListener("click", this.onFieldBtnClick.bind(this), false);
		this.fInput.addEventListener("input", this.onInput.bind(this), false);
		this.sInput.addEventListener("input", this.onInput.bind(this), false);
	}

	onFieldBtnClick(ev) {
		const e = ev || window.event,
			tar = e.target || e.srcElement,
			tagName = tar.tagName.toLowerCase();

		tagName === "button" && this.updateField(tar);
	}

	onInput(ev) {
		const e = ev || window.event,
			tar = e.target || e.srcElement,
			className = tar.className,
			val = Number(tar.value.replace(/\s+/g, "")) || 0;

		switch (className) {
			case "f-input":
				this.data.fNumber = val;
				break;
			case "s-input":
				this.data.sNumber = val;
				break;
			default:
				break;
		}
	}

	updateField(target) {
		this.oBtnItems[this.btnIdx].className = "";
		this.btnIdx = [].indexOf.call(this.oBtnItems, target);
		target.className += "current";
		this.data.field = target.getAttribute("data-field");
	}

	computeResult(fNumber, sNumber, field) {
		this.oResult.innerHTML = this[field](fNumber, sNumber);
	}
}

const calculator = new Calculator(document).init();
