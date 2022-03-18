window.onload = () => {
}

AFRAME.registerComponent("foo", {
    init: function() {
        var data = this.data;
        var el = this.el;
        var model = el.object3D

       this.el.addEventListener("hitstart", (e)=>{
            window.location = "index4.html"
       })
    }
  })

AFRAME.registerComponent("button", {
  init: function() {
    var data = this.data;
    var el = this.el;
    var model = el.object3D

    this.el.addEventListener("click", (e)=>{
        let obj = document.getElementsByClassName("hiddenObj")
        for(i=0;i<obj.length;i++){
          // obj[i].setAttribute("visible", "true")
          // let animation = "property: model-opacity; dur: 1500; from: 0; to: 1; easing: easeInCubic" 
          let animation = "property: light.intensity; dur: 1500; from: 0; to: 1.5; easing: easeInOutCubic" 
          obj[i].setAttribute("animation", animation); 
       };

       let obj1 = document.getElementsByClassName("hideObj")
        for(i=0;i<obj1.length;i++){
          let animation = "property: position; dur: 1500; to: 0 -2 -5; delay: 500;easing: easeInOutCubic" 
          obj1[i].setAttribute("animation", animation); 
        };

        let obj3 = document.getElementsByClassName("hideObj2")
        for(i=0;i<obj3.length;i++){
          let animation = "property: light.intensity; dur: 1500; from: 0; to: 0.680; easing: easeInCubic" 
          obj3[i].setAttribute("animation", animation); 
        };

        let obj2 = document.getElementsByClassName("hideLight")
        for(i=0;i<obj2.length;i++){
          let animation = "property: light.intensity; delay: 500; dur: 1500; from: 1; to: 0; easing: easeInOutCubic" 
          obj2[i].setAttribute("animation", animation); 
        };w
   });
  }
})

AFRAME.registerComponent("model-opacity", {
  schema: {
    opacity: { type: "number", default: 0.5 }
  },
  init: function() {
    this.el.addEventListener("model-loaded", this.update.bind(this));
  },
  update: function() {
    var mesh = this.el.getObject3D("mesh");
    var data = this.data;
    if (!mesh) {
      return;
    }
    mesh.traverse(function(node) {
      if (node.isMesh) {
        console.log(node);
        node.material.opacity = data.opacity;
        node.material.transparent = data.opacity < 1.0;
        node.material.needsUpdate = true;
      }
    });
  }
});