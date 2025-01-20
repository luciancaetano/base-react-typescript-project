import { MenuItemProps } from './menu-item.types';
import { useTranslation } from '@lib/i18n';
import { useCallback, useMemo, useState } from 'react';
import { FcTemplate, FcCalendar, FcConferenceCall, FcOrgUnit } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

function useMenuItemViewModel({ item, children }: MenuItemProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [ isOpen, setIsOpen ] = useState(false);

  const handleOnClick = useCallback(() => {
    if(children) {
      setIsOpen(open => !open);
    } else {
      item.onClick?.(item);
      if(item.linkTo) {
        navigate(item.linkTo);
      }
    }
  }, [ children, item, navigate ]);

  const Icon = useMemo(() => {
    switch(item.iconName) {
    case 'dashboard': return FcTemplate;
    case 'agenda': return FcCalendar;
    case 'patients': return FcConferenceCall;
    case 'services': return FcOrgUnit;
    default: return null;
    }
  }, [ item.iconName ]);

  return {
    handleOnClick,
    isOpen,
    Icon,
    t,
  };
}

export default useMenuItemViewModel;
