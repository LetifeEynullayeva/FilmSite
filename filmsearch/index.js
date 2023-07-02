$('button').click(function(){
    $('.movies').css({
        display:'block'
    })
    var FilmAdi=$('input').val()
    $.ajax({
    url:'http://www.omdbapi.com/?apikey=f28c2742&t='+FilmAdi
}).then(function(result){
    console.log(result)
    $('img').attr('src',result.Poster)
    $('.filminAdi').text(result.Title)
    $('.aktyorlar').text(result.Actors)
    $('.haqqinda').text(result.Plot)
    
}).catch(function(err){
    console.log('Xeta bas verdi')
})
})
