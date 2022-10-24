$(function(){
    $.get('https://fuchsia-almondine-fisher.glitch.me/movies').done(function(data){
        console.log(data);
    });
});