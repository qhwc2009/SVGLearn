import _ from 'lodash';

export const uuid = () => `${_.random(0, 1000)}-${_.random(0, 1000)}-${_.random(0, 1000)}-${_.random(0, 1000)}`;