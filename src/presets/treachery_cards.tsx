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

export const maula_pistol = (
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
    decals={[{ id: 'MAULA_PISTOL' }]}
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
    icon="DEFENSE_SHIELD"
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
    icon="DEFENSE_SNOOPER"
    sub={['Defense - Poison', 1]}
    release={undefined}
    recolor={[]}
  />
);

export const ernok = (
  <TreacheryCard
    head="BLOOD"
    title={['Supplies! Ernok Seed', 1]}
    content={[
      dedent`
        Play as part of your Battle Plan.
        Kills opponent's leader before battle is resolved. Opponent may protect leader with a Poison defense.
        You may keep this card if you win this battle.
        Return this card to the Supplies! cache when it is lost, or at the end of the Battle phase
      `,
      1,
    ]}
    decals={[{ id: 'ZENOBIA' }]}
    icon="WEAPON_POISON"
    sub={['Weapon - Poison', 1]}
    release={'HOMEBREW'}
    recolor={[]}
  />
);
export const trishula = (
  <TreacheryCard
    head="BLOOD"
    title={['Supplies! Trishula', 1]}
    content={[
      dedent`
        Play as part of your Battle Plan.
        Kills opponent's leader before battle is resolved. Opponent may protect leader with a Projectile defense.
        You may keep this card if you win this battle.
        Return this card to the Supplies! cache when it is lost, or at the end of the Battle phase
      `,
      1,
    ]}
    decals={[{ id: 'TRISPEAR' }]}
    icon="WEAPON_PROJECTILE"
    sub={['Weapon - Projectile', 1]}
    release={'HOMEBREW'}
    recolor={[]}
  />
);
export const phrine_pen = (
  <TreacheryCard
    head="OCEAN"
    title={['Supplies! Phrine Pen', 1]}
    content={[
      dedent`
        Play as part of your Battle Plan.
        Protects your leader from a poison weapon in this battle.
        You may keep this card if you win this battle.
        Return this card to the Supplies! cache when it is lost, or at the end of the Battle phase.
      `,
      1,
    ]}
    decals={[{ id: 'PORTABLE_SNOOPER' }]}
    icon="DEFENSE_SNOOPER"
    sub={['Defense - Poison', 1]}
    release={'HOMEBREW'}
    recolor={[]}
  />
);
export const sup_shield = (
  <TreacheryCard
    head="OCEAN"
    title={['Supplies! Shield', 0.9]}
    content={[
      dedent`
        Play as part of your Battle Plan.
        Protects your leader from a projectile weapon in this battle.
        You may keep this card if you win this battle.
        Return this card to the Supplies! cache when it is lost, or at the end of the Battle phase
      `,
      1,
    ]}
    decals={[{ id: 'TARGET' }]}
    icon="DEFENSE_SHIELD"
    sub={['Defense - Projectile', 1]}
    release={'HOMEBREW'}
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
export const weirding_way = (
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
    icon="DEFENSE_BOLT"
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

export const truth_trance = (
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
    decals={[{ id: 'TRUTH_TRANCE' }]}
    icon="SPECIAL_HAND"
    sub={['Special', 1]}
    release={undefined}
    recolor={[]}
  />
);
export const cheap_hero = (
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
    decals={[{ id: 'CHEAP_HERO' }]}
    icon="SPECIAL_HAND"
    sub={['Special - Leader', 1]}
    release={undefined}
    recolor={[]}
  />
);
export const cheap_heroine = (
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
    decals={[{ id: 'CHEAP_HEROINE' }]}
    icon="SPECIAL_HAND"
    sub={['Special - Leader', 1]}
    release={undefined}
    recolor={[]}
  />
);
export const weather_control = (
  <TreacheryCard
    head="MUSH"
    title={['Weather Control', 1]}
    content={[
      dedent`
        After the first game turn, play during the Storm phase before the Storm Marker is moved.
        When you play this card, you control the storm this phase and may move it from o to 10 sectors in a counterclockwise direction.
      `,
      1,
    ]}
    decals={[{ id: 'WEATHER_CONTROL' }]}
    icon="SPECIAL_HAND"
    sub={['Special', 1]}
    release={undefined}
    recolor={[]}
  />
);
export const family_atomics = (
  <TreacheryCard
    head="MUSH"
    title={['Family Atomics', 1]}
    content={[
      dedent`
        After the first game turn, play during the Storm phase before the Storm Marker is moved.
        When you play this card, you control the storm this phase and may move it from o to 10 sectors in a counterclockwise direction.
      `,
      1,
    ]}
    decals={[{ id: 'FAMILY_ATOMICS', outline: true }]}
    icon="SPECIAL_HAND"
    sub={['Special', 1]}
    release={undefined}
    recolor={[]}
  />
);
export const mercenaries = (
  <TreacheryCard
    head="MUSH"
    title={['Mercenaries', 1]}
    content={[
      dedent`
        Play in your Battle Plan besides weapons or DEFENSEs. You may play only 1 Mercenaries per Battle Plan.
        Add +1 to your number dialed and win ties regardless of Storm Order.
        You may keep this card if you win the battle.
      `,
      1,
    ]}
    decals={[{ id: 'MERCENARIES', outline: true }]}
    icon="SPECIAL_HAND"
    sub={['Special', 1]}
    release={'HOMEBREW'}
    recolor={[]}
  />
);
export const supplies = (
  <TreacheryCard
    head="MUSH"
    title={['Supplies!', 1]}
    content={[
      dedent`
        Play any time.
        Until the end of his Battle phase, you get the Supplies! tokens.
        These may be used as treachery cards of corresponding types.
      `,
      1,
    ]}
    decals={[{ id: 'SUPPLIES', outline: true }]}
    icon="SPECIAL_HAND"
    sub={['Special', 1]}
    release={'HOMEBREW'}
    recolor={[]}
  />
);
