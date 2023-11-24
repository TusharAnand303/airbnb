import { create } from "zustand";

interface LoginSearchStore {
    isOpen: boolean;
    onOpen:()=> void;
    onClose:()=> void;
}

const userSearchModal = create<LoginSearchStore>((set)=>({
    isOpen: false,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false}),
}));

export default userSearchModal;
