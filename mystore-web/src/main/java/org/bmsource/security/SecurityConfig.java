//package org.bmsource.security;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//
//	@Autowired
//	UserDetailsServiceImpl userDetailsService;
//
// 	@Override
// 	protected void configure(HttpSecurity http) throws Exception {
//        http
//        .authorizeRequests()
//            .antMatchers("/", "/home", "/users", "/swagger-ui.html").permitAll()
//            .anyRequest().authenticated()
//            .and()
//        .formLogin()
//            .loginPage("/login")
//            .permitAll()
//            .and()
//        .logout()
//            .permitAll();
// 	}
//
//}
