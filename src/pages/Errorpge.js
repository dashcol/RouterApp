import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/"); //or give hops (-1 or -2)
    }, 3000);
  }, []);
  return <h1>Something is wrong </h1>;
}
