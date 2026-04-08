import create from 'zustand';

interface Conversation {
    id: string;
    messages: string[];
}

interface Persona {
    name: string;
    characteristics: string[];
}

interface AppState {
    conversations: Conversation[];
    apiKeys: string[];
    personas: Persona[];
    featureToggles: Record<string, boolean>;
    addConversation: (conversation: Conversation) => void;
    removeConversation: (id: string) => void;
    setAPIKey: (key: string) => void;
    addPersona: (persona: Persona) => void;
    toggleFeature: (feature: string) => void;
}

const useStore = create<AppState>((set) => ({
    conversations: [],
    apiKeys: [],
    personas: [],
    featureToggles: {},
    addConversation: (conversation) => set((state) => ({
        conversations: [...state.conversations, conversation]
    })),
    removeConversation: (id) => set((state) => ({
        conversations: state.conversations.filter(conv => conv.id !== id)
    })),
    setAPIKey: (key) => set((state) => ({
        apiKeys: [...state.apiKeys, key]
    })),
    addPersona: (persona) => set((state) => ({
        personas: [...state.personas, persona]
    })),
    toggleFeature: (feature) => set((state) => ({
        featureToggles: {
            ...state.featureToggles,
            [feature]: !state.featureToggles[feature]
        }
    }))
}));

export default useStore;