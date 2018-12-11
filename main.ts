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
    SHORT_DOUBLE_CLICK_MEDIUM_2_80 = 32,

    //% block="Short Double Click Medium 3 (60%)"                                       
    SHORT_DOUBLE_CLICK_MEDIUM_3_60 = 33,


    //% block="Short Double Sharp Tick 1 (100%)"                                               
    SHORT_DOUBLE_SHARP_TICK_1_100 = 34,

    //% block="Short Double Sharp Tick 2 (80%)"                                               
    SHORT_DOUBLE_SHARP_TICK_2_80 = 35,

    //% block="Short Double Sharp Tick 3 (60%)"                                               
    SHORT_DOUBLE_SHARP_TICK_3_60 = 36,

    //% block="Long Double Sharp Click Strong 1 (100%)"                        
    LONG_DOUBLE_SHARP_CLICK_STRONG_1_100 = 37,

    //% block="Long Double Sharp Click Strong 2 (80%)"                        
    LONG_DOUBLE_SHARP_CLICK_STRONG_2_80 = 38,

    //% block="Long Double Sharp Click Strong 3 (60%)"                        
    LONG_DOUBLE_SHARP_CLICK_STRONG_3_60 = 39,

    //% block="Long Double Sharp Click Strong 4 (30%)"                        
    LONG_DOUBLE_SHARP_CLICK_STRONG_4_30 = 40,

    //% block="Long Double Sharp Click Medium 1 (100%)"                        
    LONG_DOUBLE_SHARP_CLICK_MEDIUM_1_100 = 41,

    //% block="Long Double Sharp Click Medium 2 (80%)"                        
    LONG_DOUBLE_SHARP_CLICK_MEDIUM_2_80 = 42,

    //% block="Long Double Sharp Click Medium 3 (60%)"                        
    LONG_DOUBLE_SHARP_CLICK_MEDIUM_3_60 = 43,

    //% block="Long Double Sharp Tick 1 (100%)"                                               
    LONG_DOUBLE_SHARP_TICK_1_100 = 44,

    //% block="Long Double Sharp Tick 2 (80%)"                                               
    LONG_DOUBLE_SHARP_TICK_2_80 = 45,

    //% block="Long Double Sharp Tick 3 (60%)"                                               
    LONG_DOUBLE_SHARP_TICK_3_60 = 46,

    //% block="Buzz 1 (100%)"                                               
    BUZZ_1_100 = 47,

    //% block="Buzz 2 (80%)"                                               
    BUZZ_2_80 = 48,

    //% block="Buzz 3 (60%)"                                               
    BUZZ_3_60 = 49,

    //% block="Buzz 4 (40%)"                                               
    BUZZ_4_40 = 50,

    //% block="Buzz 5 (20%)"                                               
    BUZZ_5_20 = 51,

    //% block="Pulsing Strong 1 (100%)"                                               
    PULSING_STRONG_1_100 = 52,

    //% block="Pulsing Strong 2 (60%)"                                               
    PULSING_STRONG_2_60 = 53,

    //% block="Pulsing Medium 1 (100%)"                                               
    PULSING_MEDIUM_1_100 = 54,

    //% block="Pulsing Medium 2 (60%)"                                               
    PULSING_MEDIUM_2_60 = 55,

    //% block="Pulsing Sharp 1 (100%)"                                               
    PULSING_SHARP_1_100 = 56,

    //% block="Pulsing Sharp 2 (60%)"                                               
    PULSING_SHARP_2_60 = 57,

    //% block="Transition Click 1 (100%)"                                               
    TRANSITION_CLICK_1_100 = 58,

    //% block="Transition Click 2 (80%)"                                               
    TRANSITION_CLICK_2_80 = 59,

    //% block="Transition Click 3 (60%)"                                               
    TRANSITION_CLICK_3_60 = 60,

    //% block="Transition Click 4 (40%)"                                               
    TRANSITION_CLICK_4_40 = 61,

    //% block="Transition Click 5 (20%)"                                               
    TRANSITION_CLICK_5_20 = 62,

    //% block="Transition Click 6 (10%)"                                               
    TRANSITION_CLICK_6_10 = 63,

    //% block="Transition Hum 1 (100%)"                                               
    TRANSITION_HUM_1_100 = 64,

    //% block="Transition Hum 2 (80%)"                                               
    TRANSITION_HUM_2_80 = 65,

    //% block="Transition Hum 3 (60%)"                                               
    TRANSITION_HUM_3_60 = 66,

    //% block="Transition Hum 4 (40%)"                                               
    TRANSITION_HUM_4_40 = 67,

    //% block="Transition Hum 5 (20%)"                                               
    TRANSITION_HUM_5_20 = 68,

    //% block="Transition Hum 6 (10%)"                                               
    TRANSITION_HUM_6_10 = 69,

    //% block="Transition Ramp Down Long Smooth 1 (100 to 0%)"                                               
    TRANSITION_RAMP_DOWN_LONG_SMOOTH_1_100_TO_0 = 70,

    //% block="Transition Ramp Down Long Smooth 2 (100 to 0%)"                                               
    TRANSITION_RAMP_DOWN_LONG_SMOOTH_2_100_TO_0 = 71,

    //% block="Transition Ramp Down Medium Smooth 1 (100 to 0%)"                                               
    TRANSITION_RAMP_DOWN_MEDIUM_SMOOTH_1_100_TO_0 = 72,

    //% block="Transition Ramp Down Medium Smooth 2 (100 to 0%)"                                               
    TRANSITION_RAMP_DOWN_MEDIUM_SMOOTH_2_100_TO_0 = 73,

    //% block="Transition Ramp Down Short Smooth 1 (100 to 0%)"                                               
    TRANSITION_RAMP_DOWN_SHORT_SMOOTH_1_100_TO_0 = 74,

    //% block="Transition Ramp Down Short Smooth 2 (100 to 0%)"                                               
    TRANSITION_RAMP_DOWN_SHORT_SMOOTH_2_100_TO_0 = 75,

    //% block="Transition Ramp Down Long Sharp 1 (100 to 0%)"                                               
    TRANSITION_RAMP_DOWN_LONG_SHARP_1_100_TO_0 = 76,

    //% block="Transition Ramp Down Long Sharp 2 (100 to 0%)"                                               
    TRANSITION_RAMP_DOWN_LONG_SHARP_2_100_TO_0 = 77,

    //% block="Transition Ramp Down Medium Sharp 1 (100 to 0%)"                                               
    TRANSITION_RAMP_DOWN_MEDIUM_SHARP_1_100_TO_0 = 78,

    //% block="Transition Ramp Down Medium Sharp 2 (100 to 0%)"                                               
    TRANSITION_RAMP_DOWN_MEDIUM_SHARP_2_100_TO_0 = 79,

    //% block="Transition Ramp Down Short Sharp 1 (100 to 0%)"                                               
    TRANSITION_RAMP_DOWN_SHORT_SHARP_1_100_TO_0 = 80,

    //% block="Transition Ramp Down Short Sharp 2 (100 to 0%)"                                               
    TRANSITION_RAMP_DOWN_SHORT_SHARP_2_100_TO_0 = 81,

    //% block="Transition Ramp Up Long Smooth 1 (0 TO 100%)"                                               
    TRANSITION_RAMP_UP_LONG_SMOOTH_1_0_TO_100 = 82,

    //% block="Transition Ramp Up Long Smooth 2 (0 TO 100%)"                                               
    TRANSITION_RAMP_UP_LONG_SMOOTH_2_0_TO_100 = 83,

    //% block="Transition Ramp Up Medium Smooth 1 (0 TO 100%)"                                               
    TRANSITION_RAMP_UP_MEDIUM_SMOOTH_1_0_TO_100 = 84,

    //% block="Transition Ramp Up Medium Smooth 2 (0 TO 100%)"                                               
    TRANSITION_RAMP_UP_MEDIUM_SMOOTH_2_0_TO_100 = 85,

    //% block="Transition Ramp Up Short Smooth 1 (0 TO 100%)"                                               
    TRANSITION_RAMP_UP_SHORT_SMOOTH_1_0_TO_100 = 86,

    //% block="Transition Ramp Up Short Smooth 2 (0 TO 100%)"                                               
    TRANSITION_RAMP_UP_SHORT_SMOOTH_2_0_TO_100 = 87,

    //% block="Transition Ramp Up Long Sharp 1 (0 TO 100%)"                                               
    TRANSITION_RAMP_UP_LONG_SHARP_1_0_TO_100 = 88,

    //% block="Transition Ramp Up Long Sharp 2 (0 TO 100%)"                                               
    TRANSITION_RAMP_UP_LONG_SHARP_2_0_TO_100 = 89,

    //% block="Transition Ramp Up Medium Sharp 1 (0 TO 100%)"                                               
    TRANSITION_RAMP_UP_MEDIUM_SHARP_1_0_TO_100 = 90,

    //% block="Transition Ramp Up Medium Sharp 2 (0 TO 100%)"                                               
    TRANSITION_RAMP_UP_MEDIUM_SHARP_2_0_TO_100 = 91,

    //% block="Transition Ramp Up Short Sharp 1 (0 TO 100%)"                                               
    TRANSITION_RAMP_UP_SHORT_SHARP_1_0_TO_100 = 92,

    //% block="Transition Ramp Up Short Sharp 2 (0 TO 100%)"                                               
    TRANSITION_RAMP_UP_SHORT_SHARP_2_0_TO_100 = 93,

    //% block="Transition Ramp Down Long Smooth 1 (50 to 0%)"                                               
    TRANSITION_RAMP_DOWN_LONG_SMOOTH_1_50_TO_0 = 94,

    //% block="Transition Ramp Down Long Smooth 2 (50 to 0%)"                                               
    TRANSITION_RAMP_DOWN_LONG_SMOOTH_2_50_TO_0 = 95,

    //% block="Transition Ramp Down Medium Smooth 1 (50 to 0%)"                                               
    TRANSITION_RAMP_DOWN_MEDIUM_SMOOTH_1_50_TO_0 = 96,

    //% block="Transition Ramp Down Medium Smooth 2 (50 to 0%)"                                               
    TRANSITION_RAMP_DOWN_MEDIUM_SMOOTH_2_50_TO_0 = 97,

    //% block="Transition Ramp Down Short Smooth 1 (50 to 0%)"                                               
    TRANSITION_RAMP_DOWN_SHORT_SMOOTH_1_50_TO_0 = 98,

    //% block="Transition Ramp Down Short Smooth 2 (50 to 0%)"                                               
    TRANSITION_RAMP_DOWN_SHORT_SMOOTH_2_50_TO_0 = 99,

    //% block="Transition Ramp Down Long Sharp 1 (50 to 0%)"                                               
    TRANSITION_RAMP_DOWN_LONG_SHARP_1_50_TO_0 = 100,

    //% block="Transition Ramp Down Long Sharp 2 (50 to 0%)"                                               
    TRANSITION_RAMP_DOWN_LONG_SHARP_2_50_TO_0 = 101,

    //% block="Transition Ramp Down Medium Sharp 1 (50 to 0%)"                                               
    TRANSITION_RAMP_DOWN_MEDIUM_SHARP_1_50_TO_0 = 102,

    //% block="Transition Ramp Down Medium Sharp 2 (50 to 0%)"                                               
    TRANSITION_RAMP_DOWN_MEDIUM_SHARP_2_50_TO_0 = 103,

    //% block="Transition Ramp Down Short Sharp 1 (50 to 0%)"                                               
    TRANSITION_RAMP_DOWN_SHORT_SHARP_1_50_TO_0 = 104,

    //% block="Transition Ramp Down Short Sharp 2 (50 to 0%)"                                               
    TRANSITION_RAMP_DOWN_SHORT_SHARP_2_50_TO_0 = 105,

    //% block="Transition Ramp Up Long Smooth 1 (0 to 50%)"                                               
    TRANSITION_RAMP_UP_LONG_SMOOTH_1_0_TO_50 = 106,

    //% block="Transition Ramp Up Long Smooth 2 (0 to 50%)"                                               
    TRANSITION_RAMP_UP_LONG_SMOOTH_2_0_TO_50 = 107,

    //% block="Transition Ramp Up Medium Smooth 1 (0 to 50%)"                                               
    TRANSITION_RAMP_UP_MEDIUM_SMOOTH_1_0_TO_50 = 108,

    //% block="Transition Ramp Up Medium Smooth 2 (0 to 50%)"                                               
    TRANSITION_RAMP_UP_MEDIUM_SMOOTH_2_0_TO_50 = 109,

    //% block="Transition Ramp Up Short Smooth 1 (0 to 50%)"                                               
    TRANSITION_RAMP_UP_SHORT_SMOOTH_1_0_TO_50 = 110,

    //% block="Transition Ramp Up Short Smooth 2 (0 to 50%)"                                               
    TRANSITION_RAMP_UP_SHORT_SMOOTH_2_0_TO_50 = 111,

    //% block="Transition Ramp Up Long Sharp 1 (0 to 50%)"                                               
    TRANSITION_RAMP_UP_LONG_SHARP_1_0_TO_50 = 112,

    //% block="Transition Ramp Up Long Sharp 2 (0 to 50%)"                                               
    TRANSITION_RAMP_UP_LONG_SHARP_2_0_TO_50 = 113,

    //% block="Transition Ramp Up Medium Sharp 1 (0 to 50%)"                                               
    TRANSITION_RAMP_UP_MEDIUM_SHARP_1_0_TO_50 = 114,

    //% block="Transition Ramp Up Medium Sharp 2 (0 to 50%)"                                               
    TRANSITION_RAMP_UP_MEDIUM_SHARP_2_0_TO_50 = 115,

    //% block="Transition Ramp Up Short Sharp 1 (0 to 50%)"                                               
    TRANSITION_RAMP_UP_SHORT_SHARP_1_0_TO_50 = 116,

    //% block="Transition Ramp Up Short Sharp 2 (0 to 50%)"                                               
    TRANSITION_RAMP_UP_SHORT_SHARP_2_0_TO_50 = 117,

    //% block="Long Buzz 100% (Programmatic Stopping)"                                               
    LONG_BUZZ_PROGRAMMATIC_STOPPING_100 = 118,

    //% block="Smooth Hum 1 (50%)"                                               
    SMOOTH_HUM_1_50 = 119,

    //% block="Smooth Hum 2 (40%)"                                               
    SMOOTH_HUM_1_40 = 120,

    //% block="Smooth Hum 3 (30%)"                                               
    SMOOTH_HUM_1_30 = 121,

    //% block="Smooth Hum 4 (20%)"                                               
    SMOOTH_HUM_1_20 = 122,

    //% block="Smooth Hum 5 (10%)"                                               
    SMOOTH_HUM_1_10 = 123
}


