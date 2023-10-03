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
    decals={[{ id: 'LASGUN' }]}
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
    decals={[{ id: 'CHAUMURKY' }]}
    icon="DEFENCE_BOLT"
    sub={['Defense - Weapon - Special', 1]}
    release={undefined}
    recolor={[]}
  />
);
