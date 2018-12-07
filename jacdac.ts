namespace jacdac {
    export class DRV2605L extends ActuatorHostDriver {
        constructor(name: string) {
            super(name, 300, 5);
        }

        protected handleStateChanged(): boolean {
            let effect = this.state.getNumber(NumberFormat.UInt8LE, 0);
            let duration = this.state.getNumber(NumberFormat.UInt32LE, 1);

            if (duration > 0) {
                this.log(`playing ${effect} for ${duration}ms`)
                drv2605.playEffect(effect, duration);
            }
            return true;
        }
    }
}