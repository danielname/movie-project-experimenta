$(function(){

    const CRUD = {
        Get(){
            $.get(DATA.URL.glitch).done(function(data){
                console.log(data);
            });
        },
        Post(){
            $.post()
        },
        Push(){
            $.ajax({
                url: DATA.URL.glitch,
                method: "PUSH",
                data: {
                    // limit:  10,
                    // offset: 20
                }
            }).done(function() {
                // do something with the data
            });
        },
        Patch(){
            $.ajax({
                url: DATA.URL.glitch,
                method: "PATCH",
                data: {
                    // limit:  10,
                    // offset: 20
                }
            }).done(function() {
                // do something with the data
            });
        },
        Put(){
            $.ajax({
                url: DATA.URL.glitch,
                method: "PUT",
                data: {
                    // limit:  10,
                    // offset: 20
                }
            }).done(function() {
                // do something with the data
            });
        },
        Delete(){
            $.ajax({
                url: DATA.URL.glitch,
                method: "DELETE",
            }).done(function() {
                // do something with the data
            });
        }
    }

    const DATA = {
        URL: {
            glitch: 'https://fuchsia-almondine-fisher.glitch.me/movies',
            omdb: `http://www.omdbapi.com/?i=tt3896198&apikey=${omdbKey}`
        }
        // i have to have a way to access this from created content
        // i have to be able to individually tweak any field
    }

    const INIT = {

    }

    const DISPLAY ={

    }
    //

});