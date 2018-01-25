import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		return{ "name": "Lost Halls",
				"cyan": ["Dagger of Foul Malevolence", "Bow of Covert Havens", "Staff of the Cosmic Whole", "Wand of Recompense", "Sword of Acclaim", "Masamune", "Hydra Skin Armor", "Robe of the Grand Sorcerer", "Acropolis Armor", "Cloak of Ghostly Concealment", "Quiver of Elvish Mastery", "Elemental Detonation Spell", "Tome of Holy Guidance", "Helm of the Great General", "Colossus Shield", "Seal of the Blessed Champion", "Baneserpent Poison", "Bloodsucker Skull", "Giantcatcher Trap", "Planefetter Orb", "Prism of Apparitions", "Scepter of Storms", "Doom Circle"],
				"blue": ["Potion of Attack", "Potion of Defense", "Potion of Mana", "Potion of Life"],
				"orange": ["Brain of The Golem"],
				"red": ["Wyrmhide Armor", "Robe of the Star Mother", "Dominion Armor"],
				"white": ["Sword of the Colossus", "Marble Seal", "Breastplate of New Life", "Magical Lodestone"]}
	}
});
