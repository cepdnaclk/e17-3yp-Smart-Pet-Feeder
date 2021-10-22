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
        
        //Click Log-in button
        driver.findElement(By.xpath("//*[@id=\"navbar-menu\"]/ul[2]/a[1]")).click();
        
        //Enter details
        driver.findElement(By.id("email")).sendKeys("achinthasandakelum45@gmail.com");
        driver.findElement(By.id("password")).sendKeys("PetFeeder1@");
        
        //Login
        driver.findElement(By.xpath("/html/body/div[2]/div[3]/form/div[4]/button/span[1]")).click();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

        //Enter a default otp for testing purposes
        driver.findElement(By.xpath("//*[@id=\"otp\"]")).sendKeys("000000");
       
        //Click submit otp
        driver.findElement(By.xpath("/html/body/div[2]/div[3]/form/button/span[1]")).click();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
 
        driver.findElement(By.xpath("//*[@id=\"navbar-menu\"]/ul[2]/a[5]")).click();	//Message tab
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        
        //Put a message
        driver.findElement(By.id("title")).sendKeys("Achintha Sandakelum");
        driver.findElement(By.name("message")).sendKeys("Test message 1, Test message 2");
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        
        //Send
        driver.findElement(By.xpath("//*[@id=\"main\"]/div/div[1]/section/div/div/div/div/button")).click();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        
        driver.findElement(By.xpath("//*[@id=\"navbar-menu\"]/ul[2]/a[4]")).click();	//Notification taqb
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        
        driver.findElement(By.xpath("//*[@id=\"navbar-menu\"]/ul[2]/a[3]")).click();	//Video tab
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        
        
    }
}
