enum Drv2605Effect {
    Vibrate
}

/**
 * 
 */
namespace drv2605 {

    /* #region Register constants for DRV2605 */

    const DRV2605_ADDR = 0x5A

    const DRV2605_REG_STATUS = 0x00
    const DRV2605_REG_MODE = 0x01
    const DRV2605_MODE_INTTRIG = 0x00
    const DRV2605_MODE_EXTTRIGEDGE = 0x01
    const DRV2605_MODE_EXTTRIGLVL = 0x02
    const DRV2605_MODE_PWMANALOG = 0x03
    const DRV2605_MODE_AUDIOVIBE = 0x04
    const DRV2605_MODE_REALTIME = 0x05
    const DRV2605_MODE_DIAGNOS = 0x06
    const DRV2605_MODE_AUTOCAL = 0x07

    const DRV2605_REG_RTPIN = 0x02
    const DRV2605_REG_LIBRARY = 0x03
    const DRV2605_REG_WAVESEQ1 = 0x04
    const DRV2605_REG_WAVESEQ2 = 0x05
    const DRV2605_REG_WAVESEQ3 = 0x06
    const DRV2605_REG_WAVESEQ4 = 0x07
    const DRV2605_REG_WAVESEQ5 = 0x08
    const DRV2605_REG_WAVESEQ6 = 0x09
    const DRV2605_REG_WAVESEQ7 = 0x0A
    const DRV2605_REG_WAVESEQ8 = 0x0B

    const DRV2605_REG_GO = 0x0C
    const DRV2605_REG_OVERDRIVE = 0x0D
    const DRV2605_REG_SUSTAINPOS = 0x0E
    const DRV2605_REG_SUSTAINNEG = 0x0F
    const DRV2605_REG_BREAK = 0x10
    const DRV2605_REG_AUDIOCTRL = 0x11
    const DRV2605_REG_AUDIOLVL = 0x12
    const DRV2605_REG_AUDIOMAX = 0x13
    const DRV2605_REG_RATEDV = 0x16
    const DRV2605_REG_CLAMPV = 0x17
    const DRV2605_REG_AUTOCALCOMP = 0x18
    const DRV2605_REG_AUTOCALEMP = 0x19
    const DRV2605_REG_FEEDBACK = 0x1A
    const DRV2605_REG_CONTROL1 = 0x1B
    const DRV2605_REG_CONTROL2 = 0x1C
    const DRV2605_REG_CONTROL3 = 0x1D
    const DRV2605_REG_CONTROL4 = 0x1E
    const DRV2605_REG_VBAT = 0x21
    const DRV2605_REG_LRARESON = 0x22

    /* #endregion */

    /* #region General Set/Get Register Functions */

    /**
     * Set registers of the DRV2605
     */
    function setRegister(reg: number, dat: number): void {
    let _wbuf = control.createBuffer(2);
        _wbuf[0] = reg;
        _wbuf[1] = dat;
        pins.i2cWriteBuffer(DRV2605_ADDR, _wbuf);
    }

    /**
     * Get a single register of the DRV2605
     */
    function getOneRegister(reg: number): number {
        pins.i2cWriteNumber(DRV2605_ADDR, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(DRV2605_ADDR, NumberFormat.UInt8BE);
    }

    /**
     * Get two registers of the DRV2605, in UInt16LE format
     */
    function getTwoRegister(reg: number): number {
        pins.i2cWriteNumber(DRV2605_ADDR, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(DRV2605_ADDR, NumberFormat.UInt16LE);
    }

    /* #endregion */

    export function setWaveform(slot: number, w: number) {
        setRegister(DRV2605_REG_WAVESEQ1 + slot, w);
    }

    export function selectLibrary(lib: number) {
        setRegister(DRV2605_REG_LIBRARY, lib);
    }

    export function go() {
        setRegister(DRV2605_REG_GO, 1);
    }

    export function stop() {
        setRegister(DRV2605_REG_GO, 0);
    }

    export function setMode(mode: number) {
        setRegister(DRV2605_REG_MODE, mode);
    }

    export function setRealtimeValue(rtp: number) {
        setRegister(DRV2605_REG_RTPIN, rtp);
    }

    export function useERM() {
        setRegister(DRV2605_REG_FEEDBACK, getOneRegister(DRV2605_REG_FEEDBACK) & 0x7F);
    }

    export function useLRA() {
        setRegister(DRV2605_REG_FEEDBACK, getOneRegister(DRV2605_REG_FEEDBACK) | 0x80);
    }

    export function begin(): void {

        setRegister(DRV2605_REG_MODE, 0x00);


        setRegister(DRV2605_REG_RTPIN, 0x00); // no real-time-playback

        setRegister(DRV2605_REG_WAVESEQ1, 1); // strong click
        setRegister(DRV2605_REG_WAVESEQ2, 0);

        setRegister(DRV2605_REG_OVERDRIVE, 0); // no overdrive

        setRegister(DRV2605_REG_SUSTAINPOS, 0);
        setRegister(DRV2605_REG_SUSTAINNEG, 0);
        setRegister(DRV2605_REG_BREAK, 0);
        setRegister(DRV2605_REG_AUDIOMAX, 0x64);

        // ERM open loop

        // turn off N_ERM_LRA
        setRegister(DRV2605_REG_FEEDBACK, getOneRegister(DRV2605_REG_FEEDBACK) & 0x7F);
        // turn on ERM_OPEN_LOOP
        setRegister(DRV2605_REG_CONTROL3, getOneRegister(DRV2605_REG_CONTROL3) | 0x20);

    }


    /**
     * Play the effect for the given amount of time
     */
    //% blockId=drv2605playeffect block="play %effect for %millis"
    export function playEffect(effect: Drv2605Effect, millis: number): void {

    }

}
