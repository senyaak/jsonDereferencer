module JsonDereferencer {

  export function dereferenceJson(json: any, getter: (path: string) => any) {
    /* TODO  */
  }

  export function getJsonByPath(json: any, path: string): JsonWebKey {
    let keys: string[] = path.split('/');
    for(let key in keys) {
      try {
        json = json[key]
      } catch (e) {
        json = undefined;
      }
    }
    if(json === undefined) {
      throw new Error('Invalid path in json form');
    }
    return json;
  }
}
