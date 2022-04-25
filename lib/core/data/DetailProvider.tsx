import {
  createContext,
  ReactChild,
  ReactChildren,
  ReactNode,
  useContext,
  useState,
} from "react";

type AdminContextType = {
  detailReactNode: ReactNode | undefined;
  setDetailReactNode: (node: ReactNode) => void;
};
export const adminContext = createContext<AdminContextType>({
  detailReactNode: undefined,
  setDetailReactNode: (node: ReactNode) => {},
});

type Props = {
  children: ReactChildren | ReactChild;
};

export const DetailProvider = ({ children }: Props) => {
  const [detailReactNode, setDetailReactNode] = useState<ReactNode>(null);

  return (
    <adminContext.Provider
      value={{
        detailReactNode,
        setDetailReactNode: (node) => setDetailReactNode(node),
      }}
    >
      {children}
    </adminContext.Provider>
  );
};

export const useDetail = () => useContext(adminContext);
