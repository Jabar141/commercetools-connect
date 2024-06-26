import { lazy } from 'react';


const HondaUI = lazy(
    () => import('./honda-view' /* webpackChunkName: "channels" */)
  );
  


export default HondaUI;