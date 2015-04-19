/**
 * ...
 * @author Ramir Pulanco
 */

var page1;
var page2;
var page3;
var pageSet;
var pageControl;

var currentPage = 0;

function initControls(){
	console.log("initialize controls");
	
	pageSet = new lib.pgeSet();
	
	stage.addChild(pageSet);
	stage.update();
	
	pageControl = pageSet.main;
	//console.log(pageControl.btnNext);
	
	pageControl.btnNext.addEventListener( "click", function(){
		currentPage += 1;
		pageControl.gotoAndStop(currentPage);
		stage.update();
	})

	pageControl.btnPrev.addEventListener( "click", function(){
		currentPage -= 1;
		pageControl.gotoAndStop(currentPage);
		stage.update();
	})
	
	pageControl.btnHome.addEventListener( "click", function(){
		currentPage = 0;
		pageControl.gotoAndStop(currentPage);
		stage.update();
	})	
	
	
	
}
