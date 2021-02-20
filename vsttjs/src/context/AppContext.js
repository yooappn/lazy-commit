import React, { useState, useEffect } from "react";
import { Key, getLocalData, loadData } from './local';
import { buildIndex } from './search';

const appState = {
  data : [
    {title: 'aaaa'}, {title: 'bbb'}
  ],
  search: {engine: {}, result: []},
  sheet: {url: ''}
};

const initData = (cb, ce) => {
  const cfg = getLocalData(Key.sheet)

  console.log('initData------');
  console.log(cfg);

  let url = '';
  if (cfg !== null && cfg !== undefined) {
    url = cfg.hasOwnProperty('sheet') ? cfg.sheet.url : '' ;
  }

  if (cfg === null || cfg === undefined) {
    ce({});
    cb([]);
    return;
  }
  loadData(cfg.sheet.url).then((result) => {
    const eg = buildIndex(result.data.books);
    ce(eg);
    cb([]);
  })
};


const AppContext = React.createContext({});

const AppProvider = ({children}) => {

  const [config, setConfig] = useState(appState.sheet);
  const [rows, setRows] = useState(appState.search.result);
  const [engine, setEngine] = useState(appState.search.engine);

  useEffect(() => {
    initData(setRows, setEngine);
  }, []);

  return (
    <AppContext.Provider value={{ config, setConfig, rows, setRows, engine, setEngine }} >
      {children}
    </AppContext.Provider>
  )
};

export { AppProvider, AppContext };
