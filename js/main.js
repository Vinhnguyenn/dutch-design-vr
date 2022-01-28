window.onload = () => {
}

AFRAME.registerComponent("foo", {
    init: function() {
        var data = this.data;
        var el = this.el;
        var model = el.object3D

       this.el.addEventListener("hitstart", (e)=>{
            window.location = "index3.html"
       })
    }
  })

AFRAME.registerComponent("button", {
  init: function() {
    var data = this.data;
    var el = this.el;
    var model = el.object3D

    this.el.addEventListener("mousedown", (e)=>{
        let obj = document.getElementsByClassName("hiddenObj")

        for(i=0;i<obj.length;i++){
          obj[i].setAttribute("visible", "true")
          let animation = "property: model-opacity; dur: 1000; to: 1" 
          obj[i].setAttribute("animation", animation); 
       }
   })
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