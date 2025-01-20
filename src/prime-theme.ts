/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from 'clsx';
import Tailwind from 'primereact/passthrough/tailwind';

export default {
  ...Tailwind,
  inputtext: {
    root: ({ props, context }: any) => ({
      className: clsx(
        'm-0',
        'font-sans text-gray-600 dark:text-white/80 bg-white dark:bg-[#2D394B] border transition-colors duration-200 appearance-none rounded-sm',
        {
          'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]':
                    !context.disabled,
          'hover:border-blue-500': !props.invalid && !context.disabled,
          'opacity-60 select-none pointer-events-none cursor-default': context.disabled,
          'border-gray-300 dark:border-[#495f81]': !props.invalid,
          'border-red-500 hover:border-red-500/80 focus:border-red-500':
                    props.invalid && !context.disabled,
          'border-red-500/50': props.invalid && context.disabled,
        },
        {
          'text-lg px-4 py-4': props.size === 'large',
          'text-xs px-2 py-2': props.size === 'small',
          'p-3 text-base': !props.size || typeof props.size === 'number',
        },
        {
          'pl-8': context.iconPosition === 'left',
          'pr-8': props.iconPosition === 'right',
        },
      ),
    }),
  },
  dialog: {
    root: ({ state }: any) => ({
      className: clsx('flex flex-col !rounded-sm sm:rounded-none shadow-lg border-0 h-full', 'md:max-h-[90%] sm:max-h-[100%] transform scale-100', 'm-0 md:max-w-[90%] sm:max-w-[100%]] w-full', 'dark:border dark:border-blue-900/40', {
        'transition-none transform-none !w-screen !h-screen !max-h-full !top-0 !left-0': state.maximized,
      }),
    }),
    header: {
      className: clsx('flex items-center justify-between shrink-0', 'bg-white text-gray-800 border-t-0  rounded-tl-sm rounded-tr-sm p-6', 'dark:bg-gray-900  dark:text-white/80'),
    },
    headerTitle: 'font-bold text-lg',
    headerIcons: 'flex items-center',
    closeButton: {
      className: clsx(
        'flex items-center justify-center overflow-hidden relative',
        'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
        'hover:text-gray-700 hover:border-transparent hover:bg-gray-200',
        'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // focus
        'dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]',
      ),
    },
    closeButtonIcon: 'w-4 h-4 inline-block',
    content: ({ state }: any) => ({
      className: clsx('overflow-y-auto', 'h-full', 'overflow-y-auto', 'bg-white text-gray-700 px-6 pb-8 pt-0', 'rounded-bl-sm rounded-br-sm', 'dark:bg-gray-900  dark:text-white/80 ', {
        grow: state.maximized,
      }),
    }),
    footer: {
      className: clsx('shrink-0 ', 'border-t-0 bg-white text-gray-700 px-6 pb-6 text-right rounded-b-sm', 'dark:bg-gray-900  dark:text-white/80'),
    },
    mask: ({ state }: any) => ({
      className: clsx('transition duration-200', { 'bg-black/40': state.containerVisible }),
    }),
    transition: ({ props }: any) => {
      return props.position === 'top'
        ? {
          enterFromClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0',
          enterActiveClass: 'transition-all duration-200 ease-out',
          leaveActiveClass: 'transition-all duration-200 ease-out',
          leaveToClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0',
        }
        : props.position === 'bottom'
          ? {
            enterFromClass: 'opacity-0 scale-75 translate-y-full',
            enterActiveClass: 'transition-all duration-200 ease-out',
            leaveActiveClass: 'transition-all duration-200 ease-out',
            leaveToClass: 'opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0',
          }
          : props.position === 'left' || props.position === 'top-left' || props.position === 'bottom-left'
            ? {
              enterFromClass: 'opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0',
              enterActiveClass: 'transition-all duration-200 ease-out',
              leaveActiveClass: 'transition-all duration-200 ease-out',
              leaveToClass: 'opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0',
            }
            : props.position === 'right' || props.position === 'top-right' || props.position === 'bottom-right'
              ? {
                enterFromClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0',
                enterActiveClass: 'transition-all duration-200 ease-out',
                leaveActiveClass: 'transition-all duration-200 ease-out',
                leaveToClass: 'opacity-0 scale-75 opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0',
              }
              : {
                enterFromClass: 'opacity-0 scale-75',
                enterActiveClass: 'transition-all duration-200 ease-out',
                leaveActiveClass: 'transition-all duration-200 ease-out',
                leaveToClass: 'opacity-0 scale-75',
              };
    },
  },
};
