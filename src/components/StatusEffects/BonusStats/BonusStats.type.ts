export interface BonusStatsProps {
  /**
   * Which type of Bonus Effect should be?
   */
  bonusType: 'up' | 'down' | 'time';
  /**
   * Bonus level(buffs).
   */
  bonusText?: string;
}