/**
 * A haptic feedback actuator
 */
//% color="#00852B" weight=90 icon="\uf0b2"
//% groups='["Effects","Configuration"]'
namespace drv2605l {

    /* #region Register constants for DRV2605 */

    const DRV2605_ADDR = 0x5A
    const DRV2605_REG_MODE = 0x01
    const DRV2605_REG_LIBRARY = 0x03
    const DRV2605_REG_WAVESEQ1 = 0x04
    const DRV2605_REG_GO = 0x0C
    const DRV2605_REG_FEEDBACK = 0x1A

    function setHapticEffect(effect: DRV2605_EFFECTS) {
        writeRegister(DRV2605_ADDR, DRV2605_REG_WAVESEQ1, effect);
    }

    function stopHapticEffect() {
        writeRegister(DRV2605_ADDR, DRV2605_REG_WAVESEQ1 + 1, 0);
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
        if (_internalLibrary != lib) {
            _internalLibrary = lib;
            _needsSetup = true;
        }
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
    //% group="Configuration"
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

    let _internalLibrary: DRV2605_LIBRARIES = DRV2605_LIBRARIES.ERM_LIBRARY_A;
    let _needsSetup = true;

    /**
     * Setup the DRV2605 haptic sensor with default settings of a Strong Click (100%) effect, 20ms delay and ERM motor
     */
    //% block
    function setupSensor(): void {
        if (!_needsSetup) return;
        _needsSetup = false;

        //Set internal library mode
        writeRegister(DRV2605_ADDR, DRV2605_REG_LIBRARY, _internalLibrary);

        //Set internal trigger
        setOperationMode(DRV2605_OPERATION_MODES.INTERNAL_TRIGGER_MODE);

        //Set the haptic effect to a strong click (100%) for 20ms
        setHapticEffect(1);

        //Set the motor mode to ERM
        setMotorMode(DRV2605_MOTORMODE.ERM);
    }

    /**
     * Play the haptic effect
     */
    //% blockId=drv2605playeffect block="play haptic effect %effect"
    //% millis.shadow=timePicker
    //% group="Effects"
    export function playHapticEffect(effect: DRV2605_EFFECTS): void {
        setupSensor();
        setHapticEffect(effect);
        stopHapticEffect();
        go();
    }
}