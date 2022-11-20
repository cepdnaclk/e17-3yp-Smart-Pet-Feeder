#include <LiquidCrystal.h>
#include <EEPROM.h> 

// Define stepper motor connections and steps per revolution:
#define dirPin 2
#define stepPin 3
#define ir3 4
#define ir2 5
#define ir1 6
#define reset 8
#define feed 9

#define stepsPerRevolution 1600

const int rs = 14, en = 15, d4 = 16, d5 = 17, d6 = 18, d7 = 19;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);
//LiquidCrystal lcd(19, 23, 18, 17, 16, 15);


int ir_1,ir_2,ir_3;
int next = 1;
int current = -1;
int S1, S2, S3;

void setPosition(){
  Serial.println ("sp");
  if (next == 0){
    S1 = 1;
    S2 = 0;
    S3 = 0;   
  }
  else if (next == 1){
    S1 = 0;
    S2 = 1;
    S3 = 0;   
  } 
  else if (next == 2){
    S1 = 1;
    S2 = 1;
    S3 = 0;   
  } 
  else if (next == 3){
    S1 = 0;
    S2 = 0;
    S3 = 1;   
  } 
  EEPROM.write(16, next);
  next = (next + 1)%4;
  //Serial.println(next);
}

int getPosition()
{
  if((ir_1 == S1)&&(ir_2 == S2)&&(ir_3 == S3)){
    delay(400);
    if((ir_1 == S1)&&(ir_2 == S2)&&(ir_3 == S3)){
      return 1;
    }
  }
  else{
    return 0;
  }
}

void displayNext(){
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("SMART PET FEEDER");
  lcd.setCursor(0, 1);
  if (next == 0){
    lcd.print("Container is empty");    
  }
  else if( next == 1){
    lcd.print("Next Feed : P2");
  }
  else if( next == 2){
    lcd.print("Next Feed : P3");
  }
  else if( next == 3){
    lcd.print("Next Feed : P4");
  }
}


void rotateNext(){
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Fedding ........");
  lcd.setCursor(0, 1);
  setPosition();
    for (int i = 0; i < stepsPerRevolution/4; i++) {
      // These four lines result in 1 step:
      digitalWrite(stepPin, HIGH);
      delayMicroseconds(2000);
      digitalWrite(stepPin, LOW);
      delayMicroseconds(2000);
    }
      ir_1 = digitalRead(ir1);
      ir_2 = digitalRead(ir2);
      ir_3 = digitalRead(ir3);
      delay (100);
      
    
    while(getPosition()==0){
     ir_1 = digitalRead(ir1);
     ir_2 = digitalRead(ir2);
     ir_3 = digitalRead(ir3);
     // These four lines result in 1 step:
     digitalWrite(stepPin, HIGH);
     delayMicroseconds(2000);
     digitalWrite(stepPin, LOW);
     delayMicroseconds(2000);
    }
  lcd.print("Food Served");  
  current = (current+1)%4;
  delay (2000);
  displayNext();

}
void initiate(){
  while(!(ir_1&&ir_2&&ir_3)){
     ir_1 = digitalRead(ir1);
     ir_2 = digitalRead(ir2);
     ir_3 = digitalRead(ir3);
     // These four lines result in 1 step:
     digitalWrite(stepPin, HIGH);
     delayMicroseconds(2000);
     digitalWrite(stepPin, LOW);
     delayMicroseconds(2000);
     Serial.println("in");
  }
  lcd.setCursor(0, 0);
  lcd.print("SMART PET FEEDER");
  lcd.setCursor(0, 1);  
  current = 0;
  lcd.print("Next Feed : P1");
  setPosition();
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
  Serial.begin(9600);
  const String  id = readStringFromEEPROM(0);
  next = EEPROM.read(16);
  lcd.begin(16, 2);
  lcd.print("SMART PET FEEDER");
  delay(1000);
  lcd.setCursor(0, 1);
  lcd.print("Initiating......");
  delay(4000); 
  displayNext();

  // Declare pins as output:
  pinMode(stepPin, OUTPUT);
  pinMode(dirPin, OUTPUT);
  pinMode(ir1, INPUT);
  pinMode(ir2, INPUT);
  pinMode(ir3, INPUT);
  pinMode(reset, INPUT);
  pinMode(feed, INPUT);
  // Set the spinning direction clockwise:
  digitalWrite(dirPin, HIGH);
  delay(1000);
  //initiate();
  
}

void loop() {
  if (digitalRead(reset) == 1){
    initiate();
    delay(2000);
  }
  if (digitalRead(feed) == 1){
    rotateNext();
    delay(2000);
  }
}
