import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabaseClient';

const ApiContext = createContext();

export const useApi = () => {
    const context = useContext(ApiContext);
    if (!context) {
        throw new Error('useApi must be used within an ApiProvider');
    }
    return context;
};

export const ApiProvider = ({ children }) => {
    // Loading state
    const [isLoading, setIsLoading] = useState(false);

    // Products data
    const [products, setProducts] = useState([]);
    const [productsLoaded, setProductsLoaded] = useState(false);

    // Error state
    const [error, setError] = useState(null);

    // Function to get products from edge function
    const getProducts = useCallback(async (forceRefresh = false) => {
        // If products are already loaded and we don't want to force refresh, return cached data
        if (productsLoaded && !forceRefresh) {
            return products;
        }

        setIsLoading(true);
        setError(null);

        try {
            const { data, error } = await supabase.functions.invoke('get-products');

            if (error) {
                throw error;
            }

            setProducts(data || []);
            setProductsLoaded(true);

            return data || [];
        } catch (err) {
            console.error('Error fetching products:', err);
            setError(err.message || 'Une erreur est survenue lors de la récupération des produits');
            throw err;
        } finally {
            setIsLoading(false);
        }
    }, [products, productsLoaded]);

    // Function to refresh products
    const refreshProducts = useCallback(async () => {
        return await getProducts(true);
    }, [getProducts]);

    // Load products on mount
    useEffect(() => {
        getProducts();
    }, [getProducts]);

    // Clear error function
    const clearError = useCallback(() => {
        setError(null);
    }, []);

    const value = {
        // State
        products,
        productsLoaded,
        isLoading,
        error,

        // Functions
        getProducts,
        refreshProducts,
        clearError,
    };

    return (
        <ApiContext.Provider value={value}>
            {children}
        </ApiContext.Provider>
    );
};

export default ApiContext;
