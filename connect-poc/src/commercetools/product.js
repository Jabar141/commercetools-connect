import { apiRoot, projectKey } from './client';

const getProductProjection = () => { return apiRoot.withProjectKey({ projectKey }).productProjections().search().get().execute(); }


module.exports.productProjections = getProductProjection();