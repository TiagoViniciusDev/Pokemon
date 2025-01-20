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

interface ModalData {
  id: string;
  name: string;
}

interface PokemonTCGContextProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  error: Error;
  setError: React.Dispatch<React.SetStateAction<Error>>;
  data: Data | undefined;
  setData: React.Dispatch<React.SetStateAction<Data | undefined>>;
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  types: Array<string>;
  setTypes: React.Dispatch<React.SetStateAction<Array<string>>>;
  rarities: Array<string>;
  setRarities: React.Dispatch<React.SetStateAction<Array<string>>>;
  modalData: ModalData | undefined;
  setModalData: React.Dispatch<React.SetStateAction<ModalData | undefined>>;
  showCompareCards: boolean;
  setShowCompareCards: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PokemonTCGContext = createContext<PokemonTCGContextProps | undefined>(undefined);

interface PokemonTCGProviderProps {
  children: ReactNode;
}

export const PokemonTCGProvider: React.FC<PokemonTCGProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false)

  const [darkMode, setDarkMode] = useState<boolean>(false)

  const [error, setError] = useState<Error>({
    value: false,
    menssage: '',
  })

  const [data, setData] = useState<Data | undefined>();

  const [filter, setFilter] = useState<Filter>({
    page: 1,
    pageSize: 10,
    q: '',
    type: 'all',
    rarity: 'all',
  });

  const [types, setTypes] = useState<Array<string>>([])

  const [rarities, setRarities] = useState<Array<string>>([])

  const [modalData, setModalData] = useState<ModalData | undefined>();

  const [showCompareCards, setShowCompareCards] = useState<boolean>(false)

  const values: PokemonTCGContextProps = {
    loading, 
    setLoading,
    darkMode,
    setDarkMode,
    error, 
    setError,
    data,
    setData,
    filter, 
    setFilter,
    types, 
    setTypes,
    rarities, 
    setRarities,
    modalData, 
    setModalData,
    showCompareCards, 
    setShowCompareCards,
  };

  return (
    <PokemonTCGContext.Provider value={values}>
      {children}
    </PokemonTCGContext.Provider>
  );
};
