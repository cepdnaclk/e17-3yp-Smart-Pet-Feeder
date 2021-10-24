package Software_Testing;

import static org.junit.Assert.assertTrue;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.JavascriptExecutor; 

public class AppTest 
{
 
    @Test
    public void shouldAnswerWithTrue()
    {
    	System.setProperty("webdriver.chrome.driver", "C:\\Users\\A\\Downloads\\Chromedriver\\81\\chromedriver.exe");
    	
        WebDriver driver = new ChromeDriver(); //New chrome driver
        
        //Maxmize the tab
        driver.manage().window().maximize();
        
        //Go to the Websie Homepage
        driver.get("https://smart-pet-feeder-frontend.herokuapp.com/");
        
        //Click Admin button
        driver.findElement(By.xpath("//*[@id=\"navbar-menu\"]/ul[2]/a[3]")).click();
        
        //Enter details 
        driver.findElement(By.id("email")).sendKeys("achinthasandakelum45@gmail.com");
        driver.findElement(By.id("password")).sendKeys("PetFeeder1@");
        //Login
        driver.findElement(By.xpath("/html/body/div[2]/div[3]/form/div[4]/button/span[1]")).click();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        
        //Enter a default otp for testing purposes
        // driver.findElement(By.xpath("//*[@id=\"otp\"]")).sendKeys("000000");
       
        try{
        	Thread.sleep(20000);
        	}
        	catch(InterruptedException ie){
        	}
        
        //Click submit otp
        driver.findElement(By.xpath("/html/body/div[2]/div[3]/form/button/span[1]")).click();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        
        try{
        	Thread.sleep(2000);
        	}
        	catch(InterruptedException ie){
        	}
        
        //Scorl down
        JavascriptExecutor js = (JavascriptExecutor)driver;  
        js.executeScript("scrollBy(0, 4000)");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        try{
        	Thread.sleep(2000);
        	}
        	catch(InterruptedException ie){
        	}

  
        js.executeScript("scrollBy(0, 1000)");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        try{
        	Thread.sleep(2000);
        	}
        	catch(InterruptedException ie){
        	}
        
        //Click dissable
        driver.findElement(By.xpath("//*[@id=\"main\"]/div/div[1]/section[2]/div/div[2]/div[8]/div/div[3]/div/button")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        try{
        	Thread.sleep(1000);
        	}
        	catch(InterruptedException ie){
        	}
        
        //confirm
        driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div[3]/button[2]")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        try{
        	Thread.sleep(2000);
        	}
        	catch(InterruptedException ie){
        	}
    
        //Click Enable
        driver.findElement(By.xpath("//*[@id=\"main\"]/div/div[1]/section[2]/div/div[2]/div[7]/div/div[3]/div/button")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        try{
        	Thread.sleep(1000);
        	}
        	catch(InterruptedException ie){
        	}
        
        //confirm
        driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div[3]/button[2]")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        try{
        	Thread.sleep(4000);
        	}
        	catch(InterruptedException ie){
        	}
    
        //Go to top
        driver.findElement(By.id("back-to-top")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        try{
        	Thread.sleep(2000);
        	}
        	catch(InterruptedException ie){
        	}
       
        //Enter email address to search a user
        driver.findElement(By.xpath("//*[@id=\"title\"]")).sendKeys("achinthasandakelum45@gmail.com");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        try{
        	Thread.sleep(1000);
        	}
        	catch(InterruptedException ie){
        	}
        
        js.executeScript("scrollBy(0, 2000)");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
       
        try{
        	Thread.sleep(2000);
        	}
        	catch(InterruptedException ie){
        	}
        
        //Go to top
        driver.findElement(By.id("back-to-top")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        try{
        	Thread.sleep(2000);
        	}
        	catch(InterruptedException ie){
        	}
        
        //Message tab
        driver.findElement(By.xpath("//*[@id=\"navbar-menu\"]/ul[2]/a[3]")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        try{
        	Thread.sleep(2000);
        	}
        	catch(InterruptedException ie){
        	}
        
        //Enter email address
        driver.findElement(By.id("email")).sendKeys("achinthasandakelum45@gmail.com");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        try{
        	Thread.sleep(1000);
        	}
        	catch(InterruptedException ie){
        	}
        
        //Enter the title
        driver.findElement(By.id("title")).sendKeys("Test message");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        try{
        	Thread.sleep(1000);
        	}
        	catch(InterruptedException ie){
        	}
        
        //Enter the message
        driver.findElement(By.name("message")).sendKeys("Test message 1. Test message 2.");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        try{
        	Thread.sleep(1000);
        	}
        	catch(InterruptedException ie){
        	}
        
        //Click send message
        driver.findElement(By.xpath("//*[@id=\"main\"]/div/div[1]/section/div/div/div/div/button")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        try{
        	Thread.sleep(4000);
        	}
        	catch(InterruptedException ie){
        	}
        
        //Broadcast tab
        driver.findElement(By.xpath("//*[@id=\"navbar-menu\"]/ul[2]/a[4]")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        try{
        	Thread.sleep(2000);
        	}
        	catch(InterruptedException ie){
        	}
        
        //Enter the title
        driver.findElement(By.id("title")).sendKeys("Test broadcast");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        try{
        	Thread.sleep(1000);
        	}
        	catch(InterruptedException ie){
        	}
        
        //Enter the message
        driver.findElement(By.name("message")).sendKeys("Test broadcast 1. Test broadcast 2.");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        try{
        	Thread.sleep(1000);
        	}
        	catch(InterruptedException ie){
        	}
        
        //Click send broadcast
        driver.findElement(By.xpath("//*[@id=\"main\"]/div/div[1]/section/div/div/div/div/button")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        try{
        	Thread.sleep(4000);
        	}
        	catch(InterruptedException ie){
        	}
        
        //Log-out
        driver.findElement(By.xpath("//*[@id=\"navbar-menu\"]/ul[2]/a[5]")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
    }
}
