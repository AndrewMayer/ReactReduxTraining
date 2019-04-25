import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = resource => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/${resource}`)
      .then(({ data }) => setResources(data));
  }, [resource]);

  return resources;
};

export default useResources;
