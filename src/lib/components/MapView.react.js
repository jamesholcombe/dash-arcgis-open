import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Map } from '@esri/react-arcgis';




// I need to pass the style to the div holding map.



export default class MapView extends Component {

    handleClick = (event) => {

    }
    
    render() {
        const {id,  setProps,} = this.props;

        console.log(this.props);
        const mapStyle = {
            width: '100%',
            height: '100%',
            
          };

         

        return (

            <div id={id} style = {mapStyle}>

                <div >
                   
                
                <Map 
                mapProperties ={ 
                    e => setProps({ value: e.target.mapProperties })
                        
                    }
                />
                <input
                    
                    onChange={
                        /*
                         * Send the new value to the parent component.
                         * setProps is a prop that is automatically supplied
                         * by dash's front-end ("dash-renderer").
                         * In a Dash app, this will update the component's
                         * props and send the data back to the Python Dash
                         * app server if a callback uses the modified prop as
                         * Input or State.
                         */
                        e => setProps({ id: e.target.id })
                    }
                />
                </div>


            </div>
        );
    }
}

MapView.defaultProps = {};

MapView.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,



    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};