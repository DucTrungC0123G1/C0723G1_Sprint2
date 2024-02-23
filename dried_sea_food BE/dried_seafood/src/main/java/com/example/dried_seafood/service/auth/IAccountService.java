package com.example.dried_seafood.service.auth;

import com.example.dried_seafood.model.auth.Accounts;
import org.springframework.stereotype.Service;

import java.util.Optional;


public interface IAccountService {
    Optional<Accounts> findByUser(String userName);

    Accounts addAccount(Accounts accounts);

    void addAccountRole(Integer id, Integer idRole);
}
