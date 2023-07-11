package dev.kash.simpleapi.controller;


import dev.kash.simpleapi.dto.AuthenticationRequest;
import dev.kash.simpleapi.dto.AuthenticationResponse;
import dev.kash.simpleapi.service.JwtTokenService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    private static final Logger LOG = LoggerFactory.getLogger(AuthController.class);

    private final JwtTokenService jwtTokenService;

    @Autowired
    private AuthenticationProvider authenticationProvider;


    public AuthController(JwtTokenService jwtTokenService) {
        this.jwtTokenService = jwtTokenService;
    }

    @PostMapping("/token")
    public ResponseEntity<?> generateToken(@RequestBody AuthenticationRequest authRequest) throws Exception{
        LOG.info("Token request for user: {}", authRequest.getUsername());
        Authentication authentication = null;

        try {
            authentication = authenticationProvider.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            authRequest.getUsername(),
                            authRequest.getPassword()
                    )
            );
        } catch (BadCredentialsException bce) {
            LOG.error(bce.getMessage());
            LOG.error("Incorrect username or password");
            LOG.error("username: " + authRequest.getUsername());
            LOG.error("password: " + authRequest.getPassword());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect username or password");
        } catch (AuthenticationException ae) {
            LOG.error(ae.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Error encountered");
        }

        // Valid user
        String token = jwtTokenService.generateToken(authentication);
        LOG.info("Token generated {}", token);
        return ResponseEntity.ok(new AuthenticationResponse(token));
    }

}
