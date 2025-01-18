import React, { createContext, useState, ReactNode } from "react";

interface Data {
  name: string;
  type: string;
}

interface Filter {
  page: number;
  pageSize: number;
  q: string;
  type: string;
  rarity: string;
}

interface Error {
  value: boolean;
  menssage: string;
}

interface PokemonTCGContextProps {
  data: Data | undefined;
  setData: React.Dispatch<React.SetStateAction<Data | undefined>>;
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: Error;
  setError: React.Dispatch<React.SetStateAction<Error>>;
  types: Array<string>;
  setTypes: React.Dispatch<React.SetStateAction<Array<string>>>;
  rarities: Array<string>;
  setRarities: React.Dispatch<React.SetStateAction<Array<string>>>;
}

export const PokemonTCGContext = createContext<PokemonTCGContextProps | undefined>(undefined);

interface PokemonTCGProviderProps {
  children: ReactNode;
}

export const PokemonTCGProvider: React.FC<PokemonTCGProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false)

  const [error, setError] = useState<Error>({
    value: false,
    menssage: '',
  })

  const [data, setData] = useState<Data | undefined>();

  const [filter, setFilter] = useState<Filter>({
    page: 1,
    pageSize: 5,
    q: '',
    type: 'all',
    rarity: 'all',
  });

  const [types, setTypes] = useState<Array<string>>([])

  const [rarities, setRarities] = useState<Array<string>>([])

  const values: PokemonTCGContextProps = {
    data,
    setData,
    filter, 
    setFilter,
    loading, 
    setLoading,
    error, 
    setError,
    types, 
    setTypes,
    rarities, 
    setRarities
  };

  return (
    <PokemonTCGContext.Provider value={values}>
      {children}
    </PokemonTCGContext.Provider>
  );
};
