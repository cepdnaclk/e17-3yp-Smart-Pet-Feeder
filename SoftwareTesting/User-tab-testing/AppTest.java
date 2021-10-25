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
        
        //Click Log-in button
        driver.findElement(By.xpath("//*[@id=\"navbar-menu\"]/ul[2]/a[1]")).click();
        
        //Enter details
        driver.findElement(By.id("email")).sendKeys("achinthasandakelum45@gmail.com");
        driver.findElement(By.id("password")).sendKeys("PetFeeder1@");
           
        //Login
        driver.findElement(By.xpath("/html/body/div[2]/div[3]/form/div[4]/button/span[1]")).click();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        
        //Click otp 
        driver.findElement(By.xpath("//*[@id=\"otp\"]")).click();       
        Thread.sleep(14000);
        //Click submit otp
        driver.findElement(By.xpath("/html/body/div[2]/div[3]/form/button/span[1]")).click();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        Thread.sleep(4000);
        
        //Status tab
        driver.findElement(By.xpath("//*[@id=\"navbar-menu\"]/ul[2]/a[1]")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(2000);
        
        //Scorl down
        JavascriptExecutor js = (JavascriptExecutor)driver;  
        js.executeScript("scrollBy(0, 5000)");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(2000);

        //Go to top
        driver.findElement(By.id("back-to-top")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(2000);
        
        //Feed now
        driver.findElement(By.xpath("//*[@id=\"main\"]/div/div[1]/section[2]/div/div[2]/div/span/button")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(1000);
        
        //Confirm
        driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div[2]/div/button[2]/span[1]/span")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(2000);
        
        js.executeScript("scrollBy(0, 5000)");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(2000);
     
        //Add schedule
        driver.findElement(By.xpath("//*[@id=\"11\"]/span/button")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(1000);
        
        //Add Schedule name
        driver.findElement(By.id("title")).sendKeys("Test schedule 1");
        Thread.sleep(1000);
        
        driver.findElement(By.id("date")).sendKeys("10282021");
        Thread.sleep(1000);
        
        driver.findElement(By.id("time")).sendKeys("1000AM");
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        Thread.sleep(1000);
            
        //Comfirm
        driver.findElement(By.xpath("/html/body/div[2]/div[3]/div[4]/div[2]/button")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(4000);
        
        //Delete schedule
        driver.findElement(By.xpath("/html/body/div/div/div[1]/section[2]/div/div[3]/div[1]/div/div/div[2]/button")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);// WebDriverWait wait = new WebDriverWait(driver,30);
        Thread.sleep(1000);
        
        //Confirm
        driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div[2]/button[2]/span[1]/span")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(4000);
        
        //Go to top
        driver.findElement(By.id("back-to-top")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(2000);
        
        driver.findElement(By.xpath("//*[@id=\"navbar-menu\"]/ul[2]/a[2]")).click();	//History taqb
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        Thread.sleep(2000);
        
        driver.findElement(By.xpath("//*[@id=\"navbar-menu\"]/ul[2]/a[3]")).click();	//Video tab
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        Thread.sleep(2000);
        
        driver.findElement(By.xpath("//*[@id=\"navbar-menu\"]/ul[2]/a[4]")).click();	//Notification taqb
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        Thread.sleep(2000);
        
 
        driver.findElement(By.xpath("//*[@id=\"navbar-menu\"]/ul[2]/a[5]")).click();	//Message tab
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        Thread.sleep(2000);
        
        //Put a message
        driver.findElement(By.id("title")).sendKeys("Achintha Sandakelum");
        Thread.sleep(2000);
        
        driver.findElement(By.name("message")).sendKeys("Test message 1, Test message 2");
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        Thread.sleep(1000);
        
        //Send
        driver.findElement(By.xpath("//*[@id=\"main\"]/div/div[1]/section/div/div/div/div/button")).click();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        Thread.sleep(4000);
         
        //Log-out
        driver.findElement(By.xpath("//*[@id=\"navbar-menu\"]/ul[2]/a[6]")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(2000);
        driver.quit();        
    }
}
