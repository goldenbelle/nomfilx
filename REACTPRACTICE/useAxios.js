import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const useAxios = (opts, axiosInstance = axios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  if(!opts.url) {
    return;
  }
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      loading: true,
      ...state
    });
    setTrigger(Date.now());
  }
  useEffect(()=>{
    axiosInstance(opts).then(data => setState({
      ...state,
      loading: false,
      data
    })).catch(error => setState({...state, loading: false, error}));
  }, [trigger])
  return { ...state, refetch} ;
};

const App = () => {
  const {loading, data, error, refetch} = useAxios({url: "google.ca"})
  return (
    <div className="App">
      <h1> {error} </h1>
      <h2> {loading && "Loading"} </h2>
      <button onclick={refetch}> Refetch </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
