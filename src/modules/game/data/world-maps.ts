import { withGrid } from "@/utils";
import { GameObject } from "../game-object";
import { Person } from "../gameObjects/person";

export type WorldMap = {
  lowerSrc: string;
  upperSrc: string;
  gameObjects: Record<string, GameObject>;
}

const worldMaps: Record<string, WorldMap> = {
  DemoRoom: {
    lowerSrc: '/assets/pizza-legends/maps/DemoLower.png',
    upperSrc: '/assets/pizza-legends/maps/DemoUpper.png',
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: withGrid(5),
        y: withGrid(6),
        src: '/assets/pizza-legends/characters/people/hero.png',
      }),
      // npcA: new Person({
      //   x: withGrid(7),
      //   y: withGrid(9),
      //   src: '/assets/pizza-legends/characters/people/npc1.png',
      // }),
    },
  },
  Kitchen: {
    lowerSrc: '/assets/pizza-legends/maps/KitchenLower.png',
    upperSrc: '/assets/pizza-legends/maps/KitchenUpper.png',
    gameObjects: {
      hero: new Person({
        x: withGrid(3),
        y: withGrid(1),
        src: '/assets/pizza-legends/characters/people/hero.png',
      }),
      npcA: new Person({
        x: withGrid(9),
        y: withGrid(2),
        src: '/assets/pizza-legends/characters/people/npc1.png',
      }),
      npcB: new Person({
        x: withGrid(7),
        y: withGrid(3),
        src: '/assets/pizza-legends/characters/people/npc2.png',
      }),
    },
  }
};

export default worldMaps;
