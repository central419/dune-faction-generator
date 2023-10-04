import { TreacheryCard } from '../objects/card/treachery';
import dedent from 'ts-dedent';

export const baliset = (
  <TreacheryCard
    head="GREEN"
    title={['Baliset', 1]}
    content={[
      dedent`
        Play as part of your Battle Plan, in place of a weapon, defense, or both.
        This card has no value in play, and you can discard it only by playing it in your Battle Plan.
      `,
      1,
    ]}
    decals={[{ id: 'BALISET' }]}
    icon="WORTHLESS_ASTERIX"
    sub={['Worthless Card', 1]}
    release={undefined}
    recolor={[]}
  />
);

export const maulapistol = (
  <TreacheryCard
    head="BLOOD"
    title={['Maula Pistol', 1]}
    content={[
      dedent`
        Play as part of your Battle Plan.
        Kills opponent's leader before battle is resolved. Opponent may protect leader with a Projectile defense.
        You may keep this card if you win this battle.
      `,
      1,
    ]}
    decals={[{ id: 'MAULAPISTOL' }]}
    icon="WEAPON_PROJECTILE"
    sub={['Weapon - Projectile', 1]}
    release={undefined}
    recolor={[]}
  />
);

export const shield = (
  <TreacheryCard
    head="OCEAN"
    title={['Shield', 1]}
    content={[
      dedent`
        Play as part of your Battle Plan.
        Protects your leader from a projectile weapon in this battle.
        You may keep this card if you win this battle.
      `,
      1,
    ]}
    decals={[{ id: 'SHIELD' }]}
    icon="DEFENCE_SHIELD"
    sub={['Defense - Projectile', 1]}
    release={undefined}
    recolor={[]}
  />
);

export const snooper = (
  <TreacheryCard
    head="OCEAN"
    title={['Snooper', 1]}
    content={[
      dedent`
        Play as part of your Battle Plan.
        Protects your leader from a poison weapon in this battle.
        You may keep this card if you win this battle.
      `,
      1,
    ]}
    decals={[{ id: 'SNOOPER' }]}
    icon="DEFENCE_SNOOPER"
    sub={['Defense - Poison', 1]}
    release={undefined}
    recolor={[]}
  />
);

export const chaumas = (
  <TreacheryCard
    head="BLOOD"
    title={['Chaumas', 1]}
    content={[
      dedent`
        Play as part of your Battle Plan.
        Kills opponent's leader before battle is resolved. Opponent may protect leader with a Poison defense.
        You may keep this card if you win this battle.
      `,
      1,
    ]}
    decals={[{ id: 'CHAUMAS' }]}
    icon="WEAPON_POISON"
    sub={['Weapon - Poison', 1]}
    release={undefined}
    recolor={[]}
  />
);
export const weirdingway = (
  <TreacheryCard
    head="BLOOD"
    title={['Weirding Way', 1]}
    content={[
      dedent`
        Play as part of your Battle Plan.
        Counts as a projectile weapon, unless played with another weapon. In that case, it counts as a projectile defense.
        You may keep this card if you win this battle.
      `,
      1,
    ]}
    decals={[{ id: 'WEIRDING' }]}
    icon="WEAPON_BOLT"
    sub={['Weapon - Defense - Special', 1]}
    release={undefined}
    recolor={[]}
  />
);
export const lasgun = (
  <TreacheryCard
    head="BLOOD"
    title={['Lasgun', 1]}
    content={[
      dedent`
        Play as part of your Battle Plan.
        Automatically kills opponent's leader regardless of defense card used.
        You may keep this card if you win this battle.
        If anyone plays a Shield in this battle, all forces, leaders, and spice in this battle's territory are lost to the Tleilaxu Tanks and Spice Bank. Both players lose this battle, no spice is paid for leaders, and all cards played are discarded.
      `,
      1,
    ]}
    decals={[{ id: 'LASGUN' }]}
    icon="WEAPON_BOLT"
    sub={['Weapon - Special', 1]}
    release={undefined}
    recolor={[]}
  />
);
export const chemistry = (
  <TreacheryCard
    head="OCEAN"
    title={['Chemistry', 1]}
    content={[
      dedent`
        Play as part of your Battle Plan.
        Counts as a poison defense, unless played with another defense. In that case, it counts as a poison weapon.
        You may keep this card if you win this battle.
      `,
      1,
    ]}
    decals={[{ id: 'CHEMISTRY' }]}
    icon="DEFENCE_BOLT"
    sub={['Defense - Weapon - Special', 1]}
    release={undefined}
    recolor={[]}
  />
);
export const karama = (
  <TreacheryCard
    head="MUSH"
    title={['Karama', 1]}
    content={[
      dedent`
        You can play this card in 1 of 3 ways:
        
        - During any phase of the game, you can play this card to cancel/block any **other** faction's ability listed on their faction sheet.
        - During bidding phase, make an infinite bid for a card, take the card without paying.
        - During **your** shipment and movement turn, your shipment cost is reduced to half of normal. Your payment for this shipment goes to the Spice Bank.
      `,
      1,
    ]}
    decals={[]}
    icon="SPECIAL_HAND"
    sub={['Special', 1]}
    release={undefined}
    recolor={[]}
  />
);

