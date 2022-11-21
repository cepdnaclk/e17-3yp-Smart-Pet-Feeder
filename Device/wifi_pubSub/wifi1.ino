#include <LiquidCrystal.h>
#include <WiFi.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include "Arduino.h"
#include "uRTCLib.h"
#include <EEPROM.h> //include the library


// uRTCLib rtc;
uRTCLib rtc(0x68);

char daysOfTheWeek[7][12] = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
int count = 0;
////const int stepsPerRevolution = 200;  // change this to fit the number of steps per revolution
// initialize the stepper library on pins 8 through 11:
//Stepper myStepper(stepsPerRevolution, 15, 2, 4, 5);
//uint32_t timeFeede = 0;
//uint32_t current = 0;
//int IR_1 = 36;
//int IR_2 = 39;
//int IR_3 = 34;
String schedule_id = "";

const int feed = 15; 
const int connect = 2;
const int test1 = 13;
const int test2 = 4;


// initialize the library with the numbers of the interface pins
//LiquidCrystal lcd(19, 23, 18, 17, 16, 15);
LiquidCrystal lcd(19, 23, 18, 16, 17, 15);  //Soldered
// Update these with values suitable for your network.
const char* ssid = "AndroidAPD465"; //"SLT-4G_B526A"; //"Eng-Student";
const char* password = "drlv7832"; //"Rathnayaka88aa"; //"3nG5tuDt";
const char* mqtt_server = "test.mosquitto.org";
//test.mosquitto.org

WiFiClient espClient;
PubSubClient client(espClient);
unsigned long lastMsg = 0;
#define MSG_BUFFER_SIZE  (50)
char msg[MSG_BUFFER_SIZE];
int value = 0;
//char brighness[];

