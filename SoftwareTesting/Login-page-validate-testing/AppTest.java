package Software_Testing;
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
                
        //Test case 1
        //No email and password
        driver.findElement(By.id("email")).sendKeys("");
        driver.findElement(By.id("password")).sendKeys("");
        Thread.sleep(2000);
        
        //Test case 2 
        //Wrong email format
        driver.findElement(By.id("email")).sendKeys("petfeeder");
        Thread.sleep(2000);
        driver.findElement(By.id("password")).sendKeys("password");
        Thread.sleep(2000);
        
        //Test case 3
        //Not registered email address
        driver.findElement(By.id("email")).sendKeys("@gmail.com");
        Thread.sleep(2000);
        //Login
        driver.findElement(By.xpath("/html/body/div[2]/div[3]/form/div[4]/button")).click();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        Thread.sleep(2000);
        driver.findElement(By.id("email")).clear();
        Thread.sleep(2000);
        
        //Test case 4 
        //Wrong password
        driver.findElement(By.id("email")).sendKeys("achinthasandakelum45@gmail.com");
        Thread.sleep(2000);
        driver.findElement(By.id("password")).sendKeys("PetFeeder1@");

        Thread.sleep(2000);
        //Login
        driver.findElement(By.xpath("/html/body/div[2]/div[3]/form/div[4]/button")).click();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        Thread.sleep(2000);
        driver.findElement(By.id("password")).clear(); 
        Thread.sleep(1000);
        
        driver.findElement(By.id("password")).sendKeys("PetFeeder1@");
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        Thread.sleep(2000);        	
        
        //Login
        driver.findElement(By.xpath("/html/body/div[2]/div[3]/form/div[4]/button")).click();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        Thread.sleep(6000); 
        driver.quit();
        
    }
}