export const truthtrance = (
  <TreacheryCard
    head="MUSH"
    title={['Truth Trance', 1]}
    content={[
      dedent`
        Publicly ask one other player a single yes/no question about the game that must be answered publicly. The game pauses until an answer is given.
        The player must answer "yes" or "no" truthfully.
      `,
      1,
    ]}
    decals={[{ id: 'TRUTHTRANCE' }]}
    icon="SPECIAL_HAND"
    sub={['Special', 1]}
    release={undefined}
    recolor={[]}
  />
);
export const cheaphero = (
  <TreacheryCard
    head="MUSH"
    title={['Cheap Hero', 1]}
    content={[
      dedent`
        Play as a leader with zero strength on your Battle Plan and discard after the battle.
        You may also play a weapon and a defense. The cheap hero may be played in place of a leader or when you have no leaders available.
      `,
      1,
    ]}
    decals={[{ id: 'CHEAPHERO' }]}
    icon="SPECIAL_HAND"
    sub={['Special - Leader', 1]}
    release={undefined}
    recolor={[]}
  />
);
export const cheapheroine = (
  <TreacheryCard
    head="MUSH"
    title={['Cheap Heroine', 1]}
    content={[
      dedent`
        Play as a leader with zero strength on your Battle Plan and discard after the battle.
        You may also play a weapon and a defense. The cheap hero may be played in place of a leader or when you have no leaders available.
      `,
      1,
    ]}
    decals={[{ id: 'CHEAPHEROINE' }]}
    icon="SPECIAL_HAND"
    sub={['Special - Leader', 1]}
    release={undefined}
    recolor={[]}
  />
);
export const weathercontrol = (
  <TreacheryCard
    head="MUSH"
    title={['Weather Control', 1]}
    content={[
      dedent`
        After the first game turn, play during the Storm Phase before the Storm Marker is moved.
        When you play this card, you control the storm this phase and may move it from o to 10 sectors in a counterclockwise direction.
      `,
      1,
    ]}
    decals={[{ id: 'WEATHERCONTROL' }]}
    icon="SPECIAL_HAND"
    sub={['Special', 1]}
    release={undefined}
    recolor={[]}
  />
);
export const familyatomics = (
  <TreacheryCard
    head="MUSH"
    title={['Family Atomics', 1]}
    content={[
      dedent`
        After the first game turn, play during the Storm Phase before the Storm Marker is moved.
        When you play this card, you control the storm this phase and may move it from o to 10 sectors in a counterclockwise direction.
      `,
      1,
    ]}
    decals={[{ id: 'FAMILYATOMICS', outline: true }]}
    icon="SPECIAL_HAND"
    sub={['Special', 1]}
    release={undefined}
    recolor={[]}
  />
);
