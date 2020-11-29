import * as JsSearch from "js-search";


const buildIndex = ( data ) => {
  const dataToSearch = new JsSearch.Search("isbn");
  dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();
  dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();
  dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("isbn")
  dataToSearch.addIndex("title");
  dataToSearch.addIndex("author");
  dataToSearch.addDocuments(data);
  return dataToSearch;
};

export { buildIndex };