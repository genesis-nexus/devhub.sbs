import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

const PreferencesContext = createContext();

export function usePreferences() {
    return useContext(PreferencesContext);
}

export function PreferencesProvider({ children }) {
    // Favorites: Array of tool IDs
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('devhub_favorites');
        return saved ? JSON.parse(saved) : [];
    });

    // Recents: Array of tool IDs (max 5)
    const [recents, setRecents] = useState(() => {
        const saved = localStorage.getItem('devhub_recents');
        return saved ? JSON.parse(saved) : [];
    });

    // Persist to LocalStorage
    useEffect(() => {
        localStorage.setItem('devhub_favorites', JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
        localStorage.setItem('devhub_recents', JSON.stringify(recents));
    }, [recents]);

    const toggleFavorite = useCallback((toolId) => {
        setFavorites(prev => {
            if (prev.includes(toolId)) {
                return prev.filter(id => id !== toolId);
            } else {
                return [...prev, toolId];
            }
        });
    }, []);

    const addToRecents = useCallback((toolId) => {
        setRecents(prev => {
            // Remove if already exists to move it to the top
            const filtered = prev.filter(id => id !== toolId);
            // Add to front, limit to 5
            return [toolId, ...filtered].slice(0, 5);
        });
    }, []);

    const isFavorite = useCallback((toolId) => favorites.includes(toolId), [favorites]);

    const value = useMemo(() => ({
        favorites,
        recents,
        toggleFavorite,
        addToRecents,
        isFavorite
    }), [favorites, recents, toggleFavorite, addToRecents, isFavorite]);

    return (
        <PreferencesContext.Provider value={value}>
            {children}
        </PreferencesContext.Provider>
    );
}
