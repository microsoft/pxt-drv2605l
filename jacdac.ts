namespace jacdac {
    //% fixedInstances
    export class DRV2605L extends ActuatorService {
        constructor(name: string) {
            super(name, 300, 5);
        }

        protected handleStateChanged(): boolean {
            let effect = this.state.getNumber(NumberFormat.UInt8LE, 0);
            let duration = this.state.getNumber(NumberFormat.UInt32LE, 1);

            if (duration > 0) {
                this.log(`playing ${effect}`)
                drv2605l.playHapticEffect(effect);
            }
            return true;
        }
    }

    //% fixedInstance whenUsed
    export const drv2605lService = new DRV2605L("haptic");
}