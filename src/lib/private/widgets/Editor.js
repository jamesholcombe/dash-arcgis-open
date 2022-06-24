import { loadModules } from "esri-loader";


function renderEditor({view, position, ...props}){
    
  
    loadModules(['esri/widgets/Editor', ], {
        css: true,
    }).then(([ Widget]) => {
        


        const myWidget = new Widget({
            view: view,
            ...props
            
            
        });

        
        
        view.ui.add(myWidget, "top-right");
        
        
    }).catch((err) => console.error(err));
       
}

export {renderEditor}