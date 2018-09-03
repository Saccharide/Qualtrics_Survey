Qualtrics.SurveyEngine.addOnload(function()
{


});

Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/

});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	for(j = 0; j<=i; j++){
    	var questionanswer= document.getElementById("cond_input").value +"|" + document.getElementById("trigger_input").value;
		Qualtrics.SurveyEngine.setEmbeddedData("Routine "+j, questionanswer);
	}
});
