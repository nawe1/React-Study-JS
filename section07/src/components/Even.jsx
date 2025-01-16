import { useEffect } from "react";
import { useFormState } from "react-dom";

const Even = () => {
  useEffect(() => {
    //클린업, 정리함수수
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다.</div>;
};

export default Even;
