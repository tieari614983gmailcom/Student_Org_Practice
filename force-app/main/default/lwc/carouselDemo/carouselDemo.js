import { LightningElement } from 'lwc';
import StaticImages from '@salesforce/resourceUrl/LWCStaticResourceDemo';

export default class CarouselDemo extends LightningElement {
Individuals = [
    {
        id:"1",
        header:"Albert Eienstien",
        src: StaticImages + '/StaticResourceImages/Albert.jpg',
        description:"The Scientist",
        href:"https://en.wikipedia.org/wiki/Albert_Einstein"
    },
    {
        id:"2",
        header:"Albert Eienstien",
        src:StaticImages + '/StaticResourceImages/Edison.jpg',
        description:"The Scientist",
        href:"https://en.wikipedia.org/wiki/Albert_Einstein"
    },
    {
        id:"3",
        header:"Albert Eienstien",
        src:"Albert.jpg",
        description:"The Scientist",
        href:"https://en.wikipedia.org/wiki/Albert_Einstein"
    }
];
}