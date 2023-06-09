import {$post} from '../../utils/transport';

export const sendLoginData = ({queryParams}) => {
  const params = {
    url: `http://localhost:3005/login`,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(queryParams),
  };
  return $post(params);
};
