import { useCallback, useState } from 'react';

import { useAuth } from '@components/providers/auth-provider';

import { HomePageProps, TodoItem } from './home-page.types';

function useHomePageViewModel({ }: HomePageProps) {
    const { isAuthenticated, authenticate, signout } = useAuth();
    const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
    const [todoText, setTodoText] = useState<string>('');

    const addTodo = useCallback(() => {
        setTodoItems((items) => [...items, {
            id: items.length + 1,
            text: todoText,
            completed: false,
        }]);
        setTodoText('');
    }, [todoText]);

    const removeTodo = useCallback((id: number) => () => {
        setTodoItems((items) => items.filter((item) => item.id !== id));
    }, []);

    const toggleTodo = useCallback((id: number) => () => {
        setTodoItems((items) => items.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    completed: !item.completed,
                };
            }
            return item;
        }));
    }, []);

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(event.target.value);
    }, []);

    const handleLogin = useCallback(() => {
        authenticate('test');
    }, [authenticate]);

    return {
        todoItems,
        todoText,
        addTodo,
        removeTodo,
        toggleTodo,
        handleInputChange,
        handleLogin,
        isAuthenticated,
        signout,
    };
}

export default useHomePageViewModel;