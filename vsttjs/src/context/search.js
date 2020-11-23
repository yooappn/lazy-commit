import * as JsSearch from "js-search";


const buildIndex = (data) => {
  if (data.length === 0) {
    return null;
  }

  const fields = ['isbn', 'title', 'author'];
  const engine = new JsSearch.Search(fields[0]);

  engine.sanitizer = new JsSearch.LowerCaseSanitizer();
  engine.searchIndex = new JsSearch.TfIdfSearchIndex(fields[0]);
  fields.slice(1).forEach((f) => {
    engine.addIndex(f);
  });
  engine.addDocuments(data);
  return engine;
};




export { buildIndex };
