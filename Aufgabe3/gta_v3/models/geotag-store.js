// File origin: VS1LAB A3

const GeoTag = require("./geotag");
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
    #geotags = [];
    constructor(tagList){
        tagList.forEach(element => {
            this.addGeoTag(new GeoTag(element[2], element[1], element[0], element[3]));
        });
    }
    // TODO: ... your code here ...

    addGeoTag(geoTag){
        //console.log("Adding Geo Tag: " + geoTag.name);
        //console.log(geoTag.longitude + " / " + geoTag.latitude + " (Long / Lat)");
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
        let nearbyGeoTags = [];
        this.#geotags.forEach(element => {
            if(Math.sqrt(Math.pow(element.latitude-latitude, 2) + Math.pow(element.longitude-longitude, 2)) <= radius){
                nearbyGeoTags.push(element);
            }
        });
        console.log(nearbyGeoTags);
        return nearbyGeoTags;
    }

    searchNearbyGeoTags(latitude, longitude, radius, keyword){
        let nearbyTags = [];
        console.log(this.#geotags);
        console.log(latitude);
        for (let i = 0; i < this.#geotags.length; i++) {
            if(radius >= Math.sqrt(Math.pow(this.#geotags[i].latitude - latitude, 2) + Math.pow(this.#geotags[i].longitude - longitude, 2))){
                if(this.#geotags[i].name.includes(keyword) || this.#geotags[i].hashtag.includes(keyword)){
                    nearbyTags.push(this.#geotags[i]);
                }
            }
        }
        console.log(nearbyTags);
        return nearbyTags;
    }
}


module.exports = InMemoryGeoTagStore
