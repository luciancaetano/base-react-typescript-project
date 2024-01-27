/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import Loader from "@components/elements/loader";
import useUUID from "@hooks/use-uuid";

import { TranslationNamespaceContext } from "./translation-namespace-context";
import { I18NResource } from "./types";

type ExtractProps<T> = T extends ComponentType<infer P> ? P : never;

function withResourceBundle<T>(
    WrappedComponent: ComponentType<T>,
    resourceBundle: (() => Promise<{ default: I18NResource }>) | I18NResource,
) {
    const Component = (props: ExtractProps<typeof WrappedComponent>) => {
        const { i18n } = useTranslation();
        const namespace = useUUID();
        const [resource, setResource] = useState<I18NResource | null>(null);
        const loading = useRef(false);
        const [viewLoading, setViewLoading] = useState(true);

        useEffect(() => {
            if (typeof resourceBundle === "function") {
                if (!loading.current && !resource) {
                    loading.current = true;
                    setViewLoading(true);
                    resourceBundle().then((bundle) => {
                        setResource(bundle.default);
                        loading.current = false;
                        setViewLoading(false);
                    }).catch((error) => {
                        console.error(error);
                        loading.current = false;
                        setViewLoading(false);
                    });
                }
            } else {
                setResource(resourceBundle);
            }

        }, [resource]);

        useEffect(() => {
            if (resource) {
                Object.entries(resource).forEach(([language, bundle]) => {
                    i18n.addResourceBundle(language, namespace, bundle);
                });
            }

            return () => {
                if (resource) {
                    Object.entries(resource).forEach(([language]) => {
                        i18n.removeResourceBundle(language, namespace);
                    });
                }
            };
        }, [i18n, namespace, resource]);

        return (
            <TranslationNamespaceContext.Provider value={{ id: namespace }}>
                {!viewLoading && (
                    <WrappedComponent {...props as any} />
                )}
                {viewLoading && (
                    <Loader />
                )}
            </TranslationNamespaceContext.Provider>
        );
    };

    Component.displayName = `withResourceBundle(${WrappedComponent.displayName || WrappedComponent.name})`;

    return Component;
}

export default withResourceBundle;