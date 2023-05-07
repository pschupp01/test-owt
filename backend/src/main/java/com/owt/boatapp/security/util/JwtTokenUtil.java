package com.owt.boatapp.security.util;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Component;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtTokenUtil {
  private SecretKey secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS256);

  /*
   * public String getJwtFromCookies(HttpServletRequest request) {
   * Cookie cookie = WebUtils.getCookie(request, jwtCookie);
   * if (cookie != null) {
   * return cookie.getValue();
   * } else {
   * return null;
   * }
   * }
   * 
   * public ResponseCookie generateJwtCookie(CustomUserDetails userPrincipal) {
   * String jwt = generateTokenFromUsername(userPrincipal.getUsername());
   * ResponseCookie cookie = ResponseCookie.from(jwtCookie,
   * jwt).path("/").maxAge(24 * 60 * 60).httpOnly(true)
   * .build();
   * return cookie;
   * }
   * 
   * public ResponseCookie getCleanJwtCookie() {
   * ResponseCookie cookie = ResponseCookie.from(jwtCookie,
   * null).path("/").build();
   * return cookie;
   * }
   */
  public String getUserNameFromJwtToken(String token) {
    return Jwts.parserBuilder().setSigningKey(secretKey).build().parseClaimsJws(token).getBody().getSubject();
  }

  public boolean validateJwtToken(String authToken) {
    try {
      Jwts.parserBuilder().setSigningKey(secretKey).build().parseClaimsJws(authToken);
      return true;
    } catch (Exception e) {
      e.printStackTrace();
    }

    return false;
  }

  public String generateTokenFromUsername(String username) {
    return Jwts.builder()
        .setSubject(username)
        .setIssuedAt(new Date())
        .setExpiration(new Date((new Date()).getTime() + 20000000))
        .signWith(secretKey)
        .compact();
  }
}