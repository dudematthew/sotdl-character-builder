import { characterConfig, Character, Ancestry } from "sotdl-character-wrapper";

export type CharacterData = {
	config: characterConfig;
	ancestry: Ancestry;
};

export class CharacterService {
	createCharacter(data: CharacterData): Character {
		try {
			return new Character(data.config, data.ancestry);
		} catch (error) {
			console.error("Error creating character: ", error);
			throw new Error(
				`Failed to create character: ${
					error instanceof Error ? error.message : String(error)
				}`
			);
		}
	}
}

export const characterService = new CharacterService();
