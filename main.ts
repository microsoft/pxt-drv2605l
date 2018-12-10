enum DRV2605_MOTORMODE {
    //% block="ERM"
    ERM,
    //% block="LRA"
    LRA
}

enum DRV2605_OPERATION_MODES {

    //% block="Internal Trigger"
    INTERNAL_TRIGGER_MODE = 0x00,

    //% block="External Trigger (edge)"
    EXTERNAL_TRIGGER_MODE_EDGE = 0x01,

    //% block="External Trigger (level)"   
    EXTERNAL_TRIGGER_MODE_LEVEL = 0x02,

    //% block="Analog Input"   
    ANALOG_INPUT_MODE = 0x03,

    //% block="Audio-to-vibe"   
    AUDIO_TO_VIBE = 0x04,

    //% block="Real time playback"   
    REAL_TIME_PLAYBACK = 0x05,

    //% block="Diagnostics"   
    DIAGNOSTICS = 0x06,

    //% block="Calibration"   
    CALIBRATION = 0x07,
}

enum DRV2605_LIBRARIES {

    //% block="ERM Library A"
    ERM_LIBRARY_A = 1,

    //% block="ERM Library B"
    ERM_LIBRARY_B = 2,

    //% block="ERM Library C"
    ERM_LIBRARY_C = 3,

    //% block="ERM Library D"
    ERM_LIBRARY_D = 4,

    //% block="ERM Library E"
    ERM_LIBRARY_E = 5,

    //% block="LRA Library"
    LRA_LIBRARY = 6,

    //% block="ERM Library F"
    ERM_LIBRARY_F = 7,
}

enum DRV2605_EFFECTS {
    //% block="Strong Click (100%)"
    STRONG_CLICK_100 = 1,

    //% block="Strong Click (60%)"
    STRONG_CLICK_60 = 2,

    //% block="Strong Click (30%)"
    STRONG_CLICK_30 = 3,

    //% block="Sharp Click (100%)"
    SHARP_CLICK_100 = 4,

    //% block="Sharp Click (60%)"
    SHARP_CLICK_60 = 5,

    //% block="Sharp Click (30%)"
    SHARP_CLICK_30 = 6,

    //% block="Soft Bump (100%)"
    SOFT_BUMP_100 = 7,

    //% block="Soft Bump (60%)"
    SOFT_BUMP_60 = 8,

    //% block="Soft Bump (30%)"
    SOFT_BUMP_30 = 9,

    //% block="Double Click (100%)"
    DOUBLE_CLICK_100 = 10,

    //% block="Double Click (60%)"
    DOUBLE_CLICK_60 = 11,

    //% block="Triple Click (100%)"
    TRIPLE_CLICK_100 = 12,

    //% block="Soft Fuzz (60%)"
    SOFT_FUZZ_60 = 13,

    //% block="Strong Buzz (100%)"
    STRONG_BUZZ_100 = 14,

    //% block="750ms Alert (100%)"
    ALERT_750MS_100 = 15,

    //% block="1000ms Alert (100%)"
    ALERT_1000MS_100 = 16,

    //% block="Strong Click 1 (100%)"
    STRONG_CLICK_1_100 = 17,

    //% block="Strong Click 2 (80%)"
    STRONG_CLICK_2_80 = 18,

    //% block="Strong Click 3 (60%)"
    STRONG_CLICK_3_60 = 19,

    //% block="Strong Click 4 (30%)"
    STRONG_CLICK_4_30 = 20,

    //% block="Medium Click 1 (100%)"
    MEDIUM_CLICK_1_100 = 21,

    //% block="Medium Click 2 (80%)"        
    MEDIUM_CLICK_2_80 = 22,

    //% block="Medium Click 3 (60%)"                
    MEDIUM_CLICK_3_60 = 23,

    //% block="Sharp Tick 1 (100%)"                        
    SHARP_TICK_1_100 = 24,

    //% block="Sharp Tick 2 (80%)"                        
    SHARP_TICK_2_80 = 25,

    //% block="Sharp Tick 3 (60%)"                        
    SHARP_TICK_3_60 = 26,

    //% block="Short Double Click Strong 1 (100%)"                        
    SHORT_DOUBLE_CLICK_STRONG_1_100 = 27,

    //% block="Short Double Click Strong 2 (80%)"                        
    SHORT_DOUBLE_CLICK_STRONG_2_80 = 28,

    //% block="Short Double Click Strong 3 (60%)"                                
    SHORT_DOUBLE_CLICK_STRONG_3_60 = 29,

