/**
 * Write register at the address location
 */
function writeRegister(addr: number, reg: number, dat: number): void {
    let _registerBuffer = pins.createBuffer(2);
    _registerBuffer[0] = reg;
    _registerBuffer[1] = dat;
    pins.i2cWriteBuffer(addr, _registerBuffer);
}

/**
 * Read a 8-byte register of the address location
 */
function readRegister8(addr: number, reg: number): number {
    pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
    return pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
}

/**
 * Read a 16-byte register of the address location
 */
function readRegister16(addr: number, reg: number): number {
    pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
    return pins.i2cReadNumber(addr, NumberFormat.UInt16LE);
}