       


       var form = document.querySelector('button')

        // creating tags for output container in HTML
    

       form.addEventListener("click", function (event) {
            event.preventDefault();
            console.log("done");
            createMeme();
        })

       function createMeme() {
        
        var imglink = document.getElementById("imglink");
        var ttext = document.getElementById("ttext");
        var btext = document.getElementById("btext");

        var memediv = document.createElement('div');
        var memeimg = document.createElement('img');
        var meme_top_p = document.createElement('p');
        var meme_bot_p = document.createElement('p');

        // appending the meme objects to the memediv (parent)
        memediv.append(memeimg);
        memediv.append(meme_top_p);
        memediv.append(meme_bot_p);
        
        // created classes for top paragraph and bottom paragraph to style inside CSS
        memediv.classList.add('memediv');
        memeimg.classList.add('memeimg');
        meme_top_p.classList.add('meme_top_p');
        meme_bot_p.classList.add('meme_bot_p');
        
        var outcontainer=document.getElementById('outcontainer');
        outcontainer.append(memediv);
        
        // assigning the value of the objects we got getByElementID to the HTML tags, to dispaly as output
        memeimg.src=imglink.value;
        meme_top_p.innerText=ttext.value;
        meme_bot_p.innerText=btext.value;

        memediv.addEventListener("click", function(event) {
            this.parentNode.removeChild(this);
        })
       }

       
        
