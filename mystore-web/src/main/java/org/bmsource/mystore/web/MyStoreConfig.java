package org.bmsource.mystore.web;

import com.mongodb.MongoClient;
import com.mongodb.ServerAddress;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.Collections;

@Configuration
@EnableMongoRepositories("org.bmsource.mystore.web.customer")
public class MyStoreConfig {

    @Bean
    public MongoClient mongoClient() {
        return new MongoClient(Collections.singletonList(new ServerAddress("172.18.0.2", 27017)));
    }

    @Bean
    public MongoTemplate mongoTemplate() {
        return new MongoTemplate(mongoClient(), "mystore");
    }

}
