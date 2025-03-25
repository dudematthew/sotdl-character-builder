import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Character } from "@/types/character";

interface CharacterState {
	characters: Character[];
	activeCharacterId: string | null;
}

const initialState: CharacterState = {
	characters: [],
	activeCharacterId: null,
};

export const characterSlice = createSlice({
	name: "characters",
	initialState,
	reducers: {
		addCharacter: (state, action: PayloadAction<Omit<Character, "id">>) => {
			const newCharacter = {
				id: uuidv4(),
				...action.payload,
			};
			state.characters.push(newCharacter);

			// Set as active if it's the first character
			if (state.characters.length === 1) {
				state.activeCharacterId = newCharacter.id;
			}
		},
		updateCharacter: (state, action: PayloadAction<Character>) => {
			const index = state.characters.findIndex(
				(char) => char.id === action.payload.id
			);
			if (index !== -1) {
				state.characters[index] = action.payload;
			}
		},
		deleteCharacter: (state, action: PayloadAction<string>) => {
			state.characters = state.characters.filter(
				(char) => char.id !== action.payload
			);
			if (state.activeCharacterId === action.payload) {
				state.activeCharacterId =
					state.characters.length > 0 ? state.characters[0].id : null;
			}
		},
		setActiveCharacter: (state, action: PayloadAction<string>) => {
			state.activeCharacterId = action.payload;
		},
	},
});

export const {
	addCharacter,
	updateCharacter,
	deleteCharacter,
	setActiveCharacter,
} = characterSlice.actions;

export default characterSlice.reducer;
