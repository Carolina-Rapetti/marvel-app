export interface ApiCharData {
    results: Character[];
    [propName: string]: any
}
export interface ApiCharResponse {
    data: ApiCharData;
    [propName: string]: any
}
export interface Character {
    //quitar propiedades que no se usan
    id: number,
    name: string,
    description: string,
    modified: Date,
    resourceURI: string,
    urls: [
        {
        type: string,
        url: string
        }
    ],
    thumbnail: {
        path: string,
        extension: string
    },
    comics: {
        available: number,
        returned: number,
        collectionURI: string,
        items: [
        {
            resourceURI: string,
            name: string
        }
        ]
    },
    stories: {
        available: number,
        returned: number,
        collectionURI: string,
        items: [
        {
            resourceURI: string,
            name: string,
            type: string
        }
        ]
    },
    events: {
        available: number,
        returned: number,
        collectionURI: string,
        items: [
        {
            resourceURI: string,
            name: string
        }
        ]
    },
    series: {
        available: number,
        returned: number,
        collectionURI: string,
        items: [
        {
            resourceURI: string,
            name: string
        }
        ]
    }, 
    [propName: string]: any;

}