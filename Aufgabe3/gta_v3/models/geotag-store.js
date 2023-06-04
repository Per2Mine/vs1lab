// File origin: VS1LAB A3

const { tagList } = require("./geotag-examples");

/**
 * This script is a template for exercise VS1lab/Aufgabe3
 * Complete all TODOs in the code documentation.
 */

/**
 * A class for in-memory-storage of geotags
 * 
 * Use an array to store a multiset of geotags.
 * - The array must not be accessible from outside the store.
 * 
 * Provide a method 'addGeoTag' to add a geotag to the store.
 * 
 * Provide a method 'removeGeoTag' to delete geo-tags from the store by name.
 * 
 * Provide a method 'getNearbyGeoTags' that returns all geotags in the proximity of a location.
 * - The location is given as a parameter.
 * - The proximity is computed by means of a radius around the location.
 * 
 * Provide a method 'searchNearbyGeoTags' that returns all geotags in the proximity of a location that match a keyword.
 * - The proximity constrained is the same as for 'getNearbyGeoTags'.
 * - Keyword matching should include partial matches from name or hashtag fields. 
 */
class InMemoryGeoTagStore{
    constructor(){
        this.addGeoTag(tagList).forEach(element => {
            this.addGeoTag(element);
        });
    }
    #geotags = [];
    // TODO: ... your code here ...

    addGeoTag(geoTag){
        this.#geotags.push(geoTag);
    }

    removeGeoTag(name){
        this.#geotags.forEach(element => {
            if(element == name){
                delete this.#geotags[element];
            }
        });
    }

    getNearbyGeoTags(longitude, latitude, radius){
        let nearByGeoTags = [];
        this.#geotags.forEach(element => {
            if(Math.sqrt(Math.pow(element.latitude-latitude, 2) + Math.pow(element.longitude-longitude, 2)) <= radius){
                nearByGeoTags.push(element);
            }
        });
        return nearByGeoTags;
    }

    searchNearbyGeoTags(longitude, latitude, name, hashtag, radius){
        let keyGeoTags = [];
        this.getNearbyGeoTags(longitude, latitude, radius).forEach(element => {
            if(element.hashtag == hashtag || element.name == name){
                keyGeoTags.push(element);
            }
        });
        return keyGeoTags;
    }
}


module.exports = InMemoryGeoTagStore
