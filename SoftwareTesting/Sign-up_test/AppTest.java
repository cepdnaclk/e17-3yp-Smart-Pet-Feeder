package Software_Testing;

import static org.junit.Assert.assertTrue;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class AppTest 
{
 
    @Test
    public void shouldAnswerWithTrue()
    {
    	System.setProperty("webdriver.chrome.driver", "C:\\Users\\A\\Downloads\\Chromedriver\\81\\chromedriver.exe");
    	
        WebDriver driver = new ChromeDriver(); //New chrome driver
        
        //Go to the Websie Homepage
        driver.get("http://localhost:3000/home");
        
        //Click sign-up button
        driver.findElement(By.xpath("//*[@id=\"navbar-menu\"]/ul[2]/a[2]")).click();
        
        //Enter details
        driver.findElement(By.id("name")).sendKeys("Achintha Sandakalum");
        driver.findElement(By.id("email")).sendKeys("achinthasandakelum45@gmail.com");
        driver.findElement(By.id("mobile")).sendKeys("0779558616");
        driver.findElement(By.id("password")).sendKeys("PetFeeder1@");
        driver.findElement(By.id("confirmPassword")).sendKeys("PetFeeder1@");
        
        //Click Register button
        driver.findElement(By.xpath("/html/body/div[2]/div[3]/form/div[7]")).click();
             
    }
}
