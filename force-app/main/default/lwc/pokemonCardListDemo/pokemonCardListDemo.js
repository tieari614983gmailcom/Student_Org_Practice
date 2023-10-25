import { LightningElement } from 'lwc';
import POKEMON_DEMO from '@salesforce/apex/PokemonDemo.getPokemons';

export default class PokemonCardListDemo extends LightningElement {
    
    pokemons;
    error;
    searchWords;

    connectedCallback(){
       this.loadPokemons(this.searchWords);
    }

    handleChange(event){
        this.searchWords = event.target.value;
        this.loadPokemons(this.searchWords);
    }

    loadPokemons(searchWords){
        POKEMON_DEMO(searchKey = searchWords) 
        .then(result => {
            this.pokemons = result;
           // console.log('this.pokemons  '+JSON.stringify(this.pokemons));
        })
        .catch(error => {
            this.error = error;
            console.log('Error occcured  '+error);
        })

    }
}