import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  PathValue,
  UnpackNestedValue,
  useForm,
  UseFormSetValue,
} from "react-hook-form";

export function useAsyncForm<
  T extends {
    [key: string]: number | string | any;
  }
>(asyncData: T) {
  const formControl = useForm<T>();

  useEffect(() => {
    if (asyncData)
      Object.keys(asyncData).forEach((key) =>
        formControl.setValue(
          key as any,
          asyncData[key] as UnpackNestedValue<PathValue<T, any>>
        )
      );
  }, [asyncData]);

  return formControl;
}

export function useAsyncState<T>(data: T): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(data);
  useEffect(() => {
    setState(data);
  }, [data]);
  return [state, setState];
}
