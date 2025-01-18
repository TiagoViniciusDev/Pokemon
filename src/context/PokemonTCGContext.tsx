import React, { createContext, useState, ReactNode } from "react";

interface Data {
  name: string;
  type: string;
}

interface Filter {
  page: number;
  pageSize: number;
}

interface PokemonTCGContextProps {
  data: Data | undefined;
  setData: React.Dispatch<React.SetStateAction<Data | undefined>>;
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PokemonTCGContext = createContext<PokemonTCGContextProps | undefined>(undefined);

interface PokemonTCGProviderProps {
  children: ReactNode;
}

export const PokemonTCGProvider: React.FC<PokemonTCGProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false)

  const [data, setData] = useState<Data | undefined>();

  const [filter, setFilter] = useState<Filter>({
    page: 1,
    pageSize: 5
  });

  const values: PokemonTCGContextProps = {
    data,
    setData,
    filter, 
    setFilter,
    loading, 
    setLoading
  };

  return (
    <PokemonTCGContext.Provider value={values}>
      {children}
    </PokemonTCGContext.Provider>
  );
};
