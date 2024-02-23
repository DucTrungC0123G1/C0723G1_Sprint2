package com.example.dried_seafood.repository.auth;

import com.example.dried_seafood.model.auth.Accounts;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface IAccountRepository extends JpaRepository<Accounts,Long> {
    @Query(value = "SELECT * FROM accounts as a WHERE a.user_name = :userName",nativeQuery = true)
    Optional<Accounts> findByUserName(@Param("userName") String username);


    @Transactional
    @Modifying
    @Query(value = "INSERT INTO accounts (userName,password)" +
            " VALUES ( :#{#accounts.userName},:#{#accounts.password})",nativeQuery = true)
    void addAccount(@Param("accounts") Accounts accounts);


    @Query(value = "SELECT accounts.* FROM accounts WHERE userName = :userName",nativeQuery = true)
    Accounts getAccountByUserName(@Param("userName") String userName);


    @Transactional
    @Modifying
    @Query(value = "INSERT INTO account_role (id_account,id_role) " +
            "VALUES ( :idAccount, :idRole ) ", nativeQuery = true)
    void addAccountRole(@Param("idAccount") int idAccount,@Param("idRole") int idRole);

}
