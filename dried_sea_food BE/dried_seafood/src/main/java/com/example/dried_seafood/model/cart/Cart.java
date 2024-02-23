package com.example.dried_seafood.model.cart;

import com.example.dried_seafood.model.customer.Customer;
import com.example.dried_seafood.model.product.Products;
import com.example.dried_seafood.model.size.SizeDetail;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Setter
@Table(name = "cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false)
    private Integer purchased_quantity;

    @ManyToOne
    @JoinColumn(name = "id_customer", referencedColumnName = "id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "id_size_detail", referencedColumnName = "id")
    private SizeDetail sizeDetail;
}
