import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

const NAME = 'Pokemon__c.Name';
const LATITUDE = 'Pokemon__c.Location__Latitude__s';
const LONGITUDE = 'Pokemon__c.Location__Longitude__s';

const pokemonValue = [ NAME, LATITUDE, LONGITUDE ];

export default class PokemonLocationDemo extends LightningElement {

    @api recordId;
    name;
    mapMarkers=[];
    cardTitle;

    @wire(getRecord, { recordId: '$recordId', fields: pokemonValue})
    getPokemons({ error, data }){
        if(error){
            console.log("Error Occured "+JSON.stringify(error));
        }
        else if(data){
            this.name = getFieldValue(data, NAME);
            this.cardTitle = this.name;

            const Latitude = getFieldValue(data, LATITUDE);
            const Longitude = getFIeldValue(data, LONGITUDE);

            this.mapMarkers({
                Location : (Latitude, Longitude),
                title : this.name,
                description :  `Coords , ${Latitude}, ${Longitude}`
            })
            
        }
    }
}
