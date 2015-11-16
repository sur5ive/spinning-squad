$(document).ready(function(){
});

function updatePlayerData(msg) {
	$("#alert-text").html(msg);
	$("#alert-popup").fadeIn('slow');
}

function updateProgressBar(progress) {
	$("#progress-bar-label").html(progress + '%');
	$("#progress-bar-stats").css('width',  progress + '%').attr('aria-valuenow',progress);
}

function showProgressBar() {
	$("#progress-stats").css('display', 'inherit');
	updateProgressBar(0);
}

function hideProgressBar() {
	$("#progress-stats").css('display', 'none');
	updateProgressBar(-1);
}

$("#button-update").click(function () {
	var currentProgress = parseInt($("#progress-bar-stats").attr('aria-valuenow'));
	var step = 5;
	var maxValue = parseInt($("#progress-bar-stats").attr('aria-valuemax'));
	var newProgress = currentProgress + step;
	
	if (currentProgress < 0) {
		showProgressBar();
	}
	else if ((currentProgress == 0) || (newProgress < maxValue)) {
		showProgressBar();
		updateProgressBar(newProgress);
	}
	else if ((newProgress >= maxValue) && (currentProgress < maxValue)) {	
		updateProgressBar(maxValue);
		updatePlayerData("Great Success!");
	}	
	else if (currentProgress >= maxValue) {
		hideProgressBar();
	}
});

$(function(){
    $("[data-hide]").on("click", function(){
        $(this).closest("." + $(this).attr("data-hide")).hide();
    });
});