AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();    
    },
  
    handlePostersListState: function () {
      const id = this.el.getAttribute("id");
      const postersId = ["superman-poster", "spiderman-poster", "aero-poster", "outer-space-poster"];
      if (postersId.includes(id)) {
        const posterContainer = document.querySelector("#posters-container");
        posterContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "blue",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      // Mouse Enter Events
      this.el.addEventListener("mouseenter", () => {
        this.handlePostersListState();
      });
    },
    handleMouseLeaveEvents: function () {
      // Mouse Leave Events
      this.el.addEventListener("mouseleave",()=>{
        const {selectedItemId}=this.data
        if(selectedItemId){
          const el=document.querySelector(`#${selectedItemId}`)
          const id=el.getAttribute("id")
          if(id==selectedItemId){
            el.setAttribute("material",{
              color:"white",
              opacity:1
            });
          }
        }
      });
      
    },
  });
  