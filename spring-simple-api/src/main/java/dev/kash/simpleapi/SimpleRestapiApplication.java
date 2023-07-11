package dev.kash.simpleapi;


import dev.kash.simpleapi.config.RsaKeyProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(RsaKeyProperties.class)
public class SimpleRestapiApplication {

	public static void main(String[] args) {
		SpringApplication.run(SimpleRestapiApplication.class, args);
	}

}
