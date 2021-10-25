package Software_Testing;
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
    public void shouldAnswerWithTrue() throws InterruptedException
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
        
        //Click otp
        driver.findElement(By.id("otp")).click();
        Thread.sleep(10000);
        
        //Click submit otp
        driver.findElement(By.xpath("/html/body/div[2]/div[3]/form/button/span[1]")).click();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        Thread.sleep(4000);
        
        //Scorl down
        JavascriptExecutor js = (JavascriptExecutor)driver;  
        js.executeScript("scrollBy(0, 1000)");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(2000);
  
        //Click dissable
        driver.findElement(By.xpath("//*[@id=\"6\"]/button")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(1000);
        
        //confirm
        driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div[3]/button[2]/span[1]")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(2000);
    
        //Click Enable
        driver.findElement(By.xpath("//*[@id=\"7\"]/button")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(1000);
        
        //confirm
        driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div[3]/button[2]/span[1]")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(4000);
    
        //Go to top
        driver.findElement(By.id("back-to-top")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(2000);
       
        //Enter email address to search a user
        driver.findElement(By.xpath("//*[@id=\"title\"]")).sendKeys("achinthasandakelum45@gmail.com");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(1000);
        
        js.executeScript("scrollBy(0, 2000)");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(2000);
        
        //Go to top
        driver.findElement(By.id("back-to-top")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(2000);
        
        //Feedback tab
        driver.findElement(By.xpath("//*[@id=\"navbar-menu\"]/ul[2]/a[2]")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(2000);
        
        //Not resolved
        driver.findElement(By.xpath("//*[@id=\"main\"]/div/div[1]/section/div/div[2]/div/div[2]/div/div[3]")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(2000);
        
        //Reply
        driver.findElement(By.name("title")).sendKeys("Test reply");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(1000);
        
        driver.findElement(By.name("message")).sendKeys("Test reply message 1. Test reply message 2.");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(1000);
        
        //Click send
        driver.findElement(By.xpath("/html/body/div[2]/div[3]/div[4]/button")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(2000);
        
        
        //Message tab
        driver.findElement(By.xpath("//*[@id=\"navbar-menu\"]/ul[2]/a[3]")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(2000);
        
        //Enter email address
        driver.findElement(By.id("email")).sendKeys("achinthasandakelum45@gmail.com");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(1000);
        
        //Enter the title
        driver.findElement(By.id("title")).sendKeys("Test message");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(1000);
        
        //Enter the message
        driver.findElement(By.name("message")).sendKeys("Test message 1. Test message 2.");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(1000);
        
        //Click send message
        driver.findElement(By.xpath("//*[@id=\"main\"]/div/div[1]/section/div/div/div/div/button")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(4000);
        
        //Broadcast tab
        driver.findElement(By.xpath("//*[@id=\"navbar-menu\"]/ul[2]/a[4]")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(2000);
        
        //Enter the title
        driver.findElement(By.id("title")).sendKeys("Test broadcast");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(1000);
        
        //Enter the message
        driver.findElement(By.name("message")).sendKeys("Test broadcast 1. Test broadcast 2.");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(1000);
        
        //Click send broadcast
        driver.findElement(By.xpath("//*[@id=\"main\"]/div/div[1]/section/div/div/div/div/button")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(4000);
        
        //Log-out
        driver.findElement(By.xpath("//*[@id=\"navbar-menu\"]/ul[2]/a[5]")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(2000);
        driver.quit();
        
    }
}
