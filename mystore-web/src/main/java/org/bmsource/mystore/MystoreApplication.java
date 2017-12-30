package org.bmsource.mystore;

import org.bmsource.mystore.user.User;
import org.bmsource.mystore.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MystoreApplication implements CommandLineRunner {

	@Autowired
	private UserRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(MystoreApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		repository.deleteAll();

		// save a couple of customers
		repository.save(new User("admin", "admin", "Admin", "Admin"));
		repository.save(new User("marecica2@gmail.com", "1mballa", "Marek", "Balla"));
		repository.save(new User("alice.smith@gmail.com", "123", "Alice", "Smith"));
		repository.save(new User("bob.smith@gmail.com", "123" ,"Bob", "Smith"));
		repository.save(new User("maurice.moss@gmail.com", "123", "Maurice", "Moss"));

		// fetch all customers
		System.out.println("Customers found with findAll():");
		System.out.println("-------------------------------");
		for (User customer : repository.findAll()) {
			System.out.println(customer);
		}

	}
}