$( "document" ).ready(function() {
    $("button").click(function(){
        $(".output").text("");
        let sentances =$("input").val();
        let wording = sentences.split(' ');
        let vowels = [ 'a', 'e', 'i', 'o', 'u' ];
        wording.forEach(function(word){
            let firstLetter=word[0].toLowerCase();
            if (vowels.includes(firstLetter)) {
                console.log(true);
                let vowelWord= word + "ay ";
                $('.output').append(vowelWord);
            }else {
                  console.log(false);
                let conWord= word.slice(1) + firstLetter + "ay ";
                $('.output').append(conWord);

            }
        });

    });

});


