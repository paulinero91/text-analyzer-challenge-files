var words = "the lazy brown fox jumped over the lazy dog"

//Word Count
function wordCount(string){
	return string.split(" ").length
}

console.log(wordCount(words))

function wordAvgLength(string){
	var total = 0;
	var words = string.split(" ")
	for(var i=0; i<words.length; i++){
		total += words[i].length 
	}
	return total / words.length

}

console.log(wordAvgLength(words))

function uniqueWordCount(string){
	var uniqueWords = []
	var words = string.split(" ")
	for(var i=0; i<words.length; i++){
		if(uniqueWords.indexOf(words[i]) === -1){
			uniqueWords.push(words[i])
		}
		console.log(words[i])
	}
	return uniqueWords.length
}

console.log(uniqueWordCount(words))

$('button').on("click",function(event){
	event.preventDefault()
	$('.hidden.text-report').removeClass('hidden')
	var input = $('#user-text').val()
	$('.wordcount').html(wordCount(input))
	$('.uniquecount').html(uniqueWordCount(input))
	$('.averageword').html(wordAvgLength(input))
})


