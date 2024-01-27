import { createContext, useContext } from "react";

import { TranslationNamespaceContextType } from "./types";

export const TranslationNamespaceContext = createContext<TranslationNamespaceContextType>({
    id: "",
});

export function useTranslationNamespaceContext(): TranslationNamespaceContextType {
    return useContext(TranslationNamespaceContext);
}