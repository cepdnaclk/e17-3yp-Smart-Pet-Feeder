#include <EEPROM.h> //include the library

int num = 2;         //Create an empty integer variable

void writeStringToEEPROM(int addrOffset, const String &strToWrite)
{
  byte len = strToWrite.length();
  EEPROM.write(addrOffset, len);
  for (int i = 0; i < len; i++)
  {
    EEPROM.write(addrOffset + 1 + i, strToWrite[i]);
  }
}

String readStringFromEEPROM(int addrOffset)
{
  int newStrLen = EEPROM.read(addrOffset);
  char data[newStrLen + 1];
  for (int i = 0; i < newStrLen; i++)
  {
    data[i] = EEPROM.read(addrOffset + 1 + i);
  }
  data[newStrLen] = '\0'; 
  return String(data);
}


void setup() {
  Serial.begin(9600); 	//Start serial monitor 
  writeStringToEEPROM(0, "PET24581");  
  EEPROM.write(16, num);
}

void loop() {
  // read a byte from the address "0" of the EEPROM
  const String  word = readStringFromEEPROM(0);
  int num = EEPROM.read(16);

  Serial.println(word);	//Print it to the monitor
  Serial.println(num);
  
  delay(500);
}

