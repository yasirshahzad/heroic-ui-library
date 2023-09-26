export interface VehicleStatProps {
    /**
     * Which type of Vehicle stat should be?
     */
    vehicleStat: 'speed' | 'handling' | 'weight';
    /**
     * Vehicle stat level(buffs).
     */
    vehicleBuffs: number;
}
