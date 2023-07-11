package dev.kash.simpleapi.service;

import dev.kash.simpleapi.dto.UserDto;
import dev.kash.simpleapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JpaUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        UserDto userDto = UserDto.toUserDto(userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Error finding user")));

        return User.withUsername(userDto.getUsername())
                .password(userDto.getPassword())
                .authorities(userDto.getRoles())
                .build();
    }


}
