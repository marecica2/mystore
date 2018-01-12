package org.bmsource.mystore;

import org.bmsource.mystore.user.User;
import org.bmsource.mystore.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.core.io.ClassPathResource;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.provider.token.DefaultTokenServices;
import org.springframework.security.oauth2.provider.token.RemoteTokenServices;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;
import org.springframework.security.oauth2.provider.token.store.KeyStoreKeyFactory;

@SpringBootApplication
public class MystoreApplication implements CommandLineRunner {

	@Autowired
	private UserRepository repository;

	@Autowired
	private PasswordEncoder encoder;
	
	public static void main(String[] args) {
		SpringApplication.run(MystoreApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		repository.deleteAll();

		// save a couple of customers
		repository.save(new User("admin", encoder.encode("admin"), "Admin", "Admin"));
		repository.save(new User("marecica2@gmail.com", encoder.encode("1mballa"), "Marek", "Balla"));
		repository.save(new User("alice.smith@gmail.com", encoder.encode("123"), "Alice", "Smith"));
		repository.save(new User("bob.smith@gmail.com", encoder.encode("123") ,"Bob", "Smith"));
		repository.save(new User("maurice.moss@gmail.com", encoder.encode("123"), "Maurice", "Moss"));

		// fetch all customers
		System.out.println("Customers found with findAll():");
		System.out.println("-------------------------------");
		for (User customer : repository.findAll()) {
			System.out.println(customer);
		}

	}

}