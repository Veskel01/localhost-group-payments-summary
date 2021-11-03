import React from "react";

// packages
import { useQuery, RefetchOptions, RefetchQueryFilters } from "react-query";
import axios from "axios";

// types
import { ApiResponseType } from "Types/App.types";

type ContextType = {
  isLoading: boolean;
  isRefetching: boolean;
  refetch: (options?: RefetchOptions & RefetchQueryFilters) => void;
} & ApiResponseType;

const AppContext = React.createContext<ContextType>({
  studentsData: [],
  isLoading: false,
  isRefetching: false,
  refetch: () => {},
  summarizedPayments: {
    fifteenth: {
      amount: 0,
      payed: 0,
      notPayed: 0,
    },
    fifth: {
      amount: 0,
      payed: 0,
      notPayed: 0,
    },
    first: {
      amount: 0,
      payed: 0,
      notPayed: 0,
    },
    tenth: {
      amount: 0,
      payed: 0,
      notPayed: 0,
    },
  },
});

const ContextProvider: React.FC = ({ children }) => {
  const [appData, setAppData] = React.useState<ContextType>({
    isLoading: false,
    isRefetching: false,
    studentsData: [],
    refetch: () => {},
    summarizedPayments: {
      fifteenth: {
        amount: 0,
        payed: 0,
        notPayed: 0,
      },
      fifth: {
        amount: 0,
        payed: 0,
        notPayed: 0,
      },
      first: {
        amount: 0,
        payed: 0,
        notPayed: 0,
      },
      tenth: {
        amount: 0,
        payed: 0,
        notPayed: 0,
      },
    },
  });

  const apiUrl = process.env.REACT_APP_AWS_URL;

  const { data, isLoading, refetch, isRefetching } = useQuery("mainDataFetch", {
    queryFn: async () => {
      try {
        const { data } = await axios.get<ApiResponseType>(`${apiUrl}`);
        return data;
      } catch (e) {
        throw e;
      }
    },
  });

  React.useEffect(() => {
    if (isLoading) {
      setAppData((prevState) => ({ ...prevState, isLoading }));
    }
    if (data) {
      setAppData((prevState) => ({
        ...prevState,
        isLoading,
        isRefetching,
        studentsData: data.studentsData,
        summarizedPayments: data.summarizedPayments,
      }));
    }
  }, [data, isLoading, isRefetching]);

  React.useEffect(() => {
    if (isRefetching) {
      setAppData((prevState) => ({ ...prevState, isRefetching }));
    }
  }, [isRefetching]);

  React.useEffect(() => {
    setAppData((prevState) => ({ ...prevState, refetch }));
  }, [refetch]);

  return <AppContext.Provider value={appData}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  const { isLoading, studentsData, summarizedPayments, refetch, isRefetching } =
    React.useContext(AppContext);

  return {
    isLoading,
    studentsData,
    refetch,
    summarizedPayments,
    isRefetching,
  };
}

export default ContextProvider;
