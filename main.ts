//% weight=0 color=#3CB371 icon="\uf0ad" block="Microbitnodemcu"
namespace microbitnodemcu {
      export enum analogpin {
        A0 = 0
     }
     
      export enum digitalpin {
        D0 = 16,
        D1 = 5,
        D2 = 4,
        D3 = 0,
        D4 = 2,
        D5 = 14,
        D6 = 12,
        D7 = 13,
        D8 = 15
     }
      export enum type {
        INPUT = 2,
        OUTPUT = 1
     }
     export enum value {
        HIGH = 1,
        LOW = 0
     }

    //% blockId=setpinmode1 block="set nodemcu digital pin %pin | for %XY"
    //% weight=102
    export function setpinmode1(pin: digitalpin, XY: type):void {
       serial.writeLine("pinMode="+pin.toString()+","+XY.toString()+"\\n")    
    }
     
     
    //% blockId=setdigital1 block="set nodemcu digital pin  %pin | value to %XY"
    //% weight=101
    export function setdigital1(pin: digitalpin, XY: value):void {
        serial.writeLine("digitalWrite="+pin.toString()+","+XY.toString()+"\\n")    
    }
     
    //% blockId=setdigital2 block="set nodemcu digital pin  %pin | PWM value to %XY"
    //% weight=101
    export function setdigital2(pin: digitalpin, XY: number):void {
        serial.writeLine("analogWrite="+pin.toString()+","+XY.toString()+"\\n")    
    }
 
    //% blockId=setdigital3 block="read nodemcu digital pin  %pin value"
    //% weight=101
    export function setdigital3(pin: digitalpin):string {
        serial.writeLine("digitalRead="+pin.toString()+"\\n")
        basic.pause(10)
        let a=serial.readString()
        return a;
    }
    //% blockId=setdigital4 block="read nodemcu analog pin  %pin value"
    //% weight=101 
    export function setdigital4(pin: analogpin):string {
        serial.writeLine("analogRead="+pin.toString()+"\\n")
        basic.pause(10)
        let a=serial.readString()
        return a
    }   
    //% blockId=thingspeak block="thingspeak  %key | field1 value %value1 | field2 value %value2 | field3 value %value3 | field4 value %value4"
    //% weight=101 value=10  key=key
    export function thingspeak(key: string,value1: string,value2: string,value3: string,value4: string) {
        serial.writeString("t="+key+","+value1+","+value2+","+value3+","+value4+"\\n")
    }
}
