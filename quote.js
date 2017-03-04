var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

var getQuote = function(data)
{


  
$(".quote-text").text(data.quoteText);
var qt= 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' Author: ' + data.quoteAuthor +' @this_is_saiki';

    if(data.quoteAuthor=="")
    {
     data.quoteAuthor=="Unknown";   
    }
    
$(".author-text").text(data.quoteAuthor);
$(".twitter-share-button").attr("href", qt);        
};

$(document).ready(function()
                  {
                  $.getJSON(url,getQuote,'jsonp');
                  $("#click").click(function(){
   

 $.getJSON(url,getQuote,'jsonp');                      
                         });});
                         