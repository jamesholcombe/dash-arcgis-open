import { loadModules } from "esri-loader";


function renderBasemapGallery({view, position, ...props}){
    
  
    loadModules(['esri/widgets/BasemapGallery', ], {
        css: true,
    }).then(([ Widget]) => {
        


        const myWidget = new Widget({
            view: view,
            ...props
            
        });

        
        
        view.ui.add(myWidget, {position : position});
        
        
    }).catch((err) => console.error(err));
       
}

export {renderBasemapGallery}