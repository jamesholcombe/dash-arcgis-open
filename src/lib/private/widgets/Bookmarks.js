import { loadModules } from "esri-loader";


function renderBookmarks({view, position, ...props}){
    
  
    loadModules(['esri/widgets/Bookmarks', ], {
        css: true,
    }).then(([ Widget]) => {
        


        const myWidget = new Widget({
            view: view,
            container : document.createElement("div"),
            ...props
            
            
        });

        
        
        view.ui.add(myWidget, "top-right");
        
        
    }).catch((err) => console.error(err));
       
}

export {renderBookmarks}