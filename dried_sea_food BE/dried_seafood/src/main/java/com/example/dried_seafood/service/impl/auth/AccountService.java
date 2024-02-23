package com.example.dried_seafood.service.impl.auth;

import com.example.dried_seafood.model.auth.Accounts;
import com.example.dried_seafood.repository.auth.IAccountRepository;
import com.example.dried_seafood.service.auth.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class AccountService implements IAccountService {

    @Autowired
    private IAccountRepository accountRepository;

    @Override
    public Optional<Accounts> findByUser(String userName) {
        return accountRepository.findByUserName(userName);
    }

    @Override
    public Accounts addAccount(Accounts accounts) {
        try {
            accountRepository.addAccount(accounts);
            Accounts accountsNew = accountRepository.getAccountByUserName(accounts.getUserName());
            return accountsNew;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public void addAccountRole(Integer idAccount, Integer idRole) {
        try {
            accountRepository.addAccountRole(idAccount,idRole);
        }catch (Exception e){
            e.getMessage();
        }
    }
}