void setup_wifi() {
  delay(10);
  // We start by connecting to a WiFi network
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  //WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println("connecting..");
    digitalWrite(connect,LOW);
  }

  randomSeed(micros());

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  char brightness[length];
  for (int i = 0; i < length; i++) {
    brightness[i] = (char)payload[i];
    Serial.print(brightness[i]);

  }


  Serial.print("Len: ");
  Serial.print(length,DEC);

  // DynamicJsonDocument doc(1024);

  // deserializeJson(doc, brightness);
  // JsonObject obj = doc.as<JsonObject>();

  //String id = obj["schedule_id"];
  //Serial.println(id);
  // StaticJsonDocument<256> doc1;
  // deserializeJson(doc1, payload, length);


  // DynamicJsonDocument doc(1024);
  
  
  // String messageTemp;

  // for (int i = 0; i < length; i++) {
  //   Serial.print((char)payload[i]);
  //   messageTemp += (char)payload[i];
  // }
  // Serial.println();

  // deserializeJson(doc, messageTemp);
  // JsonObject obj = doc.as<JsonObject>();

  // Feel free to add more if statements to control more GPIOs with MQTT

  //Serial.println(String(doc1["schedule_id"]));
  //oneTimeToken = String(obj["schedule_id"]);
   // String sharedOneTimeToken = String(obj["date_time"]);
 // Serial.print(oneTimeToken);
 // Serial.print(sharedOneTimeToken);

  
  if(strcmp(topic, "PetFeeder/FeedNow") == 0){

  DynamicJsonDocument doc(1024);

  deserializeJson(doc, brightness);
  JsonObject obj = doc.as<JsonObject>();
  String id = obj["schedule_id"];
  Serial.println(id);
    publishFeed(id);
    Serial.print("Feed Now");    
    //digitalWrite(test2, HIGH);
    digitalWrite(test2,HIGH);
    delay(2000);
    digitalWrite(test2,LOW);     // lcd.clear();
   //   lcd.setCursor(0, 0);
  //    lcd.print("Crowded");
    //  lcd.setCursor(0, 1);
    //  lcd.print("Limit Exceeded");
      
    
  }

  if(strcmp(topic, "PetFeeder/Schedules") == 0){
  char shedule_1[81];
  char shedule_2[81]; 
  char shedule_3[81]; 
  char shedule_4[81];
  DynamicJsonDocument docS1(1024);
  DynamicJsonDocument docS2(1024);
  DynamicJsonDocument docS3(1024);
  DynamicJsonDocument docS4(1024);
  int len = (int)length; 
  String  year  = "",month = "",day = "",hour = "",min = "",sec = "";
  int yr;

  checkFeed();
  if(len >1 ){

    if (len > 80){  
      Serial.println("1 s");
      for (int i = 1; i < 82; i++) {
        
        shedule_1[i-1] = (char)payload[i];
        Serial.print(shedule_1[i-1]);
      }

      year += shedule_1[55];
      year += shedule_1[56];
      year += shedule_1[57];
      year += shedule_1[58];
      month += shedule_1[60];
      month += shedule_1[61];
      day += shedule_1[63];
      day += shedule_1[64];
      hour += shedule_1[66];
      hour += shedule_1[67];
      min += shedule_1[69];
      min += shedule_1[70];
      sec += shedule_1[72];
      sec += shedule_1[73];  
      
      int mn = month.toInt();
      int dy = day.toInt();
      int hr = hour.toInt();
      int mi = min.toInt();

      EEPROM.write(16, mn);
      EEPROM.write(17, dy);
      EEPROM.write(18, hr);
      EEPROM.write(19, mi);
      EEPROM.write(20, 1);
      EEPROM.commit();
      
      Serial.println ("..........");
      
      for (int i = 16; i< 21; i++){
        Serial.println ((int)EEPROM.read(i));      
      }

      Serial.println();
      Serial.print("year :");
      Serial.println(mn);
      Serial.println(dy);
      Serial.println(hr);
      Serial.println(mn);

      deserializeJson(docS1, shedule_1);
      JsonObject obj = docS1.as<JsonObject>();

      String id = obj["schedule_id"];
      Serial.println(id);



      if (len > 160){  
        Serial.println("2 s");
        for (int i = 83; i < 164; i++) {
          
          shedule_2[i-83] = (char)payload[i];
          Serial.print(shedule_2[i-83]);

        }
        String  year1  = "",month1 = "",day1 = "",hour1 = "",min1 = "",sec1 = "";         
  
        year1 += shedule_2[55];
        year1 += shedule_2[56];
        year1 += shedule_2[57];
        year1 += shedule_2[58];
        month1 += shedule_2[60];
        month1 += shedule_2[61];
        day1 += shedule_2[63];
        day1 += shedule_2[64];
        hour1 += shedule_2[66];
        hour1 += shedule_2[67];
        min1 += shedule_2[69];
        min1 += shedule_2[70];
        sec1 += shedule_2[72];
        sec1 += shedule_2[73];  
        
        int mn = month1.toInt();
        int dy = day1.toInt();
        int hr = hour1.toInt();
        int mi = min1.toInt();

        EEPROM.write(21, mn);
        EEPROM.write(22, dy);
        EEPROM.write(23, hr);
        EEPROM.write(24, mi);
        EEPROM.write(25, 1);
        EEPROM.commit();

        Serial.println ("..........");
        
        for (int i = 21; i< 26; i++){
          Serial.println ((int)EEPROM.read(i));      
        }

        deserializeJson(docS2, shedule_2);
        JsonObject obj2 = docS2.as<JsonObject>();

        String id2 = obj2["schedule_id"];
        Serial.println(id2);
        }
    //if(strcmp(topic, "esp32/test/PetFeeder/schedule") == 0){
    //}
     }
    }
  }
}





