import { useLocation } from 'react-router-dom';

export const usePath = () => {
  const location = useLocation();
	const arryPath = location.pathname.split("/");
  const current = arryPath[arryPath.length - 1];
  return current;
};
