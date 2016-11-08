declare module JsonDereferencer {
    function dereferenceJson(json: any, getter: (path: string) => any): void;
    function getJsonByPath(json: any, path: string): JsonWebKey;
}
