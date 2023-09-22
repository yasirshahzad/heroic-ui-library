export interface VehicleStatProps {
  /**
   * Which type of Vehicle stat should be?
   */
  VehicleStat: 'speed' | 'handling' | 'weight';
  /**
   * Vehicle stat level(buffs).
   */
  vehicleBuffs: number;
}
