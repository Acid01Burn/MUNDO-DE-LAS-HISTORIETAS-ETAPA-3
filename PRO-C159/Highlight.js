AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },

    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },

    update:function(){
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
      c = fadeBackgroundEl.children;
      if(c.lenght>0){
          var i;
          for(i=0; i<= c.lenght; i++){
              fadeBackgroundEl.removeChild(c[i]);
          }
      } else {
          this.handleMouseClickEvent();
      }
    },  

    handleMouseEnterEvents: function () {
      
      this.el.addEventListener("mouseenter", () => {
        const id = this.el.getAttribute("id");
        const postersId = [
          "superman",
          "spiderman",
          "captain-aero",
          "outer-space",
        ];
        if (postersId.includes(id)) {
          const postersContainer = document.querySelector("#posters-container");
          postersContainer.setAttribute("cursor-listener", {
            selectedItemId: id,
          });
          this.el.setAttribute("material", { color: "#F2ECF0" });
        }
      });
    },

    handleMouseLeaveEvents:function(){
      this.el.addEventListener("mouseleave", () => {
        const { selectedItemId } = this.data;
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if (id == selectedItemId) {
            el.setAttribute("material", { color: "#fff" });
          }
        }
      });
    },

    handleMouseClickEvent:function(){
      if(selecedItemId){
          fadeBackgroundEl.setAttribute("visible",true);
          fadeBackgroundEl.setAttribute("info-banner",{
              itemId:selecedItemId,
          });
          titleEl.setAttribute("visible",false);
          cursorEl.setAttribute("position",{x:0, y:0, yz:-1});
          cursorEl.setAttribute("geometry",{
              radiusInner:0.03,
              radiusOuter:0.04,
          });
      } else {
          fadeBackgroundEl.setAttribute("visible",false);
          titleEl.setAttribute("visible",true);
          cursorEl.setAttribute("position",{x:0, y:0, z:-3});
          cursorEl.setAttribute("geometry",{
              radiusInner:0.08,
              radiusOuter:0.12
          });
      }
    }
});