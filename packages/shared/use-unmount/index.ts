/*
 * @Date: 2024-08-02 15:42:37
 * @Description: Modify here please
 */
import { useEffect, useRef } from "react";
import { isFunction } from "../utils";

export const useUnmount = (fn: () => void) => {
  if (!isFunction(fn)) {
    console.error(`参数“fn”应该是一个函数`);
  }

  // 最新的
  const fnRef = useRef(fn);
  fnRef.current = fn;

  useEffect(
    () => () => {
      fnRef.current();
    },
    []
  );
};
