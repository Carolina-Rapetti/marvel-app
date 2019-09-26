export interface ApiComicData {
    results: Comic[];
    [propName: string]: any
}
export interface ApiComicResponse {
    data: ApiComicData;
    [propName: string]: any
}
export interface Comic { //published, writer, artist, characters, title, thumbnail, description
    id: number,
    title: string,
    issueNumber: number,
    variantDescription: string,
    description: string,
    modified: Date,
    pageCount: number,
   
    series: {
      resourceURI: string,
      name: string
    },
    variants: [
      {
        resourceURI: string,
        name: string
      }
    ],
    collections: [
      {
        resourceURI: string,
        name: string
      }
    ],
    thumbnail: {
      path: string,
      extension: string
    },
    images: [
      {
        path: string,
        extension: string
      }
    ],
    creators: {
      available: number,
      returned: number,
      collectionURI: string,
      items: [
        {
          resourceURI: string,
          name: string,
          role: string
        }
      ]
    },
    characters: {
      available: number,
      returned: number,
      collectionURI: string,
      items: [
        {
          resourceURI: string,
          name: string,
          role: string
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
    [propName: string]: any;
  }