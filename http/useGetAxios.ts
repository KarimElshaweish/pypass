import axios from "axios";
import { useDispatch } from "react-redux";

const useGetAxios = () => {
  const dispatch = useDispatch();
  return async (url: string, type: string, stateName: string) => {
    await axios
      .get(url)
      .then((res) => {
        dispatch({
          type,
          [stateName]: res.data.results,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export default useGetAxios;
