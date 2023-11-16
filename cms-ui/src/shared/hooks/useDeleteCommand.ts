import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthUserContext, {
  AuthUserContextType,
} from 'shared/context/AuthUserContext';

const useDeleteCommand = <T>() => {
  const navigate = useNavigate();
  const errorToastMessage = (error: any) => toast.error(error);
  const { clearAuthUserData } =
    useContext<AuthUserContextType>(AuthUserContext);

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const executeDeleteCommand = (url: string, options?: Object | undefined) => {
    setLoading(true);
    axios
      .delete(url, options)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          if (error.response) {
            setError(error.response?.statusText);
            errorToastMessage(error.response?.statusText);
            if (error.response?.statusText === 'Unauthorized') {
              clearAuthUserData();
              navigate('/');
            }
          } else {
            setError('Server is offline or Connection Refused');
          }
        } else {
          setError('Network Error');
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, data, setData, error, setError, executeDeleteCommand };
};

export default useDeleteCommand;
