import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    facts: [
        'прообразом Чубакки стал пёс режиссёра;',
        'актёрам разрешили подобрать любимый цвет для своих световых мечей;',
        'в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину;',
        'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу;',
        'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок.',
    ],
    currentFacts: [],
};

export const factsSlice = createSlice({
    name: 'facts',
    initialState,
    reducers: {
        getFacts(state, action) {
            state.facts = [...state.facts];
            state.currentFacts = [...state.facts].slice(-action.payload);
        },
        clearFacts(state) {
            state.currentFacts = [];
        }
    }
});

export const {getFacts, clearFacts} = factsSlice.actions;
export default factsSlice.reducer;