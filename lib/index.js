var JsonDereferencer;
(function (JsonDereferencer) {
    function dereferenceJson(json, getter) {
    }
    JsonDereferencer.dereferenceJson = dereferenceJson;
    function getJsonByPath(json, path) {
        var keys = path.split('/');
        for (var key in keys) {
            try {
                json = json[key];
            }
            catch (e) {
                json = undefined;
            }
        }
        if (json === undefined) {
            throw new Error('Invalid path in json form');
        }
        return json;
    }
    JsonDereferencer.getJsonByPath = getJsonByPath;
})(JsonDereferencer || (JsonDereferencer = {}));
