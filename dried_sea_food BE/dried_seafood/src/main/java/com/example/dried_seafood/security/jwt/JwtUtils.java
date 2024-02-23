package com.example.dried_seafood.security.jwt;

import com.example.dried_seafood.model.auth.MyUserDetail;
import com.example.dried_seafood.service.impl.auth.MyUserDetailService;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
@Component
public class JwtUtils {
    @Autowired
    private MyUserDetailService myUserDetailService;
    private static final String SECRET_KEY = "===NGUYEN==DUC==TRUNG==================================";
    private static final long EXPIRE_TIME = 86400000L;

    public String createToken(MyUserDetail userPrincipal) {
        String jwt = generateTokenFromUserName(userPrincipal.getUsername());
        return jwt;
    }

    private Key key() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(SECRET_KEY));
    }

    public String generateTokenFromUserName(String userName) {
        MyUserDetail myUserDetail = (MyUserDetail) myUserDetailService.loadUserByUsername(userName);
        Map<String, Object> claims = new HashMap<>();
        claims.put("role", myUserDetail.getAuthorities());
        return Jwts.builder()
                .setSubject(userName)
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + EXPIRE_TIME))
                .signWith(key(), SignatureAlgorithm.HS256)
                .addClaims(claims)
                .compact();
    }

    public String getUserNameFromJwtToken(String token) {
        return Jwts.parser().setSigningKey(key()).build()
                .parseClaimsJws(token).getBody().getSubject();
    }

    public boolean validateJwtToken(String authToken) throws Exception {
        try {
            Jwts.parser().setSigningKey(key()).build().parse(authToken);
            return true;
        } catch (MalformedJwtException e) {
            throw new Exception("Token JWT không hợp lệ: " + e.getMessage());
        } catch (ExpiredJwtException e) {
            throw new Exception("Token JWT đã hết hạn: " + e.getMessage());
        } catch (UnsupportedJwtException e) {
            throw new Exception("Token JWT không được hỗ trợ: " + e.getMessage());
        } catch (IllegalArgumentException e) {
            throw new Exception("Token JWT không hợp lệ: " + e.getMessage());
        }
    }


}
