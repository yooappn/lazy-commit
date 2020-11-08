import React, { useState } from "react";
import { Key, getLocalData, loadData } from './local';

const initData = (cb) => {
  const cfg = getLocalData(Key.sheet)
  loadData(cfg.sheet.url).then((result) => {
    cb(result.data.books);
  })
};

const AppContext = React.createContext({});

const AppProvider = ({children}) => {
  const cfg = getLocalData(Key.sheet)

  const appState = {
    data : [
      {title: 'aaaa'}, {title: 'bbb'}
    ],
    sheet: {url: cfg === undefined ? '': cfg.sheet.url}
  };

  const [config, setConfig] = useState(appState.sheet);
  const [rows, setRows] = useState(appState.data);

  initData(setRows);

  return (
    <AppContext.Provider value={{ config, setConfig, rows, setRows }} >
      {children}
    </AppContext.Provider>
  )
};

export { AppProvider, AppContext };
