function nextPhoto(){	
	if (((this.currentPhotoIndex) + 1) >= this.photoList.length)
	{
		console.log(this.photoList[this.currentPhotoIndex] + " is the last photo in the slideshow.");
	}
	
	else
	{
		this.currentPhotoIndex++;
		console.log("The current photo being displayed is " + this.photoList[this.currentPhotoIndex]);
	}	
}

function prevPhoto(){
	if (this.currentPhotoIndex === 0)
	{
		console.log(this.photoList[this.currentPhotoIndex] + " is the first photo in the slideshow.");
	}
	
	else
	{
		this.currentPhotoIndex--;
		console.log("The current photo being displayed is " + this.photoList[this.currentPhotoIndex]);
	}
}

function getCurrentPhoto(){
	console.log("The current photo being displayed is " + this.photoList[this.currentPhotoIndex]);
}

let slideshow = {
	photoList: ["First Photo", "Second Photo", "Third Photo", "Fourth Photo"],
	currentPhotoIndex: 0,
	funcNextPhoto: nextPhoto,
	funcPrevPhoto: prevPhoto,
	funcGetCurrentPhoto: getCurrentPhoto

}

slideshow.funcGetCurrentPhoto();
slideshow.funcPrevPhoto();
slideshow.funcNextPhoto();
slideshow.funcNextPhoto();
slideshow.funcPrevPhoto();
slideshow.funcGetCurrentPhoto();
slideshow.funcPrevPhoto();
slideshow.funcNextPhoto();
slideshow.funcNextPhoto();
slideshow.funcNextPhoto();
slideshow.funcNextPhoto();
slideshow.funcNextPhoto();
slideshow.funcNextPhoto();
slideshow.funcGetCurrentPhoto();
slideshow.funcGetCurrentPhoto();