    //% block="Short Double Click Strong 4 (30%)"                               
    SHORT_DOUBLE_CLICK_STRONG_4_30 = 30,

    //% block="Short Double Click Medium 1 (100%)"                                       
    SHORT_DOUBLE_CLICK_MEDIUM_1_100 = 31,

    //% block="Short Double Click Medium 2 (80%)"                                       
    SHORT_DOUBLE_CLICK_MEDIUM_1_80 = 32,

    //% block="Short Double Click Medium 2 (60%)"                                       
    SHORT_DOUBLE_CLICK_MEDIUM_1_60 = 33
}


/**
 * A haptic feedback actuator
 */
//% color="#00852B" weight=90 icon="\uf0b2"
namespace drv2605l{

    /* #region Register constants for DRV2605 */

    const DRV2605_ADDR = 0x5A
    const DRV2605_REG_MODE = 0x01
    const DRV2605_REG_LIBRARY = 0x03
    const DRV2605_REG_WAVESEQ1 = 0x04
    const DRV2605_REG_GO = 0x0C
    const DRV2605_REG_FEEDBACK = 0x1A

    /* #endregion */

    /**
    * Set the haptic effect of the DRV2605
    */
    //% block 
    export function setHapticEffect(effect: DRV2605_EFFECTS) {
        writeRegister(DRV2605_ADDR, DRV2605_REG_WAVESEQ1, effect);
    }

    function stopHapticEffect() {
        writeRegister(DRV2605_ADDR, DRV2605_REG_WAVESEQ1+1, 0);
    }

    function go() {
        writeRegister(DRV2605_ADDR, DRV2605_REG_GO, 1);
    }

    function stop() {
        writeRegister(DRV2605_ADDR, DRV2605_REG_GO, 0);
    }


    /**
    * Set the internal libraries of the DRV2605
    */
    //% block 
    export function selectInternalLibrary(lib: DRV2605_LIBRARIES) {
        writeRegister(DRV2605_ADDR, DRV2605_REG_LIBRARY, lib);
    }

    /**
    * Set the internal operating mode of the DRV2605
    */
    //% block   
    export function setOperationMode(mode: DRV2605_OPERATION_MODES) {
        writeRegister(DRV2605_ADDR, DRV2605_REG_MODE, mode);
    }

    /**
    * Set the motor mode (ERM or LRA) of the DRV2605
    */
    //% block
    export function setMotorMode(mode: DRV2605_MOTORMODE) {
        switch (mode) {
            case DRV2605_MOTORMODE.ERM:
                {
                   writeRegister(DRV2605_ADDR, DRV2605_REG_FEEDBACK, readRegister8(DRV2605_ADDR, DRV2605_REG_FEEDBACK) & 0x7F);
                }
            case DRV2605_MOTORMODE.LRA:
                {
                   writeRegister(DRV2605_ADDR, DRV2605_REG_FEEDBACK, readRegister8(DRV2605_ADDR, DRV2605_REG_FEEDBACK) | 0x80);
                }
        }
    }


    /**
     * Setup the DRV2605 haptic sensor with default settings of a Strong Click (100%) effect, 20ms delay and ERM motor
     */
    //% block
    export function setupSensor(): void {

        //Set internal library mode
        selectInternalLibrary(DRV2605_LIBRARIES.ERM_LIBRARY_A);

        //Set internal trigger
        setOperationMode(DRV2605_OPERATION_MODES.INTERNAL_TRIGGER_MODE);

        //Set the haptic effect to a strong click (100%) for 20ms
        setHapticEffect(1);

        //Set the motor mode to ERM
        setMotorMode(DRV2605_MOTORMODE.ERM);
    }


    /**
     * Setup the DRV2605 haptic sensor with different modes than default
     */
    //% block="setup sensor with library mode of %libraryMode, an operation mode of %operationMode, a motor mode of %motorMode and the haptic effect to %hapticEffect"
    //% millis.shadow=timePicker
    export function setupSensorCustom(libraryMode: DRV2605_LIBRARIES, operationMode: DRV2605_OPERATION_MODES, motorMode: DRV2605_MOTORMODE, hapticEffect: DRV2605_EFFECTS) {
        
        selectInternalLibrary(libraryMode);
        setOperationMode(operationMode);
        setHapticEffect(hapticEffect);
        setMotorMode(motorMode);
    }

    /**
     * Play the haptic effect
     */
    //% blockId=drv2605playeffect block="play haptic effect %effect"
    //% millis.shadow=timePicker
    export function playHapticEffect(effect: DRV2605_EFFECTS): void {
        setHapticEffect(effect);
        stopHapticEffect();
        go();
    }
}