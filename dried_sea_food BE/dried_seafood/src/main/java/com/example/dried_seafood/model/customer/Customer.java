package com.example.dried_seafood.model.customer;

import com.example.dried_seafood.model.auth.Accounts;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column( nullable = false, unique = true)
    private String code;
    @Column(nullable = false)
    private String name;
    @Column(columnDefinition = "date",nullable = false)
    private String birthday;
    @Column(columnDefinition = "bit(1)")
    private Boolean gender;
    @Column(nullable = false)
    private String phone;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String address;
    @Column(columnDefinition = "bit(1)")
    private Boolean is_delete;


    @OneToOne
    @JsonBackReference
    @JoinColumn(name = "id_account")
    private Accounts accounts;


}
