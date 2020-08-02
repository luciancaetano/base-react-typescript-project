import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AppSingleton } from '@utils/singleton';

const HandleSingletonRouter = () => {
  const history = useHistory();

  useEffect(() => {
    AppSingleton.getInstance().setPushRouteFn(history.push);
  }, [history.push]);

  return null;
};

export default HandleSingletonRouter;
