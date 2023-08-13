window.onload = function () {
	const card = document.querySelector(".achievementcard-container .card");
	card.addEventListener("mousemove", function (e) {
		const cardHeight = this.offsetHeight;
		const cardWidth = this.offsetWidth;
		const { offsetX, offsetY } = e;
		let highlightValue = 1.5 - (1.5 - 0.5) * (offsetY / cardHeight);
		this.style.filter = `brightness(${highlightValue})`;
		let rotateXValue = Math.floor(20 - 40 * (offsetY / cardHeight));
		let rotateYValue = Math.floor(-20 + 40 * (offsetX / cardWidth));
    this.style.transform = `rotateX(${rotateXValue}deg) rotateY(${rotateYValue}deg)`;
	});
  card.addEventListener("mouseout", function() {
    this.style.transform = "";
    this.style.filter = "brightness(1)"
  })
};
