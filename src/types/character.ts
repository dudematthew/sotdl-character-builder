export interface Character {
	id: string;
	name: string;
	level: number;
	attributes: {
		strength: number;
		agility: number;
		intellect: number;
		will: number;
		health: number;
		defense: number;
		speed: number;
		healingRate: number;
		corruption?: number;
		insanity?: number;
		power?: number;
		damage?: number;
		languages: string[];
		professions: string[];
		// Add other attributes as needed
	};
	ancestry: {
		name: string;
		description: string;
	};
	paths: {
		novice?: {
			name: string;
			level: number;
		};
		expert?: {
			name: string;
			level: number;
		};
		master?: {
			name: string;
			level: number;
		};
	};
}
