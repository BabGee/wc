import{Polymer,Base,SerializableElement,css,html,LitElement}from"../../../../../components/adaptive-ui.js";const IronJsonpLibraryBehavior={properties:{libraryLoaded:{type:Boolean,value:!1,notify:!0,readOnly:!0},libraryErrorMessage:{type:String,value:null,notify:!0,readOnly:!0}},observers:["_libraryUrlChanged(libraryUrl)"],_libraryUrlChanged:function(){if(this._isReady&&this.libraryUrl)this._loadLibrary()},_libraryLoadCallback:function(err,result){if(err){Base._warn("Library load failed:",err.message);this._setLibraryErrorMessage(err.message)}else{this._setLibraryErrorMessage(null);this._setLibraryLoaded(!0);if(this.notifyEvent)this.fire(this.notifyEvent,result,{composed:!0})}},_loadLibrary:function(){LoaderMap.require(this.libraryUrl,this._libraryLoadCallback.bind(this),this.callbackName)},ready:function(){this._isReady=!0;if(this.libraryUrl)this._loadLibrary()}};var LoaderMap={apiMap:{},require:function(url,notifyCallback,jsonpCallbackName){var name=this.nameFromUrl(url);if(!this.apiMap[name])this.apiMap[name]=new Loader(name,url,jsonpCallbackName);this.apiMap[name].requestNotify(notifyCallback)},nameFromUrl:function(url){return url.replace(/[\:\/\%\?\&\.\=\-\,]/g,"_")+"_api"}},Loader=function(name,url,callbackName){this.notifiers=[];if(!callbackName){if(0<=url.indexOf(this.callbackMacro)){callbackName=name+"_loaded";url=url.replace(this.callbackMacro,callbackName)}else{this.error=new Error("IronJsonpLibraryBehavior a %%callback%% parameter is required in libraryUrl");return}}this.callbackName=callbackName;window[this.callbackName]=this.success.bind(this);this.addScript(url)};Loader.prototype={callbackMacro:"%%callback%%",loaded:!1,addScript:function(src){var script=document.createElement("script");script.src=src;script.onerror=this.handleError.bind(this);var s=document.querySelector("script")||document.body;s.parentNode.insertBefore(script,s);this.script=script},removeScript:function(){if(this.script.parentNode){this.script.parentNode.removeChild(this.script)}this.script=null},handleError:function(){this.error=new Error("Library failed to load");this.notifyAll();this.cleanup()},success:function(){this.loaded=!0;this.result=Array.prototype.slice.call(arguments);this.notifyAll();this.cleanup()},cleanup:function(){delete window[this.callbackName]},notifyAll:function(){this.notifiers.forEach(function(notifyCallback){notifyCallback(this.error,this.result)}.bind(this));this.notifiers=[]},requestNotify:function(notifyCallback){if(this.loaded||this.error){notifyCallback(this.error,this.result)}else{this.notifiers.push(notifyCallback)}}};Polymer({is:"iron-jsonp-library",behaviors:[IronJsonpLibraryBehavior],properties:{libraryUrl:String,callbackName:String,notifyEvent:String}});var ironJsonpLibrary={IronJsonpLibraryBehavior:IronJsonpLibraryBehavior};Polymer({is:"google-maps-api",_template:null,behaviors:[IronJsonpLibraryBehavior],properties:{mapsUrl:{type:String,value:"https://maps.googleapis.com/maps/api/js?callback=%%callback%%"},apiKey:{type:String,value:""},clientId:{type:String,value:""},version:{type:String,value:"3.exp"},language:{type:String,value:""},signedIn:{type:Boolean,value:!1},notifyEvent:{type:String,value:"api-load"},libraryUrl:{type:String,computed:"_computeUrl(mapsUrl, version, apiKey, clientId, language, signedIn)"}},_computeUrl:function(mapsUrl,version,apiKey,clientId,language,signedIn){var url=mapsUrl+"&v="+version;url+="&libraries=drawing,geometry,places,visualization";if(apiKey&&!clientId){url+="&key="+apiKey}if(clientId){url+="&client="+clientId}if(!apiKey&&!clientId){console.warn("No Google Maps API Key or Client ID specified. "+"See https://developers.google.com/maps/documentation/javascript/get-api-key "+"for instructions to get started with a key or client id.")}if(language){url+="&language="+language}if(signedIn){url+="&signed_in="+signedIn}return url},get api(){return google.maps}});const LocationPickerBase=class extends SerializableElement{static get is(){return"location-picker"}static get properties(){return{location:Object}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}getValue(){return this.location.lng+","+this.location.lat}getName(){return this.e.formName}valid(){}invalid(){}validate(){if(this.e.required&&!this.getValue()){return new this.Validation(!1,"invalid")}return new this.Validation(!0,"valid")}init(pElement,loader){super.init(pElement,loader)}};var locationPicker={LocationPickerBase:LocationPickerBase};const LocationPickerStyles=css`
:host {
    display: block;
}




`;var locationPickerCss={LocationPickerStyles:LocationPickerStyles};const MapMarkerStyles=css`

:host {
    display: block;
    width: 100%;
    height: 500px;
 }
/*
.centerMarker {
  position: relative;
  background: url('data:image/png;base64,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') no-repeat;
  background-size: 100%;
  top: -50%;
  left: 50%;
  z-index: 1;
  margin-left: -14px;
  margin-top: -43px;
  height: 44px;
  width: 28px;
  cursor: pointer;
}

*/


.gm-style .controls {
font-size: 28px;  /* this adjusts the size of all the controls */

background-color: white;
box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
box-sizing: border-box;
border-radius: 2px;
cursor: pointer;
font-weight: 300;
height: 1em;
margin: 6px;
text-align: center;
user-select: none;
padding: 2px;
width: 1em;
}
.gm-style .controls button {
border: 0;
background-color: white;
color: rgba(0, 0, 0, 0.6);
}
.gm-style .controls button:hover {
color: rgba(0, 0, 0, 0.9);
}

.gm-style .controls.zoom-control {
display: flex;
flex-direction: column;
height: auto;
}
.gm-style .controls.zoom-control button {
font: 0.85em Arial;
margin: 1px;
padding: 0;
}

.gm-style .controls.maptype-control {
display: flex;
flex-direction: row;
width: auto;
}
.gm-style .controls.maptype-control button {
display: inline-block;
font-size: 0.5em;
margin: 0 1px;
padding: 0 6px;
}
.gm-style .controls.maptype-control.maptype-control-is-map .maptype-control-map {
font-weight: 700;
}
.gm-style .controls.maptype-control.maptype-control-is-satellite .maptype-control-satellite {
font-weight: 700;
}

.gm-style .controls.fullscreen-control button {
display: block;
font-size: 1em;
height: 100%;
width: 100%
}
.gm-style .controls.fullscreen-control .fullscreen-control-icon {
border-style: solid;
height: 0.25em;
position:absolute;
width: 0.25em;
}
.gm-style .controls.fullscreen-control .fullscreen-control-icon.fullscreen-control-top-left {
border-width: 2px 0 0 2px;
left: 0.1em;
top: 0.1em;
}
.gm-style .controls.fullscreen-control.is-fullscreen .fullscreen-control-icon.fullscreen-control-top-left {
border-width: 0 2px 2px 0;
}
.gm-style .controls.fullscreen-control .fullscreen-control-icon.fullscreen-control-top-right {
border-width: 2px 2px 0 0;
right: 0.1em;
top: 0.1em;
}
.gm-style .controls.fullscreen-control.is-fullscreen .fullscreen-control-icon.fullscreen-control-top-right {
border-width: 0 0 2px 2px;
}
.gm-style .controls.fullscreen-control .fullscreen-control-icon.fullscreen-control-bottom-left {
border-width: 0 0 2px 2px;
left: 0.1em;
bottom: 0.1em;
}
.gm-style .controls.fullscreen-control.is-fullscreen .fullscreen-control-icon.fullscreen-control-bottom-left {
border-width: 2px 2px 0 0;
}
.gm-style .controls.fullscreen-control .fullscreen-control-icon.fullscreen-control-bottom-right {
border-width: 0 2px 2px 0;
right: 0.1em;
bottom: 0.1em;
}
.gm-style .controls.fullscreen-control.is-fullscreen .fullscreen-control-icon.fullscreen-control-bottom-right {
border-width: 2px 0 0 2px;
}




`;var mapMarkerCss={MapMarkerStyles:MapMarkerStyles};class MapMarker extends LitElement{static get styles(){return[MapMarkerStyles,css`
        :host {
          display: block;
        }
      `]}render(){return html`

         <google-maps-api api-key="${this.key}" 
                          @api-load=${this.loaded} version="3.exp"></google-maps-api>
                
             <label class="form-label" for="search" >Search</label>
  <div class="control  has-icons-left has-icons-right">

    <input class="input is-medium" id="search" onfocus="this.select();" onmouseup="return false;"  >

  </div>             
                          
        <!-- Map View -->
        <div id="map" style="width: 100%; height: 440px"></div>
        <!--<div class="centerMarker"></div>-->
        
        
        <!-- Hide controls until they are moved into the map. -->
    <div style="display:none">
      <div class="controls zoom-control">
        <button class="zoom-control-in" title="Zoom In">+</button>
        <button class="zoom-control-out" title="Zoom Out">−</button>
      </div>
      <div class="controls maptype-control maptype-control-is-map">
        <button class="maptype-control-map"
                title="Show road map">Map</button>
        <button class="maptype-control-satellite"
                title="Show satellite imagery">Satellite</button>
      </div>
      <div class="controls fullscreen-control">
        <button title="Toggle Fullscreen">
          <div class="fullscreen-control-icon fullscreen-control-top-left"></div>
          <div class="fullscreen-control-icon fullscreen-control-top-right"></div>
          <div class="fullscreen-control-icon fullscreen-control-bottom-left"></div>
          <div class="fullscreen-control-icon fullscreen-control-bottom-right"></div>
        </button>
      </div>
    </div>
        
        

`}constructor(){super();this.API=Object}static get is(){return"map-marker"}static get properties(){return{map:Object,lat:Object,lng:Object,pickedLocation:Object,results:Array,key:String}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}nearbyPlacesCallback(results,status){console.log(results,status);if(status===google.maps.places.PlacesServiceStatus.OK){for(var i=0;i<results.length;i++){results[i];createMarker(results[i])}}}requestNearbyPlaces(){var service=new this.API.places.PlacesService(this.map),request={bounds:this.map.getBounds()};service.nearbySearch(request,this.nearbyPlacesCallback)}loaded(e){const self=this,API=e.target.api;this.API=e.target.api;var map=new API.Map(this.shadowRoot.querySelector("#map"),{center:{lat:-34.397,lng:150.644},zoom:8,disableDefaultUI:!0});this.map=map;this.initZoomControl(map);this.autoComplete();API.event.addListener(map,"idle",function(){var location=self.getMarkerPosition();if(location){self.dispatchEvent(new CustomEvent("center-change",{detail:{location:location}}))}})}autoComplete(){const self=this,input=this.shadowRoot.querySelector("#search");var autocomplete=new this.API.places.Autocomplete(input);autocomplete.setFields(["address_components","geometry","icon","name"]);autocomplete.addListener("place_changed",function(){var place=autocomplete.getPlace();if(!place.geometry){window.alert("No details available for input: '"+place.name+"'");return}if(place.geometry.viewport){self.map.fitBounds(place.geometry.viewport)}else{self.map.setCenter(place.geometry.location);self.map.setZoom(17)}})}initZoomControl(map){this.shadowRoot.querySelector(".zoom-control-in").onclick=function(){map.setZoom(map.getZoom()+1)};this.shadowRoot.querySelector(".zoom-control-out").onclick=function(){map.setZoom(map.getZoom()-1)};map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(this.shadowRoot.querySelector(".zoom-control"))}getMarkerPosition(){const latLng=this.map.getCenter();if(latLng){return{lat:latLng.lat(),lng:latLng.lng()}}}setCurrentPosition(){if(navigator.geolocation){navigator.geolocation.getCurrentPosition(position=>{const pos={lat:position.coords.latitude,lng:position.coords.longitude};this.map.setCenter(pos)},()=>{console.log("Could not determine your location...")})}else{console.log("Your browser does not support Geolocation.")}}}customElements.define(MapMarker.is,MapMarker);class LocationPicker extends LocationPickerBase{static get styles(){return[LocationPickerStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`

    
         <div class="column is-5 is-offset-4">
<div class="field">
        <h4>${this.e.name}</h4>

               <!-- Picked Location -->        
        <div id="picked"></div>    
        
         <map-marker key="${this.e.kind}" @center-change=${this._centerChanged}></map-marker>

           </div>
           </div>
        
        
        `}static get properties(){return{location:Object}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}_centerChanged(e){const location=e.detail.location;this.location=location;const onIdlePositionView=this.shadowRoot.querySelector("#picked");onIdlePositionView.innerHTML="Chosen location: lat "+location.lat+", lng "+location.lng}getValue(){return this.location.lng+","+this.location.lat}valid(){}invalid(){}init(pElement,loader){super.init(pElement,loader)}}customElements.define(LocationPicker.is,LocationPicker);export{ironJsonpLibrary as $ironJsonpLibrary,locationPicker as $locationPicker,locationPickerCss as $locationPickerCss,mapMarkerCss as $mapMarkerCss,IronJsonpLibraryBehavior,LocationPickerBase,LocationPickerStyles,MapMarkerStyles};