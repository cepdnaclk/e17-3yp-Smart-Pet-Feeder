package Software_Testing;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.chrome.ChromeDriver;

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
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(2000);
        
        //Click sign-up button
        driver.findElement(By.xpath("//*[@id=\"navbar-menu\"]/ul[2]/a[2]")).click();
        
        //Sign-up form validation
        
        //Test case 1
        //Empty fields
        driver.findElement(By.id("name")).click();
        driver.findElement(By.id("email")).click();
        driver.findElement(By.id("mobile")).click();
        driver.findElement(By.id("password")).click();
        driver.findElement(By.id("confirmPassword")).click();
        Thread.sleep(2000);
        
        //Test case 2
        //Email address test
        driver.findElement(By.id("name")).sendKeys("Achintha Sandakelum");
        driver.findElement(By.id("email")).sendKeys("achinthasadakelum");
        Thread.sleep(2000);
        driver.findElement(By.id("email")).sendKeys("45@");
        Thread.sleep(2000);
        driver.findElement(By.id("email")).sendKeys("gmail");
        Thread.sleep(2000);
        driver.findElement(By.id("email")).sendKeys(".com");
        Thread.sleep(2000);
       
        //Test case 3
        //Mobile number test
        driver.findElement(By.id("mobile")).sendKeys("077");
        Thread.sleep(2000); 
        driver.findElement(By.id("mobile")).sendKeys("955");
        Thread.sleep(1000); 
        driver.findElement(By.id("mobile")).sendKeys("8686");
        Thread.sleep(2000); 
        driver.findElement(By.id("mobile")).sendKeys("12");
        Thread.sleep(2000);
        driver.findElement(By.id("mobile")).clear();
        driver.findElement(By.id("mobile")).sendKeys("0779558616");
        Thread.sleep(2000); 
        
        //Test case 4
        //Password test
        driver.findElement(By.id("password")).sendKeys("Pet");
        Thread.sleep(2000); 
        driver.findElement(By.id("password")).sendKeys("Feeder1@");
        Thread.sleep(2000); 
        driver.findElement(By.id("confirmPassword")).sendKeys("Pet");
        Thread.sleep(2000); 
        driver.findElement(By.id("confirmPassword")).sendKeys("Feeder1@");
        Thread.sleep(2000);
        
        //Click Register button
        driver.findElement(By.xpath("/html/body/div[2]/div[3]/form/div[7]")).click(); 
        Thread.sleep(2000);
        driver.quit();
    }
}

