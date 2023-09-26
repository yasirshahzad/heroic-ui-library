export interface StatusEffectProps {
  /**
   * Which type of Player stat should be?
   */
  stats?: 'power' | 'defence' | 'health';
  /**
   *Select the Player Stat level(buffs).
   */
  buffs: number;
}
