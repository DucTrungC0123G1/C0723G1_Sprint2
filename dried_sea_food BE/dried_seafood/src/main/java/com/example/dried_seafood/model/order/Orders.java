package com.example.dried_seafood.model.order;
import com.example.dried_seafood.model.customer.Customer;
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
@Table(name = "orders")
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false, unique = true)
    private String code;
    @Column(columnDefinition = "date",nullable = false)
    private String purchased_date;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "id_customer", referencedColumnName = "id",unique = true, nullable = false)
    private Customer customer;

}
