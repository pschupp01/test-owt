package com.owt.boatapp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfiguration {

    public SecurityConfiguration() {
    }

    @Bean
    public SecurityFilterChain boatFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .securityMatchers((matchers) -> matchers
 				    .requestMatchers("/boats")
                )
	  			.authorizeHttpRequests()
                .anyRequest()
                .permitAll();

        return http.build();
    }
}
