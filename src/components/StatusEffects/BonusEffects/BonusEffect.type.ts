export interface BonusEffectProps {
  /**
   * Which type of Bonus Effect should be?
   */
  BonusType: 'up' | 'down' | 'time';
  /**
   * Bonus level(buffs).
   */
  BonusText?: 'Size' | 'Time';
}