void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    digitalWrite(connect,LOW);
    Serial.print("Attempting MQTT connection...");
    // Create a random client ID
    String clientId = "ESP8266Client-";
    clientId += String(random(0xffff), HEX); 
    // Attempt to connect
    if (client.connect(clientId.c_str())) {
      Serial.println("connected");
      digitalWrite(connect,HIGH);
      //client.subscribe("esp32/test"); 
      client.subscribe("PetFeeder/Schedules");  
      client.subscribe("PetFeeder/FeedNow"); 
      //client.subscribe("esp32/test/PetFeeder"); 
      //client.subscribe("esp32/test/PetFeeder"); 
      //client.subscribe("326project/smartbuilding/occupancy/0/1/ledred");     

    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }
  
}

void publishFeed(String id){
  String message = "{\"petFeederId\": \"0123456789\",\n\"scheduleId\": \"";
  message += id;
  message += "\",\n\"status\": true\n }";
  
  client.publish("PetFeeder/ScheduleStatus", message.c_str());
  Serial.println(message);
  
  /*
  {
        "petFeederId": "0123456789",
        "scheduleId": "6373a9a55dbe7273e74a14a1",
        "status": true
    }
    */
}
void checkFeed(){

  rtc.refresh();  
  int month = rtc.month();
  int day = rtc.day();
  int hour = rtc.hour();
  int min = rtc.minute();

  if(EEPROM.read(20)){
    if(month == EEPROM.read(16)){
      if(day == EEPROM.read(17)){
        if(hour == EEPROM.read(18)){
          if(min = EEPROM.read(19)){
            digitalWrite(test2,HIGH);
            delay(2000);
            digitalWrite(test2,LOW); 
            EEPROM.write(20, 0);
            EEPROM.commit();                        
          }
        }
      }
    } 
  if(EEPROM.read(25)){
      if(month == EEPROM.read(21)){
        if(day == EEPROM.read(22)){
          if(hour == EEPROM.read(23)){
            if(min = EEPROM.read(24)){
              digitalWrite(test2,HIGH);
              delay(2000);
              digitalWrite(test2,LOW); 
              EEPROM.write(25, 0);
              EEPROM.commit();
            }
          }
        }
      }
    }            
   }
   /*
      Serial.print(rtc.month());
      Serial.print('/');
      Serial.print(rtc.day());

      Serial.print(" (");
      Serial.print(daysOfTheWeek[rtc.dayOfWeek()-1]);
      Serial.print(") ");

      Serial.print(rtc.hour());
      Serial.print(':');
      Serial.print(rtc.minute());
      Serial.print(':');
      Serial.println(rtc.second());

      Serial.print("Temperature: ");
      Serial.print(rtc.temp()  / 100);
      Serial.print("\xC2\xB0");   //shows degrees character
      Serial.println("C");

      Serial.println();
      delay(5000);
      */  
}

void setup() {
  // set the speed at 60 rpm:
 // myStepper.setSpeed(60);
  // initialize the serial port:
  Serial.begin(9600);

  EEPROM.begin(32);

  URTCLIB_WIRE.begin();
  //pinMode(IR_1, INPUT);
 // pinMode(IR_2, INPUT);
 // pinMode(IR_3, INPUT);
  // set up the LCD's number of columns and rows: 
  pinMode(connect, OUTPUT);
  pinMode(feed, OUTPUT);
  pinMode(test1, OUTPUT);
  pinMode(test2, OUTPUT);

  lcd.begin(16, 2);
  // Print a message to the LCD.
  lcd.setCursor(0, 0);
  lcd.print("SMART PET FEEDER");    
  digitalWrite(connect,LOW);
  digitalWrite(feed,LOW);
  digitalWrite(test1,LOW);
  digitalWrite(test2,LOW);

  setup_wifi();
  client.setServer(mqtt_server, 1883); //8883
  client.setCallback(callback);
}

void loop() {

  short reading;
  if (!client.connected()) {
    reconnect();
  }
  client.loop();
 
  count ++;
  if(count >= 120){
    checkFeed();
    count = 0;      
  }

  
  delay(1000);

}
