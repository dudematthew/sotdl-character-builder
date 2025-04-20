import { CharacterData, characterService } from "@/lib/character-service";
import { useState } from "react";
import { Character } from "sotdl-character-wrapper";

export function useCharacter() {
	const [character, setCharacter] = useState<Character | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const createCharacter = async (data: CharacterData) => {
		setIsLoading(true);
		setError(null);

		try {
			const newCharacter = characterService.createCharacter(data);
			setCharacter(newCharacter);
		} catch (err) {
			setError(err instanceof Error ? err.message : String(err));
		} finally {
			setIsLoading(false);
		}
	};

	return {
		character,
		error,
		isLoading,
		createCharacter,
	};
}
