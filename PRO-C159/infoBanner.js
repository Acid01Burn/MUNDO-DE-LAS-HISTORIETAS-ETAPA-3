AFRAME.registerComponent("",{
    schema:{
        itemId:{default:"",type:"string"},
    },

    update:function(){
        this.createBanner();
    },

    createBanner:function(){
        posterInfo= {
            superman:{
                banner_url:"assets/posters/superman-banner.jpg",
                title:"Superman",
                released_year:"1962",
                description:"Superman es una serie de cómics estadounidense en curso que presenta al superhéroe de DC Comics Superman como protagonista principal. Superman comenzó como una de varias características de antología en el cómic Action Comics de National Periodical Publications en junio de 1938. La tira resultó tan popular que National lanzó a Superman en su propio cómic homónimo, el primero para cualquier superhéroe, que se estrenó con la fecha de portada. Verano de 1939."
            },
            spiderman:{
                banner_url:"assets/posters/spiderman-banner.png",
                title:"Spiderman",
                released_year:"1962",
                description:"Spider-Man es un superhéroe ficticio creado por el escritor y editor Stan Lee y el escritor y artista Steve Ditko. Apareció por primera vez en la antología de cómics Amazing Fantasy (agosto de 1962) en la Edad de Plata de los cómics."
            },
            "captain-aero":{
                banner_url:"assets/posterscaptain-aero-banner.jpg",
                title:"Spiderman",
                released_year:"1962",
                description:"Captain Aero Comics es un cómic de la Edad de Oro de los cómics, publicado originalmente por Helnit Publishing y adquirido por Holyoke Publishing en 1942. El número se publicó en diciembre de 1941 y se publicó hasta el final (agosto de 1946)."
            },
            "outer-space":{
                banner_url:"assets/posters/outer-space-banner.jpg",
                title:"Spiderman",
                released_year:"1962",
                description:"¡Este es el tema más vital de nuestros tiempos! ¡Todo hombre... y mujer... niño... estadounidense le debe a su país y a sí mismo leer este número!"
            },
        };
        const {itemId} = this.data;
        const fadeBackgroundEl = document.querySelector("#fadeBackground");

        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("id",`${itemId}-banner`);

        entityEl.setAttribute("geometry",{
            primitive:"plane",
            width:0.9,
            height:1,
        });

        entityEl.setAttribute("material",{color:"#000"});
        entityEl.setAttribute("position",{x:0, y:0.1, z:-1});

        const item = posterInfo[itemId];

        const imageEl = this.createImageEl(item);
        const titleEl = this.createTitleEl(item);
        const descriptionEl = this.createDescriptionEl(item);

        entityEl.appendChild(imageEl);
        entityEl.appendChild(titleEl);
        entityEl.appendChild(descriptionEl);

        fadeBackgroundEl.appendChild(entityEl);
    },

    createImageEl:function(item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("geometry",{
            primitive:"plane",
            width:0.85,
            height:0.4
        });
        entityEl.setAttribute("material",{src:item.banner_url});
        entityEl.setAttribute("position",{x:0, y:0.3, z:0.05});
        return entityEl;
    },

    createTitleEl:function(item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("text",{
            shader:"msdf",
            anchor:"left",
            font:"https://cdn.aframe.io/examples/ui/Viga-Regular.json",
            width:1.2,
            height:2,
            color:"#FFF",
            value:`${item.title} (${item.released_year})`,
        });
        entityEl.setAttribute("position",{x:-0.4, y:0.02, z:0.05});
        return entityEl;
    },

    createDescriptionEl:function(item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("text",{
            shader:"msdf",
            anchor:"left",
            font:"https://cdn.aframe.io/examples/ui/Viga-Regular.json",
            width:0.75,
            height:2,
            color:"#FFF",
            wrapCount:"40",
            value:item.description,
        });
        entityEl.setAttribute("position",{x:-0.4, y:-0.24, z:0.05});
        return entityEl;
    },
});