import { PatientsListPageProps } from './patients-list-page.types';
import { PatientSchema } from '@features/patient-feature/types/patients';
import patientsApi from '@features/patient-feature/utils/patientsApi';
import { useTranslation } from '@lib/i18n';
import { useInfiniteQuery } from '@tanstack/react-query';
import debounce from 'lodash/debounce';
import { useCallback, useMemo, useState } from 'react';

function usePatientsListPageViewModel({ }: PatientsListPageProps) {
  const [ registerModalOpen, setRegisterModalOpen ] = useState(false);
  const { t } = useTranslation();
  const [ query, setQuery ] = useState<string | null>(null);
  const [ newPatientModalOpen, setNewPatientModalOpen ] = useState(false);

  const toggleRegisterModalOpen = useCallback(() => {
    setRegisterModalOpen(open => !open);
  }, []);

  const { isError, isFetched, data, error, isLoading, isFetching, refetch, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [ 'patients-list', query ?? 'empty-query' ],
    queryFn: (ctx) => patientsApi.list({
      cursor: ctx.pageParam,
      limit: ctx.pageParam === null ? 100 : 25,
      query,
    }),
    initialPageParam: null as string | null,
    getNextPageParam: (lastPage) => lastPage.data?.nextCursor ?? null,
  });

  const handleSearchChange = useMemo(() => debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, 500), []);

  const handleReload = useCallback(() => {
    refetch();
  }, [ refetch ]);

  const patients = useMemo(() => data?.pages?.flat()?.map(p => p?.data?.results)?.flat().map(p => PatientSchema.cast(p, {
    assert: false, stripUnknown: true,
  })) ?? [], [ data ]);

  const handleAddNewPatient = useCallback(() => {
    setNewPatientModalOpen(true);
  }, []);

  const handleCloseAddNewPatientModal = useCallback(() => {
    setNewPatientModalOpen(false);
  }, []);

  return {
    t,
    registerModalOpen,
    toggleRegisterModalOpen,
    patients: patients,
    isError,
    isFetched,
    isLoading,
    error,
    handleSearchChange,
    fetchNextPage,
    handleReload,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    newPatientModalOpen,
    handleAddNewPatient,
    handleCloseAddNewPatientModal,
  };
}

export default usePatientsListPageViewModel;
