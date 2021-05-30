const ts = "1622240497";
        const puKey = "754edea1a6ed50b187ecc70340c18abd";
        const md5 = "0d40730e21f1abb0d914b05b7fc7d423";
        // * Requerimento *
        fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${puKey}&hash=${md5}&limit=20`).then(response => { 
            return response.json();
        }).then(jsonParsed => { 
            const hero = document.querySelector('.heros');
        //  * Bustando heros *    
            jsonParsed.data.results.forEach( dados => {
                // * Verifica se a imagem esta disponivel *
                if(dados.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
                    const imgSrc = dados.thumbnail.path + "." + dados.thumbnail.extension;
                    const name = dados.name;
                    createSpaceHero(imgSrc, name,hero);
                }
            });
            // * Mensagem de quando o heroi nao esta disponivel *
           //    http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available

            function createSpaceHero(imgSrc, name, divToPush) {
                const divDad = document.createElement('div');
                const divSon = document.createElement('div');
                const legend = document.createElement('text');
                const img = document.createElement('img');

                legend.textContent = name;
                img.src = imgSrc;

                divSon.appendChild(legend);
                divSon.appendChild(img);
                divDad.appendChild(divSon);
                divToPush.appendChild(divDad);

                divDad.classList.add('styleDad');
            } 
        });